
// Выведется ли alert?

if ("0") {
  alert( 'Привет' );
} // да - строка не пуста .следовательно true



////////////////////////////////
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let answer = promt('Какое «официальное» название JavaScript?')

if (answer == 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}


/////////////////////////////////////
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

let answer = +promt('Введите число')

if(answer > 0) {
  alert(1)
} else if(answer < 0) {
  alert(-1)
} else {
  alert(0)
}

////////////////////////////////
//Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

(a + b < 4) ? result = 'Мало' : result = 'Много'

//////////////////////////////////////////////////////////
// Перепишите if..else с использованием нескольких операторов '?'.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

(login == 'Сотрудник') ? message = 'Привет' :
(login == 'Директор') ? message = 'Здравствуйте':
(login == '') ? message = 'Нет логина' : '';


