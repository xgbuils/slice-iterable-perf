const pkgVersion = 'ramda@0.24.1'
const {map} = require('../packages')[pkgVersion]

module.exports = {
    name: pkgVersion,
    fn () {
        map(this.double, this.iterable)
    }
}
