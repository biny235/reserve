const conn = require('./conn');
const { Sequelize } = conn;

const Event = conn.define('event', {
  name: Sequelize.STRING,
  beginDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  }
})

module.exports = Event;
