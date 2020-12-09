import React from 'react';
import axios from 'axios';
import TrainerView from './TrainerView';
import PokePC from './PokePC';
import PokemonView from './PokemonView';
import TrainerList from './TrainerList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokePCList: [],
      trainerList: [],
      selectedTrainer: 1,
      trainerData: {},
      selectedPokemon: {},
    };
    this.selectPokemon = this.selectPokemon.bind(this);
    this.selectTrainer = this.selectTrainer.bind(this);
    this.sendToTrainer = this.sendToTrainer.bind(this);
    this.sendToPC = this.sendToPC.bind(this);
    this.createTrainer = this.createTrainer.bind(this);
    this.deleteTrainer = this.deleteTrainer.bind(this);
  }
  async componentDidMount() {
    this.updateData();
  }
  async updateData() {
    try {
      const trainerList = (await axios.get(`/api/trainers`)).data;
      const trainerData = (
        await axios.get(`/api/trainers/${this.state.selectedTrainer}`)
      ).data;

      const pokePCList = (await axios.get(`/api/trainers/3`)).data.pokemons;
      this.setState({
        trainerList,
        trainerData,
        pokePCList,
        selectedPokemon: pokePCList[0],
      });
    } catch (ex) {
      console.log(ex);
    }
  }
  async sendToTrainer() {
    try {
      await axios({
        method: 'post',
        url: '/api/sendToTrainer',
        headers: {},
        data: {
          selectedTrainer: this.state.trainerData,
          selectedPokemon: this.state.selectedPokemon,
        },
      });

      this.updateData();
    } catch (error) {
      console.log(error);
    }
  }
  async sendToPC(pokemonId) {
    try {
      await axios({
        method: 'post',
        url: '/api/sendToPC',
        headers: {},
        data: {
          selectedPokemon: pokemonId,
        },
      });

      this.updateData();
    } catch (error) {
      console.log(error);
    }
  }
  selectPokemon(pokemon) {
    this.setState({
      selectedPokemon: pokemon,
    });
  }
  async selectTrainer(id) {
    if (this.state.selectedTrainer !== id) {
      try {
        const trainerData = (await axios.get(`/api/trainers/${id}`)).data;
        const trainerList = (await axios.get(`/api/trainers`)).data;
        this.setState({
          selectedTrainer: id,
          trainerData,
          trainerList,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  async createTrainer(trainerName) {
    try {
      const newTrainer = await axios({
        method: 'post',
        url: '/api/createTrainer',
        headers: {},
        data: {
          trainerName: trainerName,
        },
      });
      this.selectTrainer(newTrainer.data.id);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteTrainer() {
    try {
      const newTrainer = await axios({
        method: 'delete',
        url: '/api/deleteTrainer',
        headers: {},
        data: {
          selectedTrainer: this.state.selectedTrainer,
        },
      });
      this.updateData();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="Container">
        <div className="Trainer">
          <TrainerList
            trainerList={this.state.trainerList}
            selectTrainer={this.selectTrainer}
            createTrainer={this.createTrainer}
            selectedTrainer={this.state.selectedTrainer}
          />
          <TrainerView
            trainerData={this.state.trainerData}
            sendToPC={this.sendToPC}
            deleteTrainer={this.deleteTrainer}
          />
        </div>
        <div className="Pokemon">
          <PokemonView
            selectedPokemon={this.state.selectedPokemon}
            sendToTrainer={this.sendToTrainer}
            trainerData={this.state.trainerData}
          />
          <PokePC
            pokePCList={this.state.pokePCList}
            selectPokemon={this.selectPokemon}
            sendToTrainer={this.sendToTrainer}
          />
        </div>
      </div>
    );
  }
}

export default Main;
