// Проверка палиндрома: Напишите функцию, которая принимает строку и возвращает true, 
// если строка является палиндромом (читается одинаково с начала и с конца), 
// и false в противном случае. Используйте методы .toLowerCase() или .toUpperCase() для игнорирования регистра, 
// а также методы .split(), .reverse() и .join() 
// для разбиения строки на массив символов, переворота массива и объединения его обратно в строку.

function palindrom(string){
    let value = string.toLowerCase().split('').reverse().join('')
    return value === string ? true : false 
}
// Поиск наибольшего повторяющегося подстроки:
// Напишите функцию, которая принимает строку и возвращает наибольшую повторяющуюся подстроку в этой строке.
// Например, для строки "abcabcd" результатом должна быть строка "abc", так как это наибольшая подстрока, повторяющаяся два раза.
// Используйте метод .substring() для извлечения подстроки и метод .indexOf() для поиска повторений.

let string = "ыврапдофывротапжщрофвыаэрфвдофалр";

function subStringRepeat(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
        let subString = string.substring(i, j)
        let currentEntries = string.indexOf(subString, j)

        if (currentEntries !== -1 && result.length < subString.length) {
            result = subString
        }
    }
  }

  return result
}

console.log(subStringRepeat(string))

// Поиск самого длинного слова: 
// Напишите функцию, которая принимает строку и возвращает длину самого длинного слова в этой строке. 
// Используйте метод .split() для разбиения строки на массив слов и метод .reduce() для поиска самого длинного слова в массиве.


function getMaxLength(string){ 
    let arr = string.split(' ')
    let result = arr.reduce((acc, el) => acc.length > el.length ? acc: el, 0)

    return result
}



// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 
function ucFirst(str) {
   return str[0].toUpperCase() + str.slice(1)
}


// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str){
    str = str.toLowerCase()
    return str.includes('xxx') || str.includes('viagra') 
}




// Усечение строки
function truncate(str, maxlength){
    return str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20).length)

// Выделить число
function extractCurrencyValue(str){
   return  str.slice(1)
}
