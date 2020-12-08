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
        this.setState({
          selectedTrainer: id,
          trainerData,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  render() {
    return (
      <div className="Container">
        <div className="Trainer">
          <TrainerList
            trainerList={this.state.trainerList}
            selectTrainer={this.selectTrainer}
          />
          <TrainerView
            trainerData={this.state.trainerData}
            sendToPC={this.sendToPC}
          />
        </div>

        <PokePC
          pokePCList={this.state.pokePCList}
          selectPokemon={this.selectPokemon}
        />
        <PokemonView
          selectedPokemon={this.state.selectedPokemon}
          sendToTrainer={this.sendToTrainer}
        />
      </div>
    );
  }
}

export default Main;
