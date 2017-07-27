const adjectives = require('./dictionaries/adjectives_by_letter.json')
const nouns = require('./dictionaries/nouns_by_letter.json')

const defaults = {
  order: [
    { type: 'adj', letter: '*' },
    { type: 'adj', letter: '*' },
    { type: 'noun', letter: '*' }
  ],
  spacer: '',
  caps: true
}

function cap (str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

function randomize (obj, char) {
  if (char === '*') char = Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)]
  return obj[char][Math.floor(Math.random() * obj[char].length)]
}

class SillyId {
  constructor (order, spacer, caps) {
    this.order = order || defaults.order
    this.spacer = spacer || defaults.spacer
    this.caps = caps === false ? false : defaults.caps
  }

  generate () {
    return this.order.map(entry => {
      switch (entry.type) {
        case 'adj':
          return this.caps
            ? cap(randomize(adjectives, entry.letter))
            : randomize(adjectives, entry.letter)
        case 'noun':
          return this.caps
            ? cap(randomize(nouns, entry.letter))
            : randomize(nouns, entry.letter)
        default:
          return this.caps
            ? cap(randomize(adjectives, entry.letter))
            : randomize(adjectives, entry.letter)
      }
    }).join(this.spacer)
  }
}

module.exports = SillyId
