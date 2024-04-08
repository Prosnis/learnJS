let value = prompt("Введите имя", "");

if (value == "Админ") {
  let pass = prompt("Введите пароль", "");
  if (pass == "Я главный") {
    alert("Здравствуйте");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (value == null || value == "") {
  alert("Отменено");
} else if (value != "Админ") {
  alert("Я вас не знаю");
}
