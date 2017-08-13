const pkgVersion = 'slice-iterable@0.1.3'
const SliceIterable = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new SliceIterable(this.iterable)
            .slice(this.start, this.start + this.length)
        traverse(iterable)
    }
}
