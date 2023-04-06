"use strict";


//Фильм

let numberOfFilms;
function start(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
    }
}
start();

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      geners: [],
      privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько его оцените?', '');
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Вы просмотрели мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы класиче аий зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы кирноман");
    }else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGeners();
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
    let volume = 0,
        area = 0;
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);



// const usdCurr = 28,
//       eurCurr = 32;
// function convert(amount, curr){
//     console.log(amount * curr);
// }

// convert(500, usdCurr);
// convert(400, eurCurr);
// function sayHello() {
//     let nameUser = 'Антон';
//     console.log( `Привет, ${nameUser}!`);
//     return nameUser
// }
// sayHello();

// function sayHello() {
//     let nameUser = 'Антон';
//     console.log(nameUser);
//     return nameUser
// }

// sayHello();


// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// } 
// returnNeighboringNumbers(5);


// const usdCurr = 28;
// const discont = 0.9;
// const plus = 4;
// function convert(amount, curr){
//     return curr * amount;
// }
// function promotion(result){
//     console.log(result * discont + plus );
// }

// promotion(convert (500, usdCurr));



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);
// console.log(getMathResult);