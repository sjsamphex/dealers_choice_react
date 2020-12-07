import React from 'react';

function PokePC(props) {
  const { pokePCList } = props;
  return (
    <ul className="PokePC">
      {pokePCList.map((pokemon) => {
        return <li key={pokemon.id}>{pokemon.name}</li>;
      })}
    </ul>
  );
}

export default PokePC;
