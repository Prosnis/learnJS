export {};
//Примитивы: string, number и boolean
const name: string = 'Ivan'; // примитивный тип
const age: number = 54 // примитивный тип
const isMarried: boolean = false;  // примитивный тип 


// Массивы
const arr: number[] = [1,2,3,4,5] // массив
const arr2: string[] = ['1','2','3','4','5'] // массив

const arr3: Array<number> = [1,2,3,4,5] // общий тип 
const arr4: [number, number, number, number, number] = [1,2,3,4,5] // кортеж



// any
let obj: any = { x: 0 }
// Ни одна из строк ниже не приведет к возникновению ошибки на этапе компиляции
// Использование `any` отключает проверку типов
obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const n: number = obj



// Аннотации типа для переменных
//В JS функции, в основном, используются для работы с данными. TS позволяет определять типы как для входных (input), так и для выходных (output) значений функции.
function greet(name: string) : string {
    return `Hello, ${name}`
}





// Функции
// Несмотря на отсутствие аннотации типа для s, TS использует типы функции forEach, 
// а также предполагаемый тип массива для определения типа s. Этот процесс называется определением типа на основе контекста (contextual typing)

// Аннотации типа отсутствуют, но это не мешает `TS` обнаруживать ошибки
const names = ['Alice', 'Bob', 'John']

// Определение типов на основе контекста вызова функции
names.forEach(function (s) {
  console.log(s.toUppercase())
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'? Свойства 'toUppercase' не существует в типе 'string'. Вы имели ввиду 'toUpperCase'?
})

// Определение типов на основе контекста также работает для стрелочных функций
names.forEach((s) => {
  console.log(s.toUppercase())
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
})



// Типы объекта
function print(obj: {name: string, age:number}){
    return console.log(`name: ${obj.name}, age: ${obj.age}`)
}   

function print2(obj: {name: string, age?:number}){ // опциональное свойство
    return console.log(`name: ${obj.name}, age: ${obj.age}`)
}   

function print3(obj: {name: string, age?:number}){ // опциональное свойство
    if (obj.age !== undefined) {
        console.log(`name: ${obj.name}, age: ${obj.age}`)
    }

    console.log(`name: ${obj.name}, age: unknown`)
}   



//unions
function printId(id: number | string) {
    console.log(`Ваш ID: ${id}`)
  }
  
  // OK
  printId(101)
  // OK
  printId('202')
  // Ошибка
  printId({ myID: 22342 })
  // Argument of type '{ myID: number }' is not assignable to parameter of type 'string | number'. Type '{ myID: number }' is not assignable to type 'number'. 
  //   Аргумент типа '{ myID: number }' не может быть присвоен параметру типа 'string | number'. Тип '{ myID: number }' не может быть присвоен типу 'number'


//   В случае с объединениями, TS позволяет делать только такие вещи, которые являются валидными для каждого члена объединения. 
//   Например, если у нас имеется объединение string | number, мы не сможем использовать методы, которые доступны только для string:

function printId(id: number | string) {
    console.log(id.toUpperCase())
    // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
  }

//   Решение данной проблемы заключается в сужении (narrowing) объединения. Например, TS знает, что только для string оператор typeof возвращает 'string':

function printId(id: number | string) {
    if (typeof id === 'string') {
      // В этой ветке `id` имеет тип 'string'
      console.log(id.toUpperCase())
    } else {
      // А здесь `id` имеет тип 'number'
      console.log(id)
    }
  }


//   Другой способ заключается в использовании функции, такой как Array.isArray:

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Здесь `x` - это 'string[]'
      console.log('Привет, ' + x.join(' и '))
    } else {
      // Здесь `x` - 'string'
      console.log('Добро пожаловать, одинокий странник ' + x)
    }
  }

  