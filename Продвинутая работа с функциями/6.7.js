let func = new Function([arg1, arg2, ..., argN], functionBody); // 
// arg1, arg2, ..., argN — аргументы функции, передаваемые в виде строк. Можно передать любое количество аргументов.
// functionBody — тело функции в виде строки, которое будет выполнено, когда функция будет вызвана.

// Глобальная область видимости: Функции, созданные с помощью new Function, выполняются в глобальной области видимости, а не в области видимости, в которой они были созданы.
// Это означает, что они не имеют доступа к локальным переменным из внешнего кода.

//  Создание простой функции:
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5

//  ункция без аргументов:
let sayHello = new Function('return "Hello, world!";');
console.log(sayHello()); // "Hello, world!"

//  Использование нескольких аргументов:
let multiply = new Function('x', 'y', 'z', 'return x * y * z');
console.log(multiply(2, 3, 4)); // 24

//Функция с условным оператором:
let isEven = new Function('n', 'if (n % 2 === 0) { return true; } else { return false; }');
console.log(isEven(4)); // true
console.log(isEven(5)); // false


//Использование функции для динамического кода:
let code = 'return Math.pow(a, b);';
let power = new Function('a', 'b', code);
console.log(power(2, 3)); // 8
