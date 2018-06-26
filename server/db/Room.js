const conn = require('./conn');
const { Sequelize } = conn;

const Room = conn.define('room', {
  occupancy: Sequelize.INTEGER
})

module.exports = Room;
