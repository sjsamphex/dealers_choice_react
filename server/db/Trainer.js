const Sequelize = require('sequelize');
const db = require('./db');

const { STRING } = Sequelize;

const Trainer = db.define('trainer', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Trainer;
