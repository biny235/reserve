const conn = require('./conn');
const Address = require('./Address');
const Event = require('./Event');
const Guest = require('./Guest');
const Room = require('./Room');
const Stay = require('./Stay');
const User = require('./User');
const Venue = require('./Venue');

const syncAndSeed = () => {
  return conn.sync( { force: true } )
}

Venue.belongsTo(Address);
Guest.belongsTo(Address);
Address.hasOne(Guest);
Address.hasOne(Venue);

Venue.hasMany(Event);
Event.belongsTo(Venue);

Venue.hasMany(Room);
Room.belongsTo(Venue);

Guest.hasMany(Stay);
Stay.belongsTo(Guest);

Room.hasMany(Stay);
Stay.belongsTo(Room);

Guest.belongsTo(Guest, {as: 'familyMember'});

module.exports = {
  syncAndSeed,
  models: {
    Address,
    Event,
    Guest,
    Room,
    Stay,
    User,
    Venue
  }
}
