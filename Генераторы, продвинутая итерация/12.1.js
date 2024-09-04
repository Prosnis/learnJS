// Задача 1: Счётчик с шагом
// Напишите генератор counter(start, step), который принимает начальное значение start и шаг step. 
// При каждом вызове .next() генератор должен возвращать следующее значение, увеличенное на шаг.

function* counter(start, step) {
  let counter = start
  while(true) {
    yield counter
    counter += step
  }
}

const generator = counter(10,2)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)



// Задача 2: Сбор данных с промежуточными результатами
// Напишите генератор dataCollector, который запрашивает данные у пользователя через yield и накапливает их.
// Когда будет передано значение 'STOP', генератор должен завершиться и вернуть массив всех собранных данных.

function* dataCollector() {
  let result = [];

  while (true) {
    let input = yield result;
    if (input === "STOP") return result;
    result.push(input);

  }
}

let gen = dataCollector();
gen.next(); 
gen.next("apple"); 
gen.next("banana");
console.log(gen.next("STOP").value); // ['apple', 'banana']

// Задача 4: Последовательность Фибоначчи
// Напишите генератор arrayIterator(arr), 
// который принимает массив arr и возвращает элементы 
// этого массива по одному при каждом вызове .next().



function* arrayIterator(arr){
  let index = 0

  while(index < arr.length) {
    yield arr[index]
    index++
  }
}


let gen = arrayIterator([10, 20, 30]);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 20
console.log(gen.next().value); // 30
console.log(gen.next().done);  // true


// Задача 5: Условная пауза
// Создайте генератор conditionalPause(), который работает следующим образом:
// он генерирует числа от 1 и дальше по порядку, но если ему передать значение false,
// он должен приостановить генерацию и возвращать одно и то же число до тех пор, пока ему не передадут true.

function* conditionalPause() {
  let counter = 1;

  while (true) {
    let boolean = yield counter;

    if (boolean != false) {
      counter++;
    }
  }
}

let gen = conditionalPause();
console.log(gen.next().value); // 1
console.log(gen.next(false).value); // 1 (пауза)
console.log(gen.next(false).value); // 1 (пауза продолжается)
console.log(gen.next(true).value); // 2 (возобновление)
console.log(gen.next(true).value); // 3 (продолжение)

// Псевдослучайный генератор 

function* pseudoRandom(seed){
  let value = seed

  while(true) {
    value = value * 16807 % 2147483647
    yield value
  }
}





let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();
console.log(generator); // [object Generator]

for(let key of generator) {
  console.log(key)
} // 1, 2 

const arr = [...generator]
console.log(arr) // [1,2]


let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
