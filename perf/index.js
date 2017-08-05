const suitesCollection = require('./suiteCollectionFactory')

const map = require('./map/suites')
const multipleMap = require('./multiple_map/suites')

suitesCollection({
    name: 'benchmark',
    suites: [
        map,
        multipleMap
    ]
})()
