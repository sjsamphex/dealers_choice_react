import React from 'react';

function TrainerView(props) {
  const { trainerData, sendToPC, deleteTrainer } = props;

  let trainerPokeList;
  if (!trainerData) {
    return <p>Select a Trainer</p>;
  }
  if (trainerData.pokemons && trainerData.pokemons.length > 0) {
    trainerPokeList = (
      <div className="TrainerView">
        Party Size: {trainerData.pokemons.length}/6
        {trainerData.pokemons.map((pokemon) => {
          const imgsrc = `/sprites/${String(pokemon.id).padStart(3, 0)}MS.png`;
          const pokemonName = `#${String(pokemon.id).padStart(3, 0)}: ${
            pokemon.name
          }`;
          return (
            <li key={pokemon.id}>
              <img className="wiggle" src={imgsrc} title={pokemonName} />
              <button onClick={() => sendToPC(pokemon.id)}>
                Send {pokemon.name} to PC
              </button>
            </li>
          );
        })}
      </div>
    );
  } else {
    trainerPokeList = (
      <div>
        No Pokemon! You may delete the Trainer.
        <button onClick={() => deleteTrainer()}>
          Delete {trainerData.name}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{trainerData.name}'s Party</h2>
      {trainerPokeList}
    </div>
  );
}

export default TrainerView;
