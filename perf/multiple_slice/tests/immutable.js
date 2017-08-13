const pkgVersion = 'immutable@3.8.1'
const {List} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const start = 0
        const ends = this.ends
        const length = ends.length
        let iterable = new List(this.iterable)
        for (let i = 0; i < length; ++i) {
            iterable = iterable.slice(start, ends[i])
        }
        traverse(iterable)
    }
}
