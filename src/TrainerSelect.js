import React from 'react';

class TrainerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.selectTrainer(this.state.value);
    });
  }

  render() {
    return (
      <label>
        Trainer Selection:
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.trainerList.map((trainer) => (
            <option key={trainer.id} value={trainer.id}>
              {trainer.name}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default TrainerSelect;
