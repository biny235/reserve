const conn = require('./conn');
const { Sequelize } = conn;

const Venue = conn.define('venue', {
  name: Sequelize.STRING
});

module.exports = Venue;
