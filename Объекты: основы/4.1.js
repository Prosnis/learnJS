const user = {
  name: 'John',
  surname: 'Smith'
}
// меняем свойство 
user.name = 'Pete'
// удаляем свойство
delete user.name

////////////////
// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.


function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

//////////////

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете? Можно изменить содержимое, но не имя переменной


// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

function getSum(obj) {
  let result = 0;
  for (let key in obj) {
    if (key) {
      result += +obj[key];
    } else {
      return result 
    }
  }


  return result;
}

///////
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  for(let key in obj) {
    if (typeof obj[key] === 'number'){
      obj[key] *= 2
    }
  }
}

multiplyNumeric(menu)

console.log(menu)



