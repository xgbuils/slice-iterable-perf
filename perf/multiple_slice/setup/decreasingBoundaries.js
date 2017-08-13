module.exports = function () {
    this.ends = []
    const min = 5
    const max = min + this.numSlices
    for (let i = max - 1; i >= min; --i) {
        this.ends.push(i)
    }
}
