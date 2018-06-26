const conn = require('./conn');
const { Sequelize } = conn;

const Stay = conn.define('stay', {
  beginDate: Sequelize.DATE,
  endDate: Sequelize.DATE
})

module.exports = Stay
