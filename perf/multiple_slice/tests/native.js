const traverse = require('../../traverse_iterable')

module.exports = {
    name: 'native',
    fn () {
        const start = 0
        const ends = this.ends
        const length = ends.length
        let iterable = this.iterable
        for (let i = 0; i < length; ++i) {
            iterable = iterable.slice(start, ends[i])
        }
        traverse(iterable)
    }
}
