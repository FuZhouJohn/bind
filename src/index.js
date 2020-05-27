function bind(asThis) {
    const fn = this
    return function () {
        return fn.call(asThis)
    }
}

module.exports = bind
