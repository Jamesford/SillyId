var SillyId = require('../index')

function run_test(test) {
  console.log(test.start)
  console.log(test.desc)

  var sillyid = new SillyId()

  var id
  if (test.opts) {
    id = sillyid.generate(test.opts.order, test.opts.spacer, test.opts.caps)
  } else {
    id = sillyid.generate()
  }

  if (test.regex.test(id)) {
    console.log('Status: OK (', id, ')')
  } else {
    console.log('Status: ERROR')
    console.log('Unexpected Result:', id)
  }

  console.log()
}

run_test({
  start: 'Default Generation',
  desc: 'Should generate an ID with default options',
  regex: /^([A-Z]{1}[a-z]+){3}$/
})

run_test({
  start: 'Custom Spacer',
  desc: 'Should generate an ID with a custom spacer',
  opts: {
    spacer: '-'
  },
  regex: /^([A-Z]{1}[a-z]+-){2}([A-Z]{1}[a-z]+){1}$/
})

run_test({
  start: 'No Capitalisation',
  desc: 'Should generate an ID without capitalising the words',
  opts: {
    caps: false
  },
  regex: /^([a-z]+){3}$/
})

run_test({
  start: 'Custom Spacer, No Caps',
  desc: 'Should generate an ID with a custom spacer and without capitalising the words',
  opts: {
    spacer: '-',
    caps: false
  },
  regex: /^([a-z]+-){2}([a-z]+){1}$/
})
