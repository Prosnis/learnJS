 // Счетчик с замыканием
// Напишите функцию createCounter, которая возвращает объект с двумя методами: increment и decrement. Каждый метод должен изменять внутреннее состояние счетчика и возвращать его текущее значение.
function createCounter() {
  let count = 0;

  const increment = function () {
    return count++;
  };
  const decrement = function () {
    return count--;
  };
  return [increment, decrement];
}

const [increment, decrement] = createCounter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(decrement()); // 1
console.log(decrement()); // 0


// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

function inBetween(a, b) {
    return (elem) => elem > a && elem < b
}

const arr = [1,2,3,4,5,6,7]
const filtered = arr.filter(inBetween(2, 5))
console.log(filtered) // 3, 4

function inArray(arr){
    return (elem) => arr.includes(elem)
}

const arr = [1,2,3,4,5,6,7]
const filtered = arr.filter(inArray([2,5,6,9]))
console.log(filtered) // 3, 4

// Сортировать по полю
function byField(fieldName) {
    return (a,b) => a[fieldName] > b[fieldName] ? 1 : -1
}

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
  ];

  console.log(users.sort(byField('age')))

// Армия функций
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
function makeArmy() {
    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        console.log( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();
  
  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  army[0](); // 10 от стрелка с порядковым номером 0
  army[1](); // 10 от стрелка с порядковым номером 1
  army[2](); // 10 ...и т.д.
