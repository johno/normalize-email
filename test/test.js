var assert = require('assert')
var normalizeEmail = require('..')

var gmailEmailsToNormalize = [
  'johnotander@gmail.com',
  'johnotander@googlemail.com',
  'johnotander@GMAIL.com',
  'johnotander+foobar@gmail.com',
  'john.o.t.a.n.d.er+foobar@gmail.com',
  'JOHN.o.t.a.n.d.er+foobar@googlemail.com',
  'john.otander@gmail.com'
]

var hotmailEmailsToNormalize = [
  'johnotander@hotmail.com',
  'johnotander@hotmail.com',
  'johnotander@HOTMAIL.com',
  'johnotander+foobar@hotmail.com',
  'john.o.t.a.n.d.er+foobar@hotmail.com',
  'JOHN.o.t.a.n.d.er+foobar@hotmail.com',
  'john.otander@hotmail.com'
]

var liveEmailsToNormalize = [
  'johnotander@live.com',
  'johnotander@live.com',
  'johnotander@live.com',
  'johnotander+foobar@live.com',
  'john.o.t.a.n.d.er+foobar@live.com',
  'JOHN.o.t.a.n.d.er+foobar@live.com',
  'john.otander@live.com'
]

describe('normalize-email', function() {

  it('should normalize gmail emails', function() {
    gmailEmailsToNormalize.forEach(function(email) {
      assert.equal(normalizeEmail(email), 'johnotander@gmail.com')
    })
  })

  it('should normalize hotmail emails', function() {
    hotmailEmailsToNormalize.forEach(function(email) {
      assert.equal(normalizeEmail(email), 'johnotander@hotmail.com')
    })
  })

  it('should normalize live emails', function() {
    liveEmailsToNormalize.forEach(function(email) {
      assert.equal(normalizeEmail(email), 'johnotander@live.com')
    })
  })
})
