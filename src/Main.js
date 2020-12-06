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
}
