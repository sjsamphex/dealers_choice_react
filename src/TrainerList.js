import React from 'react';

function TrainerList(props) {
  const { trainerList, selectTrainer } = props;
  return (
    <div className="TrainerList">
      {trainerList.map((trainer) => (
        <li key={trainer.id} onClick={() => selectTrainer(trainer.id)}>
          {trainer.name}
        </li>
      ))}
    </div>
  );
}

export default TrainerList;
