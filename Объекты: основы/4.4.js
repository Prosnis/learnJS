// Создайте объект counter с свойством count и методами increment и decrement. 
// Метод increment должен увеличивать значение count на 1, а метод decrement - уменьшать на 1. Оба метода должны выводить текущее значение count в консоль.
// Используйте эти методы с задержкой при помощи setTimeout и проверьте, что this внутри методов указывает на объект counter.

const counter = {
  count: 1,
  increment() {
    setTimeout(() => {
      this.count += 1;
      console.log(this.count);
    }, 1000);
  },
  decrement() {
    setTimeout(() => {
        this.count -= 1;
        console.log(this.count);
      }, 1000);
  },
};

counter.increment();
counter.decrement();


// Создайте объект game с методами start и end.
// Метод start должен выводить сообщение о начале игры и устанавливать свойство isActive объекта game в true. 
// Метод end должен выводить сообщение о завершении игры и устанавливать свойство isActive в false. 
// Используйте эти методы в цепочке вызовов и убедитесь, что this внутри методов указывает на объект game.

const game = {
    isActive: false,
    start(){
         this.isActive = true
         console.log(`start ${this.isActive}`)
         return this
    },
    end(){
         this.isActive = false
         console.log(`end ${this.isActive}`)
         return this
    }
}

game.start().end()






// Создайте конструктор Car, который принимает два аргумента: 
// make (марка автомобиля) и year (год выпуска). Добавьте метод drive, который выводит сообщение с маркой и годом автомобиля, 
// а затем вызывает setTimeout с задержкой 1 секунда. Внутри setTimeout вызовите метод logDrive, который также должен быть определен в конструкторе Car. 
// Убедитесь, что this в методе logDrive указывает на текущий экземпляр объекта Car.

function Car(make, year){
 this.make = make,
 this.year = year,

 this.drive = function(){
    console.log(`Driving a ${this.year} ${this.make}`)
    setTimeout(()=>{
        this.logDrive()
    }, 1000)
 },
 this.logDrive = function(){
    console.log(`Finished driving ${this.year} ${this.make}`)
 }
}

const test = new Car('honda', 2013)
test.drive()



// Создайте объект user с методом sayHello, который выводит приветствие с именем пользователя. 
// Используйте этот метод с задержкой при помощи setTimeout так, чтобы this в методе sayHello указывал на объект user.

const user = {
    userName: 'John',
    sayHello: function (){
        setTimeout(()=>{
            console.log(`Hello ${this.userName}`)
        }, 3000)
    }
}

user.sayHello()
///////////////////////////

const item = {
  title: "Phone",
  logTitle: function () {
    setTimeout(function () {
      console.log(`Product: ${this.title}`);
    }); // function setTimeout использует глобальную область видимости
  },
};

item.logTitle(); // Product: undefined


const item = {
  title: "Phone",
  logTitle: function () {
    setTimeout(() => {
      console.log(`Product: ${this.title}`);
    }); // ()=> ссылается на контекст выполненитя внешней функции 
  },
};

item.logTitle(); // Product: Phone


const item = {
  title: "Phone",
  logTitle: function () {
    setTimeout((function () {
      console.log(`Product: ${this.title}`);
    }).bind(this)); // к function setTimeout  на момент исполнения будет привязан this методом bind
  },
};

item.logTitle(); // Product: Phone


///////////////////////////
const obj = {
  lastName: "Ivanov",
  firstNames: ["Petr", "Ivan"],
  logFullNames1: function () {
    this.firstNames.forEach(function (name) {
      console.log(`${this.lastName} ${name}`);
    }); // forEach принимает вторым аргументов context }, this )
  },
  logFullNames2: function () {
    this.firstNames.forEach((name) => {
      console.log(`${this.lastName} ${name}`);
    }); // ()=> ссылается на контекст выполненитя внешней функции 
  },
};

obj.logFullNames1() // undefind Petr, undefind Ivan
obj.logFullNames2() // Ivanov Petr, Ivanov Ivan




///////////////////////////


// Создайте объект car со свойствами brand и speed. Добавьте метод accelerate, который будет увеличивать скорость автомобиля на 10 единиц при каждом вызове.
const car = {
  brand: 'honda',
  speed: 180,
  accelerate() {
    this.speed +=10
  }
}

// Предположим, у нас есть объект user с методами sayHi и sayBye.
// Нам нужно сделать так, чтобы при вызове метода sayHi он выводил "Привет, [имя пользователя]!", а при вызове метода sayBye - "Пока, [имя пользователя]!". 
// Однако имя пользователя должно быть динамическим и зависеть от значения свойства name объекта user


const user = {
  name: "John",
  sayHi() {
    console.log(`Привет, ${this.name}!`);
    return this; 
  },
  sayBye() {
    console.log(`Пока, ${this.name}!`);
    return this; 
  }
};

user.sayHi().sayBye();




// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // на момент вызова this равен window 


// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.a = +prompt('введите значение a','')
    this.b = +prompt('введите значение b','')
  },
  sum(){
    return this.a + this.b
  },
  mul(){
     return this.a * this.b
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { 
    console.log( this.step );
    return this
  }
};

ladder.up().up().down().showStep().down().showStep()
