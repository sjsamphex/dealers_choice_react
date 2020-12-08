import React from 'react';

function PokePC(props) {
  const { pokePCList, selectPokemon } = props;
  return (
    <ul className="PokePC">
      {pokePCList.map((pokemon) => {
        const imgsrc = `/sprites/${String(pokemon.id).padStart(3, 0)}MS.png`;
        const pokemonName = `#${String(pokemon.id).padStart(3, 0)}: ${
          pokemon.name
        }`;
        return (
          <li key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
            <img src={imgsrc} title={pokemonName} />
          </li>
        );
      })}
    </ul>
  );
}

export default PokePC;
