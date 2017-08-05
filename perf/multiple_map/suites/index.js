const suiteCollection = require('../../suiteCollectionFactory')
const arraySuite = require('./array')

module.exports = suiteCollection({
    name: 'multiple maps',
    suites: [
        arraySuite
    ]
})
