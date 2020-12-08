const Sequelize = require('sequelize');
const db = require('./db');

const { STRING, INTEGER } = Sequelize;

const Pokemon = db.define('pokemon', {
  name: {
    type: STRING,
    allowNull: false,
  },
  HP: {
    type: INTEGER,
    allowNull: false,
  },
  Attack: {
    type: INTEGER,
    allowNull: false,
  },
  Defense: {
    type: INTEGER,
    allowNull: false,
  },
  Sp_Attack: {
    type: INTEGER,
    allowNull: false,
  },
  Sp_Defense: {
    type: INTEGER,
    allowNull: false,
  },
  Speed: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports = Pokemon;
