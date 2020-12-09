import React from 'react';

function PokePC(props) {
  const { pokePCList, selectPokemon, sendToTrainer } = props;
  return (
    <div className="PokePC">
      {pokePCList.map((pokemon) => {
        const imgsrc = `/sprites/${String(pokemon.id).padStart(3, 0)}MS.png`;
        const pokemonName = `#${String(pokemon.id).padStart(3, 0)}: ${
          pokemon.name
        }`;
        return (
          <button
            key={pokemon.id}
            onFocus={() => selectPokemon(pokemon)}
            onClick={() => sendToTrainer(pokemon.id)}
            onMouseEnter={() => selectPokemon(pokemon)}
            title={pokemonName}
          >
            <img src={imgsrc} />
          </button>
        );
      })}
    </div>
  );
}

export default PokePC;
