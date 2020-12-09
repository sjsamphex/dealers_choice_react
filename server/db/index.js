const db = require('./db');
const Pokemon = require('././Pokemon');
const Trainer = require('./Trainer');

// There is a one-many relationship between Albums and Songs
Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);

//create a before save hook to limit trainer pokemon party to 6
Pokemon.beforeSave(async (pokemon, options) => {
  if (pokemon.trainerId !== 3) {
    const trainer = await Trainer.findByPk(pokemon.trainerId, {
      include: Pokemon,
    });

    if (trainer.pokemons && trainer.pokemons.length >= 6) {
      console.log(trainer.pokemons.length);
      throw new Error("Trainers can't have more than 6 pokemon in their party");
    }
  }
});

module.exports = {
  db,
  Pokemon,
  Trainer,
};
