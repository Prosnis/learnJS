// Какое последнее значение выведет этот код? Почему?

let i = 3;
while (i) {
  alert( i-- );
} // 3 2 1 - после итерации i = 1 - 1 значение 0 вернет false, цикл остановится 

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i ); // 4


// Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i ); // 5


// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?
  
// Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i ); // сначала сравнение потом увелечение 4

// Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i ); // сначала сравнение потом увелечение 4

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i < 10; i++) {
  if(!(i % 2))
    console.log(i)
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

while(i < 3) {
  alert( `number ${i}!` )
  i++
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let value 
do {
   value = prompt('Введите число больше 100','')
} while(value <= 100 && value != null)


// поиск простых чисел 

function simpleNumber(n) {
  let result = []
  for (let i = 2; i < n; i++) {
    let value = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        value = false;
      }
    }
    if (value) {
      result.push(i)
    }
  }
  return result
}

console.log(simpleNumber(10))

