// Связанная функция как метод
function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); // window

// Повторный bind
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася

// Свойство функции после bind

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // Свойства, добавленные к функции не переносятся на функцию, созданную с помощью bind. В результате bound.test возвращает undefined.

// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};
const ok = user.loginOk.bind(user)
const fail = user.loginFail.bind(user)

askPassword(ok, fail);

//Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};


askPassword(user.login.bind(user, true), user.login.bind(user, false));
