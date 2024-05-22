// Сумма свойств объекта

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  return Object.values(obj).reduce((acc, value) => {
    return acc += value;
  }, 0);
}
console.log(sumSalaries(salaries))


// Подсчёт количества свойств объекта

function count(obj) {
  return Object.keys(obj).length;
}

// Задача 2: Значения свойств объекта в массив
// Напишите функцию getObjectValues, которая принимает объект и возвращает массив всех его значений.

function getObjectValues(obj) {
    return Object.values(obj)
  }
  
  const user = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  console.log(getObjectValues(user)); // Ожидаемый результат: ['John', 30, 'New York']

// Печать всех ключей и значений объекта
// Напишите функцию printObjectEntries, которая принимает объект и выводит в консоль все его ключи и значения в формате ключ: значение.
function printObjectEntries(obj) {
    return Object.entries(obj).forEach((key)=> console.log(key))
  }
  
  const user = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
console.log(  printObjectEntries(user));

// Создание объекта из массива ключей и значений
// Напишите функцию arrayToObject, которая принимает массив массивов, каждый из которых содержит 
// два элемента: ключ и значение, и возвращает объект, созданный из этих ключей и значений.
function arrayToObject(arr) {
    return Object.fromEntries(arr)
  }
  
  const entries = [
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
  ];
  
  console.log(arrayToObject(entries)); // Ожидаемый результат: { name: 'John', age: 30, city: 'New York' }

// Фильтрация объекта по значению
// Напишите функцию filterObjectByValue, которая принимает объект и значение, и возвращает новый объект, содержащий только те свойства исходного объекта, 
// значения которых равны переданному значению.

function filterObjectByValue(obj, value) {
    return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val === value))
  }
  
  const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    job: 'Developer'
  };
  
 
  console.log(filterObjectByValue(user, 'New York')); // Ожидаемый результат: { city: 'New York' }
