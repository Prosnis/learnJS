// this // new Function ``
// prompt() принимать арифметику
// если все ок, вывести результат
// если выражение некорретно то сказать через alert() что чето не то
// '2+2' ok
// '2' ok
// '2 + 2 * 2' ok
// '2 + 2 * 2 ' ok
// '2   +    2 ** 2 ' ok
// '2 + 2 *** 2 ' error
// '+' // error
// '+1' ok
// '1+' error
// '1 + 2 + "test" + 3' // error
// '1 + 2 + {} + 3'

function mul() {
  let answer = prompt("Введите пример:");
  let request = answer.trim();

  try {
    const func = new Function(`return ${request}`);

    let result = func();

    if (typeof result === "number" && !isNaN(result)) {
      alert(`Результат: ${result}`);
      return result;
    } else {
      alert("Некорректный пример");
    }
  } catch (e) {
    alert("Некорректный пример");
  }
}

mul();
