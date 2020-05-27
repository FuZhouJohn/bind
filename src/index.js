
function bind(asThis,...args1) {
    const fn = this
    return function () {
        return fn.call(asThis,...args1)
    }
}

module.exports = bind
