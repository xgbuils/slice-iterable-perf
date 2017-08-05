const pkgVersion = 'functor-iterable@0.1.0'
const FunctorIterable = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new FunctorIterable(this.iterable)
            .map(this.double)
        traverse(iterable)
    }
}
