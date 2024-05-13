function slice(target, start = 0, end = target.length){

    if(start >= target.length) return []
    if(end > target.length) end = target.length

    if (start < 0) start = target.length + start
    if (end < 0) end = target.length + end

    let result = typeof target == 'string' ? '' : []

    for (let i = target[start]; i < end + 1 ; i++){
        if (typeof result === 'string') {
            result += i
        } else {
            result.push(i)
        }
    }
    return result
}
 const str = '12345'
 const arr = [1,2,3,4,5]
 
console.log(splice(str, 1))
console.log(splice(arr, 1))
console.log(arr.slice(1))
console.log(str.slice(1))

/////////////////////////
let arr = [1, 2, 3];
function concat(...args) {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "object") {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j]);
      }
    } else {
      result.push(args[i]);
    }
  }

  return result;
}


console.log(concat(arr, [4, [5]], [6, 7], 8, 9)); //[1, 2, 3, 4, [5], 6, 7, 8, 9]
console.log(concat(arr, [4, 5], [6, 7], 8, 9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]


/////// 

function map(arr,callback){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr))
    }
    return result
}

const array = [1,2,3,4,5]
console.log(map(array, (el, index) => el + index)) // [ 1, 3, 5, 7, 9 ]
console.log(array.map((index, el)=> el + index)) // [ 1, 3, 5, 7, 9 ]
