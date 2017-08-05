const pkgVersion = 'functor-iterable@0.1.0'
const FunctorIterable = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const {double} = this
        let iterable = new FunctorIterable(this.iterable)
        for (let i = 0; i < n; ++i) {
            iterable = iterable.map(double)
        }
        traverse(iterable)
    }
}
