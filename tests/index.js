var expect = require('chai').expect
var SillyId = require('../index.js')

describe('Default ID Generation', function() {

  var sillyid = new SillyId()

  it('should generate an ID like HungryOrangeGeckos', function() {
    var result = sillyid.generate()
    expect(result).to.match(/^([A-Z]{1}[a-z]+){3}$/)
  })
})

describe('Custom Spacer', function() {

  var sillyid = new SillyId(undefined, '-', undefined)

  it('should generate an ID like Hungry-Orange-Geckos', function() {
    var result = sillyid.generate()
    expect(result).to.match(/^([A-Z]{1}[a-z]+-){2}([A-Z]{1}[a-z]+){1}$/)
  })
})

describe('No Capitalisation', function() {

  var sillyid = new SillyId(undefined, undefined, false)

  it('should generate an ID like hungryorangegeckos', function() {
    var result = sillyid.generate()
    expect(result).to.match(/^([a-z]+){3}$/)
  })
})

describe('Custom Spacer & No Capitalisation', function() {

  var sillyid = new SillyId(undefined, '-', false)

  it('should generate an ID like hungry-orange-geckos', function() {
    var result = sillyid.generate()
    expect(result).to.match(/^([a-z]+-){2}([a-z]+){1}$/)
  })
})
