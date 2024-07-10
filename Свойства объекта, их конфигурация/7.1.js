const user = {
  name: "artyom",
  age: 31,
};

Object.defineProperty(user, 'country', {
  value: 'russia',
  enumerable: false,
  configurable: true,
  writable: true
}) // новое свойство для user, по дефолту флаги устанавливаются в false, 
   //при лексическом способе добавления нового свойства, флаги остаются -true

   for(let key in user) {
    console.log(key)
   } // свойство country добавленно через метод объекта 
    //defineProperty с флагом enumerable запрещает его итерацию. Консоль - name, age

  user.country = 'india'
  console.log(user.country) // флаг writable установлен в true - значение для country измененно

  // флаг configurable - configurable: false не даст изменить флаги свойства, а также не даст его удалить. При этом можно изменить значение свойства (writable: true)

Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.
Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// А также есть методы для их проверки:

Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.





