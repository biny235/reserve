const conn = require('./conn');
const { Sequelize } = conn;

const Room = conn.define('room', {
  number: Sequelize.STRING,
  occupancy: Sequelize.INTEGER
})

module.exports = Room;
