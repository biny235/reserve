const conn = require('./conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    require: true
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    require: true,
    validate: {
      isEmail: true
    }
  },
})

module.exports = User;
