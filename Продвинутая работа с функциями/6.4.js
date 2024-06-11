Задача 1: Простое поднятие
Что выведет этот код?
console.log(a);
var a = 10; // undefinded


Задача 2: Функциональное поднятие
Что выведет этот код?
function foo() {
  console.log(a);
  var a = 20;
  console.log(a);
}
foo(); // undefined 20


Задача 3: Поднятие с условиями
Что выведет этот код?
var x = 10;
if (true) {
  console.log(x);
  var x = 20;
  console.log(x);
}
console.log(x); // undefined 20 20 !!!!!!!!!!!!


Задача 4: Поднятие внутри цикла
Что выведет этот код?
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // 0 1 2 3


Задача 5: Поднятие в функции
Что выведет этот код?
var a = 1;
function bar() {
  console.log(a);
  var a = 2;
}
bar();
console.log(a); // undefined 2 !!!!!!!!!


Задача 6: Поднятие внутри вложенной функции
Что выведет этот код?
function outer() {
  var a = 1;
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner();
}
outer(); // undefined


Задача 7: Поднятие с повторным объявлением
Что выведет этот код?
var b = 2;
function test() {
  var b = 5;
  console.log(b);
  var b = 7;
  console.log(b);
}
test(); // 5 7


Задача 8: Поднятие с присваиванием после объявления
Что выведет этот код?
console.log(c);
var c;
c = 15;
console.log(c); // undefined 15


Задача 9: Поднятие с функцией и переменной
Что выведет этот код?
var func = function() {
  console.log("Expression");
};
function func() {
  console.log("Declaration");
}
func(); //????????


Задача 10: Поднятие с несколькими var
Что выведет этот код?
console.log(d);
var d = 1;
console.log(d);
var d = 2;
console.log(d); // undefined 1 2


Задача 11: Поднятие с логическим оператором
Что выведет этот код?
console.log(e || "default");
var e = 10; // default


Задача 12: Поднятие и присваивание значений
Что выведет этот код?
var f = 5;
function example() {
  console.log(f);
  var f = 10;
  console.log(f);
}
example();
console.log(f); // undefined 10 5


Задача 13: Поднятие в функции с параметрами
Что выведет этот код?
function test(g) {
  console.log(g);
  var g = 20;
  console.log(g);
}
test(10); //10 20


Задача 14: Поднятие с глобальной и локальной областью видимости
Что выведет этот код?
var h = 30;
function outer() {
  console.log(h);
  var h = 40;
  console.log(h);
}
outer();
console.log(h); // undefined 40 30


Задача 15: Поднятие с вложенными функциями
Что выведет этот код?
function outerFunction() {
  function innerFunction() {
    console.log(i);
    var i = 50;
    console.log(i);
  }
  innerFunction();
}
outerFunction(); // undefinde 50


Задача 16: Поднятие с несколькими переменными
Что выведет этот код?
console.log(j, k);
var j = 60;
var k = 70;
console.log(j, k); // undefined undefined 60 70


Задача 17: Поднятие с функциями и переменными
Что выведет этот код?
var l = 5; 
function l() {
  console.log("Function");
}
console.log(l); // 5


Задача 18: Поднятие с условной функцией
Что выведет этот код?
var m = 100;
if (true) {
  function m() {
    console.log("Inside if");
  }
}
console.log(m); // function : m


Задача 19: Поднятие с присваиванием в разных областях видимости
Что выведет этот код?
var n = 110;
function example() {
  console.log(n);
  n = 120;
  console.log(n);
  var n = 130;
}
example();
console.log(n); // undefined 120 110


Задача 20: Поднятие и массивы
Что выведет этот код?
var arr = [1, 2, 3];
function arrayExample() {
  console.log(arr);
  var arr = [4, 5, 6];
  console.log(arr);
}
arrayExample(); // undefined arr
