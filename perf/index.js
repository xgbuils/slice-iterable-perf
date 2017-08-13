const suitesCollection = require('./suiteCollectionFactory')

const slice = require('./slice/suites')
const multipleSlice = require('./multiple_slice/suites')

suitesCollection({
    name: 'benchmark',
    suites: [
        slice,
        multipleSlice
    ]
})()
