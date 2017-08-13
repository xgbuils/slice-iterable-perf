module.exports = function () {
    this.iterable = Array.from({length: 1000000}, (_, i) => i)
}
