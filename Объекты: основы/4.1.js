/ задача "Робот"

const robot = {
  maxEnergy: 100,
  currentEnergy: 100,
  actions: [
    {action: 'уборка', cost: 20}, 
    {action: 'завтрак', cost: 5}, 
    {action: 'обед', cost: 15}, 
    {action: 'ужин', cost: 10}, 
    {action: 'покупки', cost: 60}
  ],
  makeAction: function(action) {
    let value = this.actions.find(el => el.action === action)
    if (!value){
      console.log(`Не могу выполнить ${action}. Такой задчи нет в моем списке.`)
    } else if(value.cost <= this.currentEnergy) {
      this.currentEnergy -=  value.cost
      console.log(`Выполняю действие ${action}. Осталось ${this.currentEnergy}% заряда`)
    } else if(value.cost > this.currentEnergy) {
      console.log(`Недостаточно энергии для выполнения действия ${action}. Требуется ${value.cost}% энергии, осталось ${this.currentEnergy}%.`)
    }
  },
  charge: function(){
    this.currentEnergy = this.maxEnergy
    console.log(`Заряд завершен. Уровень энергии ${this.currentEnergy}%.`)
}
}

robot.makeAction('ужин')
robot.makeAction('ужин')
robot.makeAction('ужин')
robot.makeAction('покупки')
robot.makeAction('покупки')
robot.charge()
robot.makeAction('покупки')
robot.makeAction('ужин')
robot.charge()

///////////////
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



