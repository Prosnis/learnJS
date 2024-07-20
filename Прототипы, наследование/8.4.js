Object.create(proto[, descriptors])  // создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
Object.getPrototypeOf(obj)  // возвращает свойство [[Prototype]] объекта obj.
Object.setPrototypeOf(obj, proto)  // устанавливает свойство [[Prototype]] объекта obj как proto.


// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

let dictionary = Object.create(null, {
    toString: {
      enumerable: false,
      value() {
        return Object.keys(this).join();
      },
    },
  });
  
  // ваш код, который добавляет метод dictionary.toString
  
  // добавляем немного данных
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
  
  // только apple и __proto__ выведены в цикле
  for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
  }
  
  // ваш метод toString в действии
  alert(dictionary); // "apple,__proto__"
  

function Rabbit(name) {
    this.name = name;
  }


  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");
//   Все эти вызовы делают одно и тоже или нет?
  
  rabbit.sayHi(); // Rabbit
  Rabbit.prototype.sayHi(); // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi(); // undefined
