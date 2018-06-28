const conn = require('./conn');
const Address = require('./Address');
const Program = require('./Program');
const Guest = require('./Guest');
const Room = require('./Room');
const Stay = require('./Stay');
const User = require('./User');
const Venue = require('./Venue');

const sync = () => {
  return conn.sync( { force: true } )
}

Venue.belongsTo(Address);
Address.hasOne(Venue);

Guest.belongsTo(Address);
Address.hasOne(Guest);

Venue.hasMany(Program);
Program.belongsTo(Venue);

Venue.hasMany(Room);
Room.belongsTo(Venue);

Guest.hasMany(Stay);
Stay.belongsTo(Guest);

Room.hasMany(Stay);
Stay.belongsTo(Room);

Program.hasMany(Stay);
Stay.belongsTo(Program);

Guest.belongsTo(Guest, { as: 'familyMember' });

module.exports = {
  sync,
  models: {
    Address,
    Program,
    Guest,
    Room,
    Stay,
    User,
    Venue
  }
}
