import React from 'react';

function PokePC(props) {
  const { pokePCList } = props;
  return (
    <div>
      <ul>
        {pokePCList.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default PokePC;
