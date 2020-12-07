import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokePCList: [],
      selectedTrainer: 'Ash',
      trainerData: {},
    };
  }
  render() {
    return <h3>hello react this is react</h3>;
  }
}
