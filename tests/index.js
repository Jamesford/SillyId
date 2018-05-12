var expect = require('chai').expect
var SillyId = require('../index.js')

describe('Default ID Generation', () => {

  var sillyid = new SillyId()

  it('should generate an ID like HungryOrangeGeckos', () => {
    var result = sillyid.generate()
    expect(result).to.match(/^([A-Z]{1}[a-z]+){3}$/)
  })
})

describe('Custom Spacer', () => {

  var sillyid = new SillyId(undefined, '-', undefined)

  it('should generate an ID like Hungry-Orange-Geckos', () => {
    var result = sillyid.generate()
    expect(result).to.match(/^([A-Z]{1}[a-z]+-){2}([A-Z]{1}[a-z]+){1}$/)
  })
})

describe('No Capitalisation', () => {

  var sillyid = new SillyId(undefined, undefined, false)

  it('should generate an ID like hungryorangegeckos', () => {
    var result = sillyid.generate()
    expect(result).to.match(/^([a-z]+){3}$/)
  })
})

describe('Custom Spacer & No Capitalisation', () => {

  var sillyid = new SillyId(undefined, '-', false)

  it('should generate an ID like hungry-orange-geckos', () => {
    var result = sillyid.generate()
    expect(result).to.match(/^([a-z]+-){2}([a-z]+){1}$/)
  })
})

describe('Custom letter sequence (npm)', () => {

  var sillyid = new SillyId([
    { type: 'adj', letter: 'n' },
    { type: 'adj', letter: 'p' },
    { type: 'noun', letter: 'm' },
  ], '-', undefined)

  it('should generate an ID like Naughty-Powderblue-Moray', () => {
    var result = sillyid.generate()
    var parts = result.split('-')

    expect(parts[0]).to.match(/^N[a-z]+$/)
    expect(parts[1]).to.match(/^P[a-z]+$/)
    expect(parts[2]).to.match(/^M[a-z]+$/)
  })
})