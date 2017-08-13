const pkgVersion = 'slice-iterable@0.1.3'
const SliceIterable = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const start = 0
        const ends = this.ends
        const length = ends.length
        let iterable = new SliceIterable(this.iterable)
        for (let i = 0; i < length; ++i) {
            iterable = iterable.slice(start, ends[i])
        }
        traverse(iterable)
    }
}
