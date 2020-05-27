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
