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
          `HTTP error! status: ${response.status} for URL ${response.url}` // Promise.all завершается с ошибкой, если она возникает в любом из переданных промисов
        );
      }
    });

    return Promise.all(responses.map((response) => response.json()));
  }) // Ожидаем, пока обрабатывается каждый ответ.
  .then((users) => users.forEach((user) => console.log(user.name))) // Выводим имена пользователей
  .catch((err) => {
    console.log(err)
  })

//////////////////

Promise.allSettled 

всегда ждёт завершения всех промисов. В массиве результатов будет

{status:"fulfilled", value:результат} для успешных завершений,
{status:"rejected", reason:ошибка} для ошибок.


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { 
    // Создаем массив промисов для успешных запросов
    const fulfilledPromises = results.map((result, index) => {
      if (result.status === "fulfilled") {
        // Если запрос успешен, возвращаем промис с JSON
        return result.value.json();
      } else {
        // Если запрос отклонён, выводим причину ошибки
        console.log(`${urls[index]}: ${result.reason}`);
        // Возвращаем отклонённый промис
        return Promise.reject(result.reason);
      }
    });
    
    // Ждём завершения всех успешных промисов
    return Promise.allSettled(fulfilledPromises);
  })
  .then(users => {
    users.forEach(user => {
      if (user.status === "fulfilled") {
        // Обрабатываем успешные результаты
        console.log(user.value.name);
      } else {
        // Обрабатываем отклонённые результаты
        console.log(`Error loading user data: ${user.reason}`);
      }
    });
  });

/////////////

Promise.race

// ждёт только первый выполненный промис, из которого берёт результат (или ошибку).
let promise = Promise.race(iterable);

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1
// Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.

/////////////


Promise.any

// ждёт только первый успешно выполненный промис, из которого берёт результат.

let promise = Promise.any(iterable);

Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1




