import React from 'react';

function PokemonView(props) {
  const { selectedPokemon, sendToTrainer, trainerData } = props;
  let imgsrc = `/thumbnails/001.png`;
  let pokemonID = `#001: Bulbasaur`;
  let pokemonData;
  if (selectedPokemon) {
    imgsrc = `/thumbnails/${String(selectedPokemon.id).padStart(3, 0)}.png`;
    pokemonID = `#${String(selectedPokemon.id).padStart(3, 0)}: ${
      selectedPokemon.name
    }`;

    const avoidKeys = ['id', 'name', 'createdAt', 'trainerId', 'updatedAt'];
    pokemonData = Object.keys(selectedPokemon).filter((info) => {
      return !avoidKeys.includes(info);
    });
  }

  return (
    <div className="SelectedPokemon">
      {pokemonID}
      <br />
      <img src={imgsrc} title={pokemonID} />
      <hr />
      <ul>
        {pokemonData.map((info) => (
          <li key={info}>
            {info}: {selectedPokemon[info]}
          </li>
        ))}
      </ul>
      {/* <button onClick={() => sendToTrainer(selectedPokemon.id)}>
        Add {selectedPokemon.name} to {trainerData.name}'s party
      </button> */}
    </div>
  );
}

export default PokemonView;
