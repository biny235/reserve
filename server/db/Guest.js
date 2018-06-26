const conn = require('./conn');
const { Sequelize } = conn;

const Guest = conn.define('guest', {
  lastName: {
    type: Sequelize.STRING,
    require: true,
  },
  firstName: {
    type: Sequelize.STRING,
    require: true,
  },
  phone: {
    type: Sequelize.INTEGER,
    require: true,
  },
  email: {
    type: Sequelize.INTEGER,
    require: true,
    validate: {
      isEmail: true
    }
  },

})

module.exports = Guest;
