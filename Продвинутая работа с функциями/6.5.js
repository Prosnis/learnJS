var one = 'one' // window.one => 'one'
let two = 'two' //window.two => undefined
const three = 'three' //window.three => undefined


function declaration(a = 10, b =10){
  return a+b
} // window.declaration() => 20

const expression = function (a =10, b =10){
  return a+b
} // window.expression() => undefined

const arrow = () => {
  return 10+10
} // window.arrow() => undefined


window.one = 'one'

console.log(window.one) // 'one' - тоже самое что и 'var one = 'one''
console.log(one) // one
