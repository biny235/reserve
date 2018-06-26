const conn = require('./conn');
const { Sequelize } = conn;


const address = conn.define('address', {
  lineOne: {
    type: Sequelize.STRING,
    require: true
  }
})

module.exports = address
