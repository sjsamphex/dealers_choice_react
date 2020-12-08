import React from 'react';

function PokemonView(props) {
  const { selectedPokemon } = props;
  const imgsrc = `/thumbnails/${String(selectedPokemon.id).padStart(3, 0)}.png`;
  const pokemonID = `#${String(selectedPokemon.id).padStart(3, 0)}: ${
    selectedPokemon.name
  }`;

  return (
    <div className="SelectedPokemon">
      {pokemonID}
      <br />
      <img src={imgsrc} title={pokemonID} />
    </div>
  );
}

export default PokemonView;
