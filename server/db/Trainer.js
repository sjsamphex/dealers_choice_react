const Sequelize = require('sequelize');
const db = require('./db');

const { STRING } = Sequelize;

const Trainer = db.define('trainer', {
  name: {
    type: STRING,
    allowNull: false,
  },
  //maybe put a ENUM type for trainer or pokepc owner
});

module.exports = Trainer;
