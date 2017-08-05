const pkgVersion = 'imlazy@6.3.1'
const {map} = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = map(this.double, this.iterable)
        traverse(iterable)
    }
}
