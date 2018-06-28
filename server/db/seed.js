const db = require('./index');
const { Address, Guest, Program, Room, Stay, User, Venue } = db.models;
const faker = require('faker')

const generateRooms = () => {
  let arr = []
  for (let i = 0; i < 200; i++){
    const occupancy = Math.floor(Math.random() * 4) + 1
    arr.push(Room.build({ number: i + 100, occupancy }))
  }
  return arr
}

const generateGuests = () => {
  let arr = []
  for (let i = 0; i < 100; i++){
    const age = Math.floor(Math.random() * 95) + 1
    const number = Math.floor(Math.random() * 9999999999) + 1111111111
    arr.push(Guest.build({lastName: faker.name.lastName(), firstName: faker.name.firstName(), phone: number, email: `${faker.name.lastName()}@1.com`, age}))
  }
  return arr
}

const addUsers = () => {
  return Promise.all([
    User.create( { username: faker.internet.userName(), password: faker.internet.password(), email: '1@1.com' }),
    User.create( { username: faker.internet.userName(), password: faker.internet.password(), email: '2@1.com' }),
    User.create( { username: faker.internet.userName(), password: faker.internet.password(), email: '3@1.com' }),
    User.create( { username: faker.internet.userName(), password: faker.internet.password(), email: '4@1.com' }),
    User.create( { username: faker.internet.userName(), password: faker.internet.password(), email: '5@1.com' }),
    User.create( { username: 'test', password: '123', email: 'test@test.com' }),
  ])
}

const buildProgram  = () => {
  let addr1
  let addr2
  let addr3
  let ven

  return Promise.all([
    Address.create({lineOne: faker.address.streetAddress(true), city: faker.address.city(), state: faker.address.stateAbbr(), zip: faker.address.zipCode(), lat: faker.address.latitude(), lng: faker.address.longitude()}),
    Address.create({lineOne: faker.address.streetAddress(true), city: faker.address.city(), state: faker.address.stateAbbr(), zip: faker.address.zipCode(), lat: faker.address.latitude(), lng: faker.address.longitude()}),
    Address.create({lineOne: faker.address.streetAddress(true), city: faker.address.city(), state: faker.address.stateAbbr(), zip: faker.address.zipCode(), lat: faker.address.latitude(), lng: faker.address.longitude()}),
    Address.create({lineOne: faker.address.streetAddress(true), city: faker.address.city(), state: faker.address.stateAbbr(), zip: faker.address.zipCode(), lat: faker.address.latitude(), lng: faker.address.longitude()}),
  ])
  .then(([_addr1, _addr2, _addr3]) => {
    addr1 = _addr1
    addr2 = _addr2
    addr3 = _addr3
    return Promise.all([
      Venue.create({name: faker.company.bsNoun()}),
      Venue.create({name: faker.company.bsNoun()}),
      Venue.create({name: faker.company.bsNoun()})
    ])
  })
  .then(([v1, v2, v3]) => {
    ven = v1
    return Promise.all([
      v1.setAddress(addr1),
      v2.setAddress(addr2),
      v3.setAddress(addr3),
    ])
  })
  // .then(() => {
  //   const guests = generateGuests()
  //   return Promise.all(guests.map(guest => guest.save()))
  // })
  .then(() => {
    const rooms = generateRooms();
    return Promise.all(rooms.map(room => room.save()))
  })
  .then(rooms => {
    return ven.setRooms(rooms)
  })
  .then(() => {
    return Promise.all([
      Program.create({ name: faker.company.bsBuzz(), beginDate: '6/20/2018', endDate: '6/25/2018' }),
      Program.create({ name: faker.company.bsBuzz(), beginDate: '7/20/2018', endDate: '7/25/2018' }),
      Program.create({ name: faker.company.bsBuzz(), beginDate: '9/1/2018', endDate: '9/15/2018' }),
    ])
  })
  .then(programs => {
    return programs[2].setVenue(ven)
  })
  // .then(guests => {
  //   let arr = []
  //   for (let i = 0; i < 33; i++){
  //     const pick = Math.floor(Math.random() * 99) + 33
  //     arr.push(guests[pick].setFamilyMember(guests[i]))
  //   }
  //   return Promise.all(arr)
  // })
}


const main = () => {
  return db.sync()
    .then(() => addUsers())
    .then(() => buildProgram())
}

main()

