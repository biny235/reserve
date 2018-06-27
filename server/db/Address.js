const conn = require('./conn');
const { Sequelize } = conn;


const address = conn.define('address', {
  lineOne: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lineTwo: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
  },
  zip: {
    type: Sequelize.STRING,
  },
  lat: {
    type: Sequelize.STRING,
  },
  lng: {
    type: Sequelize.STRING,
  },
})

module.exports = address
