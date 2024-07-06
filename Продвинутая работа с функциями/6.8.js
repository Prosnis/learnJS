// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  setTimeout(function test() {
    if (from <= to) {
      console.log(from++);
      setTimeout(test, 1000);
    }
  }, 1000);
}
printNumbers(50, 53);

function printNumbers(from, to) {
  let timerID = setInterval(()=> {
    if (from === to) clearInterval(timerID)
      console.log(from++)
  },1000)
}
printNumbers(50, 53);
