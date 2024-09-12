const iCantGetRidOfPromise = () => {
  console.log(0);
  setTimeout(() => console.log(1), 50);
  setTimeout(console.log, 0, 2);
  new Promise((resolve) => {
    console.log(3);
    setTimeout(() => resolve(4));
  })
    .then(console.log)
    .then(() => console.log(5))
    .catch(() => console.log(6))
    .then(() => {
      setTimeout(() => console.log(7));
    })

  setTimeout(() => {
    console.log(8);
  });
  
  Promise.reject(9)
    .then(() => console.log(10))
    .catch(console.log);

  console.log(11);
}

iCantGetRidOfPromise()

// 0 3 11 9 2 4 5 8 7 1

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 100);

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => {
    console.log(5);
  }, 50);
});

console.log(6);

// 1 6 4 5 2 3

setTimeout(() => console.log('A'), 0);

Promise.resolve().then(() => {
  console.log('B');
  setTimeout(() => console.log('C'), 0);
  Promise.resolve().then(() => console.log('D'));
});

console.log('E');


// E B D A C

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4'));
}, 100);

Promise.resolve().then(() => {
  console.log('5');
});

Promise.resolve().then(() => {
  console.log('6');
  setTimeout(() => {
    console.log('7');
  }, 0);
});

console.log('8');

// 1 8 5 6 2 7 3 4

Promise.resolve().then(() => {
  console.log('1');
});

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');

setTimeout(() => {
  console.log('4');
  Promise.resolve().then(() => console.log('5'));
}, 0);

console.log('6');

Promise.reject().catch(() => {
  console.log('7');
});

setTimeout(() => {
  console.log('8');
}, 50);

console.log('9');

// 3 6 9 1 7 2 4 5 8


async function async1() {
  console.log('1');
  await async2();
  console.log('2 ');
}

async function async2() {
  console.log('3');
}

console.log('4');

setTimeout(() => {
  console.log('5');
}, 0);

async1();

new Promise((resolve) => {
  console.log('6');
  resolve();
}).then(() => {
  console.log('7');
});

console.log('8');


// 4 1 3 6 8 2 7 5

console.log('A');

Promise.resolve().then(() => {
  console.log('B');
  return Promise.resolve('C');
}).then((msg) => {
  console.log(msg);
});

console.log('D');

setTimeout(() => {
  console.log('E');
}, 0);

new Promise((resolve) => {
  console.log('F');
  resolve('G');
}).then((msg) => {
  console.log(msg);
});

console.log('H');


// A D F H B C G E

setTimeout(() => console.log(1), 0);

new Promise((resolve, reject) => {
  console.log(2);
  reject(3);
}).catch((err) => {
  console.log(err);
});

console.log(4);

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6), 100);

console.log(7);

// 2 4 7 3 5 1 6

console.log(1);

setTimeout(() => console.log(2), 50);

Promise.resolve().then(() => {
  console.log(3);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res);
  setTimeout(() => console.log(5), 0);
});

setTimeout(() => console.log(6), 0);

console.log(7); 


// 1 7 3 4 6 5 2

setTimeout(() => {
  console.log('1');
}, 0);

new Promise((resolve) => {
  console.log('2');
  setTimeout(() => {
    console.log('3');
    resolve('4');
  }, 100);
}).then((msg) => {
  console.log(msg);
});

console.log('5');

setTimeout(() => {
  console.log('6');
}, 50);

console.log('7');


// 2 5 7 1 6 3 4 

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

new Promise((resolve) => {
  console.log('3');
  resolve();
}).then(() => {
  console.log('4');
});

setTimeout(() => {
  console.log('5');
  Promise.resolve().then(() => {
    console.log('6');
  });
}, 50);

console.log('7');

// 1 3 7 4 2 5 6
