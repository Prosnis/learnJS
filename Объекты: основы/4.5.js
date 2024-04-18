// Конечно, вот несколько сложных задач, которые можно решить с помощью конструкторов и оператора new:
// Создание игрового персонажа с различными характеристиками и методами для их изменения.


function RpgChar(name, agi = 1, str = 10, int = 1, lvl = 1, health = 100) {
  this.name = name;
  this.lvl = lvl;
  this.health = health;
  this.stats = {
    agi: agi,
    str: str,
    int: int,
  };
  this.attack = function () {
    let damage = Math.floor(Math.random() * this.stats.str + 10);
    console.log(`${this.name} наносит урон равный ${damage}`);
    return damage;
  };
  this.lvlUp = function () {
    this.stats.agi++;
    this.stats.str++;
    this.stats.int++;
    this.lvl++;
    console.log(
      `Уровень повышен до ${this.lvl}, ваши характеристики повышены: ловкость ${this.stats.agi}, сила ${this.stats.str}, интеллект ${this.stats.int}`
    );
  };
  this.healing = function () {
    this.health = 100;
    console.log("Будьте здоровы");
  };
  this.combat = function (enemy) {
    console.log(`Вы вызвали на бой ${enemy.name}, приготовьтесь сражаться!`);
    while (this.health > 0 && enemy.health > 0) {
      if (Math.random() >= 0.5) {
        let damage = this.attack();
        enemy.health -= damage;
        enemy.health > 0
          ? console.log(`Удар совершен, у противника осталось ${enemy.health} здоровья`)
          : console.log("противник сдох");
      } else {
        let damage = enemy.attack();
        this.health -= damage;
        this.health > 0
          ? console.log(`Удар совершен, у вас осталось ${this.health} здоровья`)
          : console.log("вы сдохли))");
      }
      if (enemy.health <= 0) {
        this.lvlUp()

      }
    }
  };
}

const me = new RpgChar("Artyom");
const you = new RpgChar("Bogdan");

me.combat(you);
























// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
function Calculator() {
  this.read = function () {
    this.a = +prompt("введите значение a", 0);
    this.b = +prompt("введите значение b", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

calculator.read();
calculator.sum();
calculator.mul();

// Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue){
  this.value = startingValue,
  this.read = function(){
    this.value += +prompt('введите value',0)
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений


