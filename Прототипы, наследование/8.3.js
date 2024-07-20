const obj = {}
const number = 5
const string = 'string'
const array = []
function test(){}

console.log(obj.__proto__ == Object.prototype) // true
console.log(number.__proto__ == Number.prototype) // true
console.log(string.__proto__ == String.prototype) // true
console.log(array.__proto__ == Array.prototype) // true
console.log(test.__proto__ == Function.prototype) // true



function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(ms){
  return setTimeout(this, ms)
}

f.defer(1000); // выведет "Hello!" через 1 секунду



Function.prototype.defer = function(ms){
  return function(...args){
    setTimeout(()=> f.apply(this, args), ms)
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
