Хранение отметок "не прочитано"

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)


Хранение времени прочтения
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы рассмотрим позднее


Отслеживание посещенных страниц
Для отслеживания посещенных страниц используем WeakMap. Каждому пользователю сопоставим WeakMap, в которой будем хранить время последнего посещения каждой страницы.
let visitLog = new WeakMap();

function visitPage(user, page) {
  if (!visitLog.has(user)) {
    visitLog.set(user, new Map());
  }
  let userVisits = visitLog.get(user);
  userVisits.set(page, new Date());
}

function getLastVisitTime(user, page) {
  if (visitLog.has(user)) {
    let userVisits = visitLog.get(user);
    if (userVisits.has(page)) {
      return userVisits.get(page);
    }
  }
  return null;
}

// Пример использования:
let user1 = { name: 'John' };
let user2 = { name: 'Jane' };

visitPage(user1, 'home');
visitPage(user2, 'about');

console.log(getLastVisitTime(user1, 'home')); // Должно вернуть время последнего посещения
console.log(getLastVisitTime(user2, 'home')); // Должно вернуть null

Управление кэшем объектов
Используем WeakSet для создания кэша объектов. Добавим функции для добавления, проверки наличия и удаления объектов из кэша.

let objectCache = new WeakSet();

function addToCache(obj) {
  objectCache.add(obj);
}

function isInCache(obj) {
  return objectCache.has(obj);
}

function removeFromCache(obj) {
  objectCache.delete(obj);
}

// Пример использования:
let obj1 = { id: 1 };
let obj2 = { id: 2 };

addToCache(obj1);
console.log(isInCache(obj1)); // true
console.log(isInCache(obj2)); // false

removeFromCache(obj1);
console.log(isInCache(obj1)); // false
