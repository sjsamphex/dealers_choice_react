import React from 'react';
import TrainerSubmit from './TrainerSubmit';
import TrainerSelect from './TrainerSelect';

function TrainerList(props) {
  const { trainerList, selectTrainer, createTrainer, selectedTrainer } = props;
  return (
    <div className="TrainerList">
      <TrainerSelect
        trainerList={trainerList}
        selectTrainer={selectTrainer}
        selectedTrainer={selectedTrainer}
      />
      <TrainerSubmit createTrainer={createTrainer} />
    </div>
  );
}

export default TrainerList;
