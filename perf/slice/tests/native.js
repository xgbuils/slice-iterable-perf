const traverse = require('../../traverse_iterable')

module.exports = {
    name: 'native',
    fn () {
        const iterable = this.iterable
            .slice(this.start, this.start + this.length)
        traverse(iterable)
    }
}
