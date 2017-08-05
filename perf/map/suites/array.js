const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')

const functorIterable = require('../tests/functor-iterable')
const imlazy = require('../tests/imlazy')
const ramda = require('../tests/ramda')
const immutable = require('../tests/immutable')
const native = require('../tests/native')

const cb = require('../setup/cb')

const smallIterable = require('../setup/smallIterable')
const mediumIterable = require('../setup/mediumIterable')
const bigIterable = require('../setup/bigIterable')

const array = require('../setup/array')

const tests = [
    functorIterable,
    imlazy,
    ramda,
    immutable,
    native
]

module.exports = suiteCollection({
    name: 'array',
    suites: [
        suite({
            name: 'small',
            setups: [
                cb,
                smallIterable,
                array
            ],
            tests
        }),
        suite({
            name: 'medium',
            setups: [
                cb,
                mediumIterable,
                array
            ],
            tests
        }),
        suite({
            name: 'big',
            setups: [
                cb,
                bigIterable,
                array
            ],
            tests
        })
    ]
})
