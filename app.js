
// const amount = 9;

// if(amount <12) {
//     console.log('small number')

// } else {
//     console.log('large number')

// }

// console.log(`hey it's my fist node app!!!`);

// CommonJS, every file is module (by default)
// Modules - encapsulated Code (only share minimum)
// const names = require('./4-names');
// const sayHi = require('./5-utils');

// // console.log(names)





// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

// const promise = new Promise((resolve, reject) => {
//   resolve('hello world')
//   reject('there is an error')
// })
// console.log(promise);

// promise.then((data)=>console.log(data)).catch((error)=>console.log(err))

// const value = 2;

// const random = math.floor(math.random)


// const promise = new Promise((resolve, reject)=>{
//     // resolve("resolved")
//     // reject("error")
// })

// promise.then((a)=>{
// console.log(a)
// }).catch((b)=>{
// console.log(b)
// })


// const path =require('path');

// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')

// console.log(filePath)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)