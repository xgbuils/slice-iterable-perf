const pkgVersion = 'slice-arraylike-iterable@0.1.11'
const SliceArrayLikeIterable = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const start = 0
        const ends = this.ends
        const length = ends.length
        let iterable = new SliceArrayLikeIterable(this.iterable)
        for (let i = 0; i < length; ++i) {
            iterable = iterable.slice(start, ends[i])
        }
        traverse(iterable)
    }
}
