const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')

const sliceIterable_0_1_3 = require('../tests/slice-iterable_0.1.3')
const sliceArrayLikeIterable_0_1_11 = require('../tests/slice-arraylike-iterable_0.1.11')
const imlazy = require('../tests/imlazy')
const ramda = require('../tests/ramda')
const immutable = require('../tests/immutable')
const native = require('../tests/native')

const zeroStart = require('../setup/zeroStart')
const smallStart = require('../setup/smallStart')
const mediumStart = require('../setup/mediumStart')
const bigStart = require('../setup/bigStart')

const smallSlice = require('../setup/smallSlice')
const mediumSlice = require('../setup/mediumSlice')
const bigSlice = require('../setup/bigSlice')

const array = require('../setup/array')

const tests = [
    sliceIterable_0_1_3,
    sliceArrayLikeIterable_0_1_11,
    imlazy,
    ramda,
    immutable,
    native
]

module.exports = suiteCollection({
    name: 'array',
    suites: [
        suiteCollection({
            name: 'start index parameter',
            suites: [
                suite({
                    name: 'small start',
                    setups: [
                        smallStart,
                        smallSlice,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'medium start',
                    setups: [
                        mediumStart,
                        smallSlice,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'big start',
                    setups: [
                        bigStart,
                        smallSlice,
                        array
                    ],
                    tests
                })
            ]
        }),
        suiteCollection({
            name: 'length of slice',
            suites: [
                suite({
                    name: 'small slice',
                    setups: [
                        zeroStart,
                        smallSlice,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'medium',
                    setups: [
                        zeroStart,
                        mediumSlice,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'big',
                    setups: [
                        zeroStart,
                        bigSlice,
                        array
                    ],
                    tests
                })
            ]
        })
    ]
})
