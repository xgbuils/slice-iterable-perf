const pkgVersion = 'immutable@3.8.1'
const {List} = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const {double} = this
        let iterable = new List(this.iterable)
        for (let i = 0; i < n; ++i) {
            iterable = iterable.map(double)
        }
        traverse(iterable)
    }
}
