const conn = require('./conn');
const { Sequelize } = conn;

const Program = conn.define('event', {
  name: Sequelize.STRING,
  beginDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  }
})

module.exports = Program;
