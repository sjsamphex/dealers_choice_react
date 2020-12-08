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
    this.updateTrainer = this.updateTrainer.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
    this.selectTrainer = this.selectTrainer.bind(this);
  }
  async componentDidMount() {
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
  async updateTrainer() {}
  selectPokemon(id) {
    console.log('selecting pokemon ', id);
    this.setState({
      selectedPokemon: this.state.pokePCList[parseInt(id) - 1],
    });
  }
  selectTrainer(id) {
    this.setState({
      selectedTrainer: this.state.trainerList[parseInt(id) - 1],
    });
  }
  render() {
    return (
      <div>
        <h3>PokePC</h3>
        <div className="Container">
          <div className="Trainer">
            <TrainerList
              trainerList={this.state.trainerList}
              selectTrainer={this.selectTrainer}
            />
            <TrainerView selectedTrainer={this.state.selectedTrainer} />
          </div>

          <PokePC
            pokePCList={this.state.pokePCList}
            selectPokemon={this.selectPokemon}
          />
          <PokemonView selectedPokemon={this.state.selectedPokemon} />
        </div>
      </div>
    );
  }
}

export default Main;
