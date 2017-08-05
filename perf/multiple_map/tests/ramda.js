const pkgVersion = 'ramda@0.24.1'
const {map, compose} = require('../packages')[pkgVersion]

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const {double} = this
        const mapDouble = map(double)
        const maps = Array(n).fill(mapDouble)
        compose(...maps)(this.iterable)
    }
}
