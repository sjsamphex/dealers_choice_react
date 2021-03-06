#!/usr/bin/env node

const fs = require('fs');
const { db, Pokemon, Trainer } = require('../server/db');
const pokemon = JSON.parse(fs.readFileSync('pokemon151.json', 'utf8'));

const seed = async () => {
  await db.sync({ force: true });

  // trainers
  const ash = await Trainer.create({ name: 'Ash Ketchum' });
  const gary = await Trainer.create({ name: 'Gary' });
  const PokePCOwner = await Trainer.create({ name: 'PokePC Owner' });

  const trainers = {
    'Ash Ketchum': ash,
    Gary: gary,
    'PokePC Owner': PokePCOwner,
  };

  await Promise.all(
    pokemon.map((pokemon) =>
      Pokemon.create({
        name: pokemon.name.english,
        trainerId: PokePCOwner.id,
        HP: pokemon.base.HP,
        Attack: pokemon.base.Attack,
        Defense: pokemon.base.Defense,
        Sp_Attack: pokemon.base['Sp. Attack'],
        Sp_Defense: pokemon.base['Sp. Defense'],
        Speed: pokemon.base.Speed,
      })
    )
  );

  db.close();
  console.log(`

    Seeding successful!
    PokePC is now ready to rock!

  `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
