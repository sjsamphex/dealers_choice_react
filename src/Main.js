import React from 'react';
import axios from 'axios';

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
      // const trainerData = (
      //   await axios.get(`/api/trainer/${this.state.selectedTrainer}`)
      // ).data;
      // const pokePCList = (await axios.get(/api/aeinrrt / 3)).data.pokemons;
      // this.setState({
      //   trainerData,
      //   pokePCList,
      // });
    } catch (ex) {
      console.log(ex);
    }
  }
  async updateTrainer() {}
  render() {
    return <h3>hello world this is react</h3>;
  }
}

export default Main;
