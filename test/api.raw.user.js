const assert = require('assert');
const _ = require('lodash');
const { ScreepsAPI } = require('../');
const auth = require('./credentials')

describe('api.raw.user', function() {

  this.slow(2000);

  describe('.badge (badge)', function() {
    it('should send a request to /api/user/badge which sets user badge',  async function() {
      let opts = _.omit(auth, ['email', 'password'])
      let api = new ScreepsAPI(opts)
      await api.auth(auth.email, auth.password)
      // Save previous badge
      let res = await api.me()
      let initialBadge = res.badge
      // Set new badge
      let newBadge = { type: 16, color1: '#000000', color2: '#000000', color3:'#000000', param: 100, flip: false }
      res = await api.raw.user.badge(newBadge)
      assert.equal(res.ok, 1, 'incorrect server response: ok should be 1')
      // Check that badge was effectively changed
      res = await api.me()
      _.each(res.badge, (value, key) => {
        assert.equal(value, newBadge[key], `badge ${key} is incorrect`)
      })
      // Reset badge
      res = await api.raw.user.badge(initialBadge)
    })
  })

  describe('.respawn ()', function() {
    it('should do untested things (for now)')
  })

  describe('.setActiveBranch (branch, activeName)', function() {
    it('should do untested things (for now)')
  })

  describe('.cloneBranch (branch, newName, defaultModules)', function() {
    it('should do untested things (for now)')
  })

  describe('.deleteBranch (branch)', function() {
    it('should do untested things (for now)')
  })

  describe('.notifyPrefs (prefs)', function() {
    it('should do untested things (for now)')
  })

  describe('.tutorialDone ()', function() {
    it('should do untested things (for now)')
  })

  describe('.email (email)', function() {
    it('should do untested things (for now)')
  })

  describe('.worldStartRoom (shard)', function() {
    it('should do untested things (for now)')
  })

  describe('.worldStatus ()', function() {
    it('should do untested things (for now)')
  })

  describe('.branches ()', function() {
    it('should do untested things (for now)')
  })

  describe('.code.get (branch)', function() {
    it('should do untested things (for now)')
  })

  describe('.code.set (branch, modules, _hash)', function() {
    it('should do untested things (for now)')
  })

  describe('.respawnProhibitedRooms ()', function() {
    it('should do untested things (for now)')
  })

  describe('.memory.get (path, shard = DEFAULT_SHARD)', function() {
    it('should do untested things (for now)')
  })

  describe('.memory.set (path, value, shard = DEFAULT_SHARD)', function() {
    it('should do untested things (for now)')
  })

  describe('.segment.get (segment, shard = DEFAULT_SHARD)', function() {
    it('should do untested things (for now)')
  })

  describe('.segment.set (segment, data, shard = DEFAULT_SHARD)', function() {
    it('should do untested things (for now)')
  })

  describe('.find (username)', function() {
    it('should do untested things (for now)')
  })

  describe('.findById (id)', function() {
    it('should do untested things (for now)')
  })

  describe('.stats (interval)', function() {
    it('should do untested things (for now)')
  })

  describe('.rooms (id)', function() {
    it('should do untested things (for now)')
  })

  describe('.overview (interval, statName)', function() {
    it('should do untested things (for now)')
  })

  describe('.moneyHistory (page = 0)', function() {
    it('should do untested things (for now)')
  })

  describe('.console (expression, shard = DEFAULT_SHARD)', function() {
    it('should do untested things (for now)')
  })

})