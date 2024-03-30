// Преобразование типов

//Строковое преобразование

let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

String(123) // '123'
String(-12.3) // '-12.3'
String(null) // 'null'
String(undefined) // 'undefined'
String(true) // 'true'
String(false) // 'false'
String(function () {}) // 'function () {}'
String({}) // '[object Object]'
String({ key: 42 }) // '[object Object]'
String([]) // ''
String([1, 2]) // '1,2'


// Численное преобразование

alert( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

umber('123') // 123
Number('123.4') // 123.4
Number('123,4') // NaN
Number('') // 0
Number(null) // 0
Number(undefined) // NaN
Number(true) // 1
Number(false) // 0
Number(function () {}) // NaN
Number({}) // NaN
Number([]) // 0
Number([1]) // 1
Number([1, 2]) // NaN

// Логическое преобразование

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

////
// 1. Undefined
typeof undefined === 'undefined'

// 2. Boolean, логический
typeof true === 'boolean'
typeof false === 'boolean'

// 3. Number, число
typeof 42 === 'number'
typeof 4.2 === 'number'
typeof -42 === 'number'
typeof Infinity === 'number'
typeof -Infinity === 'number'

// 4. String, строка
typeof '' === 'string'
typeof 'string' === 'string'
typeof 'number' === 'string'
typeof 'boolean' === 'string'

// 5. Symbol, символ, ES6
typeof Symbol() === 'symbol'

// 6. BigInt, большое число, ES6
typeof 9007199254740991n === 'bigint'
typeof BigInt(9007199254740991) === 'bigint'

// 7. Null
typeof null === 'object'


// Неявное преобразование типов

5 + '3' === '53'
5 - '3' === 2
5 + '-3' === '5-3'
5 - +3 === 2
5 + -3 === 2
