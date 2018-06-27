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
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

})

module.exports = Guest;
