var adjectives = require('./dictionaries/adjectives_by_letter.json')
var nouns = require('./dictionaries/nouns_by_letter.json')

var defaults = {
  order: [
    { type: 'adj', letter: '*' },
    { type: 'adj', letter: '*' },
    { type: 'noun', letter: '*' }
  ],
  spacer: '',
  caps: true
}

var SillyId = function (order, spacer, caps) {
  this.order = order || defaults.order
  this.spacer = spacer || defaults.spacer
  this.caps = caps || defaults.caps
}

SillyId.prototype.capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

SillyId.prototype.randomize = function (object, letter) {
  var l = letter
  if (l === '*') l = Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]
  var word = object[l][Math.floor(Math.random() * object[l].length)]
  if (this.caps) {
    return this.capitalize(word)
  } else {
    return word
  }
}

SillyId.prototype.generate = function () {
  var self = this
  return this.order.map(function (entry) {
    switch (entry.type) {
      case 'adj':
        return self.randomize(adjectives, entry.letter)
      case 'noun':
        return self.randomize(nouns, entry.letter)
      default:
        return self.randomize(adjectives, entry.letter)
    }
  }).join(this.spacer)
}

module.exports = SillyId
