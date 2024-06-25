// свойство name 

function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi (есть имя!)

function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi (работает!)
}

f();

let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// функция объявлена внутри массива
let arr = [function() {}];

alert( arr[0].name ); // <пустая строка>
// здесь отсутствует возможность определить имя, поэтому его нет
/////////////////
//свойство length


function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

function generateDocs(func) {
    console.log(`функция ${func.name} ожидает ${func.length} аругмента.`);
}

function multiply(a, b, c) {
    return a * b * c;
}

generateDocs(multiply); // функция multiply ожидает 3 аругмента.


// Установка и уменьшение значения счётчика
function makeCounter() {
  let count = 0;
  function counter() {
    return ++count;
  }

  counter.set = function (value) {
    return (count = value);
  };

  counter.decrease = function () {
    return --count;
  };

  return counter;
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter.decrease()); // 1
console.log(counter.set(20)); // 20

// Сумма с произвольным количеством скобок
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// Примеры использования
console.log(sum(1)(2));         // 3
console.log(sum(1)(2)(3));      // 6
console.log(sum(5)(-1)(2));     // 6
console.log(sum(6)(-1)(-2)(-3));// 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
