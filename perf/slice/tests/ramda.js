const pkgVersion = 'ramda@0.24.1'
const {slice} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = slice(this.start,
            this.start + this.length, this.iterable)
        traverse(iterable)
    }
}
