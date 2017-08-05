const pkgVersion = 'imlazy@6.3.1'
const {map} = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const {double} = this
        const mapDouble = map(double)
        let {iterable} = this
        for (let i = 0; i < n; ++i) {
            iterable = mapDouble(iterable)
        }
        traverse(iterable)
    }
}
