// Декоратор-шпион

function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  inner.calls = [];
  function inner(...args) {
    inner.calls.push(args);
    let result = func.apply(this, args);

    return result;
  }

  return inner;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work.calls);


// Задерживающий декоратор

function f(x) {
  console.log(x);
}

 function delay(f, ms){
  return function(args){
    setTimeout(()=> f.call(this, args), ms)
  }
 }

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// Декоратор debounce

function debounce(fn, ms) {
  let timer; 
  return function () {
    const callFn = () => fn.apply(this, arguments); 
    clearTimeout(timer); // 
    timer = setTimeout(callFn, ms); 
  };
}


function throttle(callBack, delay = 1000) {
  let isPaused = false;
  return (...args) => {
    if (isPaused) return;
    callBack(...args); // после запуска ф сразу запускается коллбек
    isPaused = true; // меняем значение
    setTimeout(() => {
      // срабатывает таймер с delay
      isPaused = false; // обратно возращаем значение на false, при следующем запуске, если проверка попадает на true,
      //то ничего не происходит пока незакончится таймер
    }, delay);
  };
}



