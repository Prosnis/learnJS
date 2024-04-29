// Как сделать, чтобы объект:
// был равен определенному числу?
// был равен определенной строке?

const obj = {
    [Symbol.toPrimitive](hint){
        return hint == 'string' ?  'str' : 1;
    }
};

console.log(+obj === 1) // true


const obj = {
    [Symbol.toPrimitive](hint){
        return hint == 'string' ?  'str' : 1;
    }
};

console.log(String(obj) === 'str') // true


obj > 0 // true. Как это сделать?


const obj = {
    [Symbol.toPrimitive](hint){
        return hint == 'string' ?  'str' : 1;
    }
};

console.log(obj > 0) // true

