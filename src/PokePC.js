import React from 'react';

function PokePC(props) {
  const { pokePCList, selectPokemon } = props;
  return (
    <div className="PokePC">
      {pokePCList.map((pokemon) => {
        const imgsrc = `/sprites/${String(pokemon.id).padStart(3, 0)}MS.png`;
        const pokemonName = `#${String(pokemon.id).padStart(3, 0)}: ${
          pokemon.name
        }`;
        return (
          <button key={pokemon.id} onClick={() => selectPokemon(pokemon)}>
            <img src={imgsrc} title={pokemonName} />
          </button>
        );
      })}
    </div>
  );
}

export default PokePC;
