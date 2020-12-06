const Sequelize = require('sequelize');
const db = require('./db');

const { STRING } = Sequelize;

const Pokemon = db.define('pokemon', {
  name: {
    type: STRING,
    allowNull: false,
  },
  //maybe put a ENUM type for pokemon type
});

module.exports = Pokemon;
