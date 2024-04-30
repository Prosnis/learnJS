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
