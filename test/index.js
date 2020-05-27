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

test2('正确的传入 this 的值')

function test1(message) {
    Function.prototype.bind2 = bind
    const fn = function () {
    }
    console.assert(typeof fn.bind2 === 'function')
    console.log(message)
}

function test2(message) {
    Function.prototype.bind2 = bind
    const fn = function () {
        return this
    }
    const newFn = fn.bind2({name: 'John'})
    console.assert(newFn().name === 'John')
    console.log(message)

}
