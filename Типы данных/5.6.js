// Реализация итератора для массива объектов
// Создайте массив объектов, представляющих пользователей, где у каждого объекта есть свойства name и age. 
// Реализуйте итератор для этого массива, который возвращает только имена пользователей. Используйте этот итератор для вывода всех имен с помощью цикла for...of.


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

users[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: function () {
      return users.length > index
        ? { done: false, value: users[index++].name }
        : { done: true };
    },
  };
};


for (let name of users) {
  console.log(name)
} // Alice Bob Charlie

// Итератор для бесконечной последовательности чисел
// Создайте объект, представляющий бесконечную последовательность чисел, начиная с указанного значения. Реализуйте метод [Symbol.iterator], 
// чтобы он возвращал итератор, который генерирует эту последовательность. Используйте этот итератор для вывода первых N чисел с помощью цикла for...of.

const infiniteSequence = {
  start: 5,
  [Symbol.iterator](){
    return this
  },

  next: function(){
    return this.start < Infinity 
      ? {done: false, value: this.start++}
      : {done: true}
  }
};

let count = 0;
for (let num of infiniteSequence) {
  console.log(num);  // Должен вывести 5, 6, 7, 8, 9, 10 (если N = 6)
  count++;
  if (count === 20) break;
}

// Итератор для перебора символов строки
// Создайте объект, который принимает строку и реализует метод [Symbol.iterator],
// чтобы он возвращал итератор, перебирающий все символы строки в обратном порядке. 
// Используйте этот итератор для вывода всех символов строки в обратном порядке с помощью цикла for...of.

const reverseString = {
  str: "hello",
  [Symbol.iterator]: function() {
    let start = this.str.length - 1;

    return {
      next: ()=> {
        return start >= 0
          ? { done: false, value: this.str[start--] }
          : { done: true };
      },
    };
  },
};

for (let char of reverseString) {
  console.log(char); // o, l, l, e, h
}



// Перебираемые (или итерируемые) объекты – это обобщение массивов. Концепция, которая позволяет использовать любой объект в цикле for..of.

let range = {
  from: 1,
  to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return this;
  },

  next() {
   return  this.from < this.to 
      ? { done: false, value: this.from++ } 
      : { done: true };
  },
};

for(let num of range) {
  console.log(num)
}

// Явный вызов итератора
let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}
