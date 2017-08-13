module.exports = function () {
    this.ends = []
    const min = 5
    const max = min + this.numSlices
    for (let i = min; i < max; ++i) {
        this.ends.push(i)
    }
}
