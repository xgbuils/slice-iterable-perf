const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')

const sliceIterable_0_1_3 = require('../tests/slice-iterable_0.1.3')
const sliceArrayLikeIterable_0_1_11 = require('../tests/slice-arraylike-iterable_0.1.11')
const imlazy = require('../tests/imlazy')
const ramda = require('../tests/ramda')
const immutable = require('../tests/immutable')
const native = require('../tests/native')

const fewSlices = require('../setup/fewSlices')
const enoughSlices = require('../setup/enoughSlices')
const manySlices = require('../setup/manySlices')

const decreasingBoundaries = require('../setup/decreasingBoundaries')
const increasingBoundaries = require('../setup/increasingBoundaries')
const sameBoundaries = require('../setup/sameBoundaries')

const array = require('../setup/array')

const tests = [
    sliceArrayLikeIterable_0_1_11,
    sliceIterable_0_1_3,
    imlazy,
    ramda,
    immutable,
    native
]

module.exports = suiteCollection({
    name: 'array',
    suites: [
        suiteCollection({
            name: 'descreasing end parameter',
            suites: [
                suite({
                    name: 'few slices',
                    setups: [
                        fewSlices,
                        decreasingBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'enough slices',
                    setups: [
                        enoughSlices,
                        decreasingBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'a lot of slices',
                    setups: [
                        manySlices,
                        decreasingBoundaries,
                        array
                    ],
                    tests
                })
            ]
        }),
        suiteCollection({
            name: 'increasing end parameter',
            suites: [
                suite({
                    name: 'few slices',
                    setups: [
                        fewSlices,
                        increasingBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'enough slices',
                    setups: [
                        enoughSlices,
                        increasingBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'a lot of slices',
                    setups: [
                        manySlices,
                        increasingBoundaries,
                        array
                    ],
                    tests
                })
            ]
        }),
        suiteCollection({
            name: 'same end parameter',
            suites: [
                suite({
                    name: 'few slices',
                    setups: [
                        fewSlices,
                        sameBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'enough slices',
                    setups: [
                        enoughSlices,
                        sameBoundaries,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'a lot of slices',
                    setups: [
                        manySlices,
                        sameBoundaries,
                        array
                    ],
                    tests
                })
            ]
        })
    ]
})
