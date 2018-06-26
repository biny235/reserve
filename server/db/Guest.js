const conn = require('./conn');
const { Sequelize } = conn;

const Guest = conn.define('guest', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
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
