/* eslint-disable */
const expect = require('chai').expect;
const db = require('../server/db');
const { Address, Guest, Program, Room, Stay, User, Venue } = db.models;

describe('models', () => {
  beforeEach(()=> db.sync())
  describe('User', () => {
    let user = {username: "John", password: "123", email: "john@123.com"}
    it('should exist', () => {
      expect(User).to.be.ok;
    })
    it('should be able to be created', ()=>{
      User.create(user)
        .then(_user => expect(_user.to.be.ok))
    })
    it('should have a password', () =>{
      expect(user.password).to.equal("123")
    })
    it('should have an email', () =>{
      expect(user.email).to.equal("john@123.com")
    })
  })
  describe('Address', () =>{
    let address = Address.build({ lineOne: "549 Jarvis Ave", city: "Far Rockaway", state: "New York", zip: 11691 })
    it('should exist', () => {
      expect(Address).to.be.ok
    })
    it('should have a lineOne', () => {
      expect(address.lineOne).to.be.ok
    })
  })
})
