const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234',
  database: 'productdbgen26',
  port: 5432,
  logging: false,
});

module.exports = { db };
