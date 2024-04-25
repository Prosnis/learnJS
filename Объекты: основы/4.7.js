// Создайте символ с именем "id" и используйте его в качестве ключа для добавления свойства "id" в объект.
const id = Symbol('id')
const obj = {
    name: 'artyom'
}

obj[id] = 1

//Создайте функцию, которая принимает объект и символ, и возвращает значение свойства объекта, соответствующее переданному символу.
function GetValue(obj, symbol){
    symbols = Object.getOwnPropertySymbols(obj)
    return symbols.includes(symbol) ? obj[symbol] : 'no such symbols'
}

const id = Symbol('id')
const obj = {
    name: 'artyom'
}

obj[id] = 1

console.log(GetValue(obj, id))

// Создайте объект с несколькими символьными свойствами и напишите функцию, которая выводит список всех символьных свойств этого объекта.

const obj = {}
let a = Symbol('id')
let b = Symbol('id')
obj[a] = 1
obj[b] = 2

function getvalues(obj){
    let values = Object.getOwnPropertySymbols(obj)
    if (values.length > 0 ) {
        for(let value of values) {
            console.log(obj[value])
        } 
    } else {
        return 'no such values'
    }
}

getvalues(obj)

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

// Например, вот два символа с одинаковым описанием – но они не равны:
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false


// Символы не преобразуются автоматически в строки
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), теперь работает


// Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:
let id = Symbol("id");
alert(id.description); // id

// Символы игнорируются циклом for…in
let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

//Глобальные символы
// Для чтения (или, при отсутствии, создания) символа из реестра используется вызов Symbol.for(key)

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
alert( id === idAgain ); // true

// Symbol.keyFor
// Для глобальных символов, кроме Symbol.for(key), который ищет символ по имени, существует обратный метод: 
// Symbol.keyFor(sym), который, наоборот, принимает глобальный символ и возвращает его имя.
// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// Внутри метода Symbol.keyFor используется глобальный реестр символов для нахождения имени символа.
//  Так что этот метод не будет работать для неглобальных символов. Если символ неглобальный, метод не сможет его найти и вернёт undefined.

// Впрочем, для любых символов доступно свойство description.
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name

