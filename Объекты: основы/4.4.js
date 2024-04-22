
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
