Promise.all

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива

///////////////////
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
];

const requests = urls.map((url) => fetch(url));

Promise.all(requests) // Ожидаем, пока все запросы завершатся
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  ) // Ожидаем, пока обрабатывается каждый ответ.
  .then((users) => users.forEach((user) => console.log(user.name))); // Выводим имена пользователей

///////////////////

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2, // можем передавать уже готовые значения, которые не являются промисами
  3
]).then(alert); // 1, 2, 3

//////////////////

const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/5235235",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
];

const requests = urls.map((url) => fetch(url));

Promise.all(requests) // Ожидаем, пока все запросы завершатся
  .then((responses) => {
    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} for URL ${response.url}` // В случае throw или rejected Promose.all остановится с ошибкой и проигнорирует остальные промисы
        );
      }
    });

    return Promise.all(responses.map((response) => response.json()));
  }) // Ожидаем, пока обрабатывается каждый ответ.
  .then((users) => users.forEach((user) => console.log(user.name))) // Выводим имена пользователей
  .catch((err) => {
    console.log(err)
  })
