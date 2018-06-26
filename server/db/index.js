const conn = require('./conn');
const Address = require('./Address');
const User = require('./User');
const Guest = require('./Guest');

const syncAndSeed = () => {
  return conn.sync( { force: true } )
}

module.exports = {
  syncAndSeed,
  models: {
    Address,
    User,
    Guest
  }
}
