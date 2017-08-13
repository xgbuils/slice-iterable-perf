const pkgVersion = 'immutable@3.8.1'
const {List} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new List(this.iterable)
            .slice(this.start, this.start + this.length)
        traverse(iterable)
    }
}
