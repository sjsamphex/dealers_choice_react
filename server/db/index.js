const db = require('./db');
const Pokemon = require('././Pokemon');
const Trainer = require('./Trainer');

// There is a one-many relationship between Albums and Songs
Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);

module.exports = {
  db,
  Pokemon,
  Trainer,
};
