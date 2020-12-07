import React from 'react';
import axios from 'axios';
import TrainerView from './trainerview';
import PokePC from './PokePC';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokePCList: [],
      selectedTrainer: 1,
      trainerData: {},
    };
    this.updateTrainer = this.updateTrainer.bind(this);
  }
  async componentDidMount() {
    try {
      const trainerData = (
        await axios.get(`/api/trainers/${this.state.selectedTrainer}`)
      ).data;

      const pokePCList = (await axios.get(`/api/trainers/3`)).data.pokemons;
      this.setState({
        trainerData,
        pokePCList,
      });
    } catch (ex) {
      console.log(ex);
    }
  }
  async updateTrainer() {}
  render() {
    return (
      <div>
        <h3>hello world this is react</h3>
        <TrainerView />
        <PokePC pokePCList={this.state.pokePCList} />
      </div>
    );
  }
}

export default Main;
