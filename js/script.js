"use strict";


// const usdCurr = 28,
//       eurCurr = 32;
// function convert(amount, curr){
//     console.log(amount * curr);
// }

// convert(500, usdCurr);
// convert(400, eurCurr);
function sayHello() {
    let nameUser = 'Антон';
    console.log( `Привет, ${nameUser}!`);
    return nameUser
}
sayHello();

function sayHello() {
    let nameUser = 'Антон';
    console.log(nameUser);
    return nameUser
}

sayHello();


function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
} 
returnNeighboringNumbers(5);


const usdCurr = 28;
const discont = 0.9;
const plus = 4;
function convert(amount, curr){
    return curr * amount;
}
function promotion(result){
    console.log(result * discont + plus );
}

promotion(convert (500, usdCurr));



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);