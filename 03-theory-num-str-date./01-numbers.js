// let strInt = '42'
// let strFloat = '42.42'
//string to number
// Number(strFloat)
// +strFloat
// parseFloat(strFloat)
// (42).toFixed(1) // return string with 1 simbol after .

//BigInt
// 42n // number + 'n'

// Math
// Math.sqrt(25) // root
// Math.pow(2, 3)// 2*2*2
// Math.abs(-4) // 4
// Math.max(2, 5, 199) // return max 199

// Math.floor(4.9) // down 4
// Math.ceil(4.9) // up  5
// Math.round(4.9) // closerest  5
// Math.trunc(4.9) // without .9
// Math.random() // random number from 0 to 1

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


console.log(strFloat)