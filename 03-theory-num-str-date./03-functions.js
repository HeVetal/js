// Function Declaration
//function greet(name) {
//    console.log('Hello - ', name)
//}
//
////Function Expression
//const greet2 = function (name) {
//    console.log('2 Hello - ', name)
//}

// console.dir() // about object
//setTimeout(function(){
////    console.log('Timeout')
//    greet('vasa')
//}, 1500)

//let counter = 0
//const interval = setInterval(function(){
//    if (counter === 5) {
//        clearInterval(interval)
//    } else {
//        console.log(++counter)
//    }
//}, 1000)

//function greet(name) {
//    console.log('Hello - ', name)
//}
//const arrow = (name) => {
//    console.log('Hello - ', name)
//}
//
//arrow('ve')

//function pow(num, exp){
//    return Math.pow(num, exp)
//}
//
//function pow2 = (num, exp) => Math.pow(num, exp)

// const sum = (a = 40, b = a / 2) => a + b
//
// function sumAll(...numbers) {
//     // let res = 0
//     // for( let num of numbers ) {
//     //     res += num
//     // }
//     // return res
//     return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// Closures

// function createPerson(name) {
//     return function (lastname) {
//         console.log(name + ' ' + lastname);
//     }
// }
//
// const addLastName = createPerson('Vetal')
// addLastName('sdd')