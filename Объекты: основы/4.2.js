// Клонирование и объединение, Object.assign

const a = {
  name: 'john',
  secondName: 'doe'
}
const b ={} 
Object.assign(b, a)
b.name = 'Jojo'
console.log('a', a , 'b', b)


// клонирование spread - оператором 

const d = {
  country: 'Niger',
  name: 'Filip'
}
const e = {...d}
d.name = 'Clown'
console.log('d', d, 'e', e)

// клонирование for in

const f = {
  weight: 100,
  gender: 'female'
}

const g = {}

for(let key in f) {
  g[key] = f[key]
}

g.gender = 'male'

console.log('f', f, 'g', g)


// глубокое копирование structuredClone

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

const clone = structuredClone(user)
clone.sizes.height = 100
console.log('clone', clone, 'user', user)


// глубокое копирование structuredClone JSON.parse(JSON.stringify())

let obj = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  },
  getName: function(){
    console.log(this.name)
  }
};

let newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj)

newObj.sizes.height = 100
console.log('newObj', newObj, 'user', user)

// глубокое копирование  lodash

let obj = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  },
  getName: function(){
    console.log(this.name)
  }
};

const _ = require('lodash');
let newObj = _.cloneDeep(obj);

console.log(newObj.getName())
