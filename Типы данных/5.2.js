// Генерация случайного пароля:
// Напишите функцию, которая генерирует случайный пароль заданной длины, 
// используя метод Math.random для генерации случайных символов
function passGenerator(length) {
  let result = "";
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    result += symbols.at(Math.random() * symbols.length);
  }

  return result;
}

console.log(passGenerator(6));

// Проверка числа на простоту:
// Напишите функцию, которая принимает целое число и определяет, является ли оно простым, используя методы Math.sqrt, Math.floor и оператор %.

function generateRandomColor() {
  let result = "";
  const red = Math.floor(Math.random() * 256).toString(16);
  const green = Math.floor(Math.random() * 256).toString(16);
  const blue = Math.floor(Math.random() * 256).toString(16);
  result = `#${red}${green}${blue}`

  return result
}

console.log(generateRandomColor())


// Генерация случайного цвета в формате HEX:
// Напишите функцию, которая генерирует случайный цвет в формате HEX (#RRGGBB), 
// используя метод Math.random для генерации значений красной,
//  зеленой и синей составляющих и метод toString(16) для преобразования чисел в шестнадцатеричную строку.

let a = +prompt("a", "");
let b = +prompt("b", "");
console.log( a + b );


// Как правильно округлить 6.35?

alert( 6.35.toFixed(1) ); // 6.3

console.log((6.35 * 10).toFixed(2) / 10)


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber(){
    let value
    do {
       value = +prompt('введите число', '')
    } while (!isFinite(value))
    return value = null || '' ? null : alert(value) 
}
readNumber()

// Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
} //  console.log(0.2.toFixed(20)) -> 0.20000000000000001110 

// Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).


function random(min, max) {
    return Math.random() * (max - min) + min
}

console.log(random(1, 5))

// Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
function randomInteger(min, max) {
    return Math.random() * (max - min) + min
}

console.log(randomInteger(1, 5))
