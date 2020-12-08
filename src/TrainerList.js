import React from 'react';

function TrainerList(props) {
  const { trainerList } = props;
  return (
    <div>
      {trainerList.map((trainer) => (
        <li key={trainer.id}>{trainer.name}</li>
      ))}
    </div>
  );
}

export default TrainerList;
