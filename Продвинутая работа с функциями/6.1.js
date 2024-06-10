// Проверка на палиндром:
// Напишите функцию isPalindrome(str), которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае, используя рекурсию.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false

// Поиск максимального элемента в массиве:
// Напишите функцию findMax(arr), которая принимает массив чисел и возвращает максимальный элемент, используя рекурсию.
function findMax(arr) {
    if (arr.length == 1) return arr[0]

    const firstValue = arr[0]
    const maxValue = findMax(arr.slice(1))

    return maxValue > firstValue ? maxValue : firstValue
}

firstValue = 1
findMax([5, 3, 9, 2])

firstValue = 5
findMax([3, 9, 2])

firstValue = 3
findMax([9, 2])

firstValue = 9
findMax([2]) => 2

findMax([9, 2]) = max(9, findMax([2])) = max(9, 2) = 9
findMax([3, 9, 2]) = max(3, findMax([9, 2])) = max(3, 9) = 9
findMax([5, 3, 9, 2]) = max(5, findMax([3, 9, 2])) = max(5, 9) = 9
findMax([1, 5, 3, 9, 2]) = max(1, findMax([5, 3, 9, 2])) = max(1, 9) = 9

console.log(findMax([1, 5, 3, 9, 2])); // 9


// Нахождение суммы элементов массива:
// Напишите функцию sumArray(arr), которая принимает массив чисел и возвращает сумму всех его элементов, используя рекурсию.
function sumArray(arr) {
    if (arr.length == 0) {
        return 0
    } else {
       return arr[0] + sumArray(arr.slice(1))
    }
}

1 + [2,3,4,5]
2 + [3,4,5]
3 + [4,5]
4 + [5]
5 + []
5 + []        => 5 + 0 = 5
4 + sumArray[5]       => 4 + 5 = 9
3 + sumArray[4,5]     => 3 + 9 = 12
2 + sumArray[3,4,5]   => 2 + 12 = 14
1 + sumArray[2,3,4,5] => 1 + 14 = 15

console.log(sumArray([1, 2, 3, 4, 5])); // 15


// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// С использованием цикла.
// function sumTo(n) {
  let result = 0;
  for (let i = n; i >= 0; i--) {
    result += i
  }

  return result;
}
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n){
    if (n <= 1) {
        return n
    } else {
        return n + sumTo(n-1)
    }
}
// С использованием формулы арифметической прогрессии.
function sumTo(n) {
  return n * (n + 1) / 2;
}

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
function factorial(n) {
    if (n == 1){
        return n 
    } else {
        return n * factorial(n-1)
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


 //  Напишите функцию printList(list), которая выводит элементы списка по одному.
 // Сделайте два варианта решения: используя цикл и через рекурсию.


  function printList(list) {
    console.log(list.value); 
    if (list.next) {
      printList(list.next); 
    }
  }
  printList(list);

  function printList(list) {

    while(list) {
      alert(list.value);
      list = list.next;
    }
  
  }

