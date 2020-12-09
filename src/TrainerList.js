import React from 'react';
import TrainerSubmit from './TrainerSubmit';
import TrainerSelect from './TrainerSelect';

function TrainerList(props) {
  const { trainerList, selectTrainer, createTrainer, selectedTrainer } = props;
  return (
    <div className="TrainerList">
      {/* {trainerList.map((trainer) => (
        <li key={trainer.id} onClick={() => selectTrainer(trainer.id)}>
          {trainer.name}
        </li>
      ))} */}
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
