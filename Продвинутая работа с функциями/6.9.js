// Декоратор-шпион

function work(a, b) {
    return console.log(a + b);
  }
  
  function spy(func) {
    function inner(...args) {
      inner.calls.push(args);
      return func.apply(this, args);
    }
    inner.calls = [];
    return inner;
  }
  
  let test = spy(work);
  
  console.log(test(1, 2));  // Вывод: 3
  console.log(test(3, 4));  // Вывод: 7
  console.log(test(5, 6));  // Вывод: 11
  
  console.log(test.calls);  // Вывод: [[1, 2], [3, 4], [5, 6]]


// Задерживающий декоратор

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
