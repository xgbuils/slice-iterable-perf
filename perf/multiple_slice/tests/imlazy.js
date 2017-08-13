const pkgVersion = 'imlazy@6.3.1'
const {slice} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const start = 0
        const ends = this.ends
        const length = ends.length
        let iterable = this.iterable
        for (let i = 0; i < length; ++i) {
            iterable = slice(start, ends[i], iterable)
        }
        traverse(iterable)
    }
}
