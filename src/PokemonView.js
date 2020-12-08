import React from 'react';

function PokemonView(props) {
  const { selectedPokemon, sendToTrainer } = props;
  let imgsrc = `/thumbnails/001.png`;
  let pokemonID = `#001: Bulbasaur`;
  if (selectedPokemon) {
    imgsrc = `/thumbnails/${String(selectedPokemon.id).padStart(3, 0)}.png`;
    pokemonID = `#${String(selectedPokemon.id).padStart(3, 0)}: ${
      selectedPokemon.name
    }`;
  }

  return (
    <div className="SelectedPokemon">
      {pokemonID}
      <br />
      <img src={imgsrc} title={pokemonID} />
      <button onClick={() => sendToTrainer(selectedPokemon.id)}>
        Add to Trainer
      </button>
    </div>
  );
}

export default PokemonView;
