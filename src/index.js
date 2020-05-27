function _bind(asThis, ...args1) {
    const fn = this

    function resultFn(...args2) {
        return fn.call(this instanceof resultFn ? this : asThis, ...args1, ...args2)
    }
    resultFn.prototype = fn.prototype

    return resultFn
}


slice = Array.prototype.slice
function bind(asThis){
    var fn = this
    var args1 = slice.call(arguments,1)
    function resultFn() {
        var args2 = slice.call(arguments,0)
        return fn.apply(this instanceof resultFn ? this : asThis, args1.concat(args2))
    }
    resultFn.prototype = fn.prototype

    return resultFn
}


module.exports = bind
