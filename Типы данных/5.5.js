function slice(target, start = 0, end = target.length){

    if(start >= target.length) return []
    if(end > target.length) end = target.length

    if (start < 0) start = target.length + start
    if (end < 0) end = target.length + end

    let result = typeof target == 'string' ? '' : []

    for (let i = target[start]; i < end + 1 ; i++){
        if (typeof result === 'string') {
            result += i
        } else {
            result.push(i)
        }
    }
    return result
}
 const str = '12345'
 const arr = [1,2,3,4,5]
 
console.log(splice(str, 1))
console.log(splice(arr, 1))
console.log(arr.slice(1))
console.log(str.slice(1))

/////////////////////////
let arr = [1, 2, 3];

const obj = {
  0: "artyom",
  1: 30,
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

function concat(...args) {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j]);
      }
    } else if (typeof args[i] === "object" && args[i][Symbol.isConcatSpreadable]) {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j]);
      }
    } else {
      result.push(args[i]);
    }
  }

  return result;
}

console.log(concat(arr, [4, [5]], [6, 7], 8, 9, obj)); //[ 1, 2, 3, 4, [ 5 ], 6, 7, 8, 9, 'artyom', 30 ]
console.log(arr.concat([4, [5]], [6, 7], 8, 9,obj)); //[ 1, 2, 3, 4, [ 5 ], 6, 7, 8, 9, 'artyom', 30 ]


/////// 

function map(arr,callback){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr))
    }
    return result
}

const array = [1,2,3,4,5]
console.log(map(array, (el, index) => el + index)) // [ 1, 3, 5, 7, 9 ]
console.log(array.map((index, el)=> el + index)) // [ 1, 3, 5, 7, 9 ]


indexOf/lastIndexOf и includes

arr.indexOf(item, from) // вернет  index первого найденного элл и остановит поиск или -1
arr.includes(item, from) // вернет boolean 
// includes может найти NaN === NaN в отличии от indexOf
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (неверно, должен быть 0)
alert( arr.includes(NaN) );// true (верно)


find и findIndex/findLastIndex

let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});


filter

let results = arr.filter(function(item, index, array) {
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});

sort(fn)

arr1.sort() //[1, 23, 231, 543,6, 634, 8]
// sort сравнивает значения как строки по символам, что приводит к 6 > 543, т.к 6 > 5 - сравнение останавливается
// для корректной сортировки мы можем возращать положительное число если наше условие соблюденно
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
// или сократить запись до 
arr1.sort((a,b) => a-b) //[1, 6, 8, 23,231, 543, 634]
// подойдет любое положительное число полученное в результате операции a-b

reverse
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
Он также возвращает массив arr с изменённым порядком элементов.

split 

let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

join

let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша

reduce
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);


Array.isArray
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

fill
arr.fil(el,start,end)
// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

every
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true

some
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true

flat
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.copyWithin
arr.copyWithin(target,start,end)
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

toReversed()
toSorted()
toSpliced()


//Переведите текст вида border-left-width в borderLeftWidth
function camelize(str){
  return str.split('-').map((el, i) => i == 0 ? el : el[0].toUpperCase() + el.slice(1)).join('')
}
// Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter((el) => a <= el && b >= el);
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));

//Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)
console.log(arr)

// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a)

// Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"];
console.log(arr)
console.log(arr.toSorted())
console.log(arr)

