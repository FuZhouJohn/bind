/*
api 列表
fn.bind(asThis)
fn.bind(asThis,p1,p2)
fn.bind(asThis)()
fn.bind(asThis,p1,p2)()
fn.bind(asThis,p1)(p2)
 */


const bind = require('../src/index')

test1('bind 是一个函数')

test2('传入 this 的值成功')

test3('传入参数成功')

test4('bind 之后调用时传参成功')

test5('bind 时传部分参数，调用再传剩余参数成功')

test6('new 的时候绑定 p1,p2')

test7('new 的时候绑定 p1,p2，同时原型指向正确')

function test1(message) {
    console.log(message)

    Function.prototype.bind2 = bind
    const fn = function () {
    }
    console.assert(typeof fn.bind2 === 'function')
}

function test2(message) {
    console.log(message)

    Function.prototype.bind2 = bind
    const fn = function () {
        return this
    }
    const newFn = fn.bind2({name: 'John'})
    console.assert(newFn().name === 'John')
}

function test3(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [p1, p2]
    }
    const newFn = fn.bind2(undefined, 'xxx', 'yyy')
    console.assert(newFn()[0] === 'xxx')
    console.assert(newFn()[1] === 'yyy')
}

function test4(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [p1, p2]
    }
    const newFn = fn.bind2(undefined)
    console.assert(newFn('xxx', 'yyy')[0] === 'xxx', 'xx')
    console.assert(newFn('xxx', 'yyy')[1] === 'yyy', 'y')
}

function test5(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        return [p1, p2]
    }
    const newFn = fn.bind2(undefined, 'xxx')
    console.assert(newFn('yyy')[0] === 'xxx', 'xx')
    console.assert(newFn('yyy')[1] === 'yyy', 'y')
}

function test6(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    const fn2 = fn.bind2(undefined, 'x', 'y')
    const object = new fn2()
    console.assert(object.p1 === 'x')
    console.assert(object.p2 === 'y')
}

function test7(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function () {
    }
    const fn2 = fn.bind2(undefined, 'x', 'y')
    const object = new fn2()
    console.assert(object.p1 === 'x')
    console.assert(object.p2 === 'y')
    console.assert(object instanceof fn)
    console.assert(typeof object.sayHi=== 'function','sayHi')

}
