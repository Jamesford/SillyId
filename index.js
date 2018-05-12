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

function wordListByType (type) {
  switch (type) {
    case 'adj':
      return adjectives
    case 'noun':
      return nouns
    default:
      return adjectives
  }
}

function randomize (obj, char) {
  if (char === '*') char = Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)]
  return obj[char][Math.floor(Math.random() * obj[char].length)]
}

function capitalize (str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

class SillyId {
  constructor (order, spacer, caps) {
    this.order = order || defaults.order
    this.spacer = spacer || defaults.spacer
    this.caps = caps === false ? false : defaults.caps
  }

  generate () {
    return this.order.map(entry => {
      const wordList = wordListByType(entry.type)
      const word = randomize(wordList, entry.letter)

      return this.caps
        ? capitalize(word)
        : word
    }).join(this.spacer)
  }
}

module.exports = SillyId
