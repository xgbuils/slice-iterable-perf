const pkgVersion = 'slice-arraylike-iterable@0.1.11'
const SliceArrayLikeIterable = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new SliceArrayLikeIterable(this.iterable)
            .slice(this.start, this.start + this.length)
        traverse(iterable)
    }
}
