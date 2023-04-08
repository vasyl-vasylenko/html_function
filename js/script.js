"use strict";


//Фильм

// let numberOfFilms;
// function start(){
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '').trim();
//     }
// }
// start();

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       geners: [],
//       privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов', ''),
//             b = prompt('На сколько его оцените?', '');
//         if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("Вы просмотрели мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы класиче аий зритель");
//     } else if (personalMovieDB.count > 30){
//         console.log("Вы кирноман");
//     }else {
//         console.log("Произошла ошибка");
//     }
// }
// // detectPersonalLevel();

// function showMyDB (hidden){
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGeners(){
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGeners();
// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }
//     let volume = 0,
//         area = 0;
//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);



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


// function first(){
//     //Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// CallBack function, вызов в контролиремой последовательности
// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done(){
//     console.log(`Я прошел этот урок`);
// }
// learnJS('JavaScript', done);


// Обьекты, деструктуризация обьектов
// const options = {
//       name: 'test',
//       width: 1024,
//       height: 1024,
//       colors: {
//               border: 'black',
//               bg: 'red'
//       }
// }
// console.log(options.name);
// // Деструктуризация объекта
// const {border, bg} = options.colors;
// console.log(border);
//delete options.name;
// Цикл перебора
// for (let key in options){
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// Перебор внутри пеоебора
// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//         console.log(`свойство ${key} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


// //Массивы и псевдомасивы
// const arr = [2, 3, 6, 8];
//       arr[4] = 10;
// //console.log(arr.length); //можно удодно подсчитать елементы массива, если не нарушено логика, например не сделанно arr[100] = 2, где получится 94 пустых ячейки. А свойство length добавит +1 к последнему елементу и выведет резуль 100
// //arr[100] = 2; //не верный подсчет так как свойство ltngth сделает +1 к последнему елементу и выведет результат
// //console.log(arr.length);
// //Классический перебоор массива
// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }
// //Метод перебора for of
// // for (let value of arr){
// //     console.log(value);
// // }
// //Метод for Each
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// Передача по ссылке или по значению
// const obj = {
//     a: 5,
//     b: 1
// }
// const copy = obj; //произошло передача по ссылке не КОПИРЫВАНИЕ
// copy.a = 10;
// console.log(obj);
// console.log(copy);

//Поверхностное копирывание с помощью цыкла
// function copy(mainObj){
//     let objCopy = {};
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }
// const newNumbers = copy(numbers);
// newNumbers.a = 10; //проверка копирования верхнего уровня
// newNumbers.c.x = 11; //проверка копирования глубокого уровня - УБЕЖДАЕМСЯ что получилась ссылка а не копия!!!
// console.log(numbers);
// console.log(newNumbers);

//Копирования массива, метод slice
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'adsa';
// console.log(oldArray);
// console.log(newArray);

// Опрератор разворота spred ... делает копирование массива ES6, копирования объекта ES8
// const video = ['Youtube', 'Vimeo', 'Rutube'],
//       blogs = ['Wordpress', 'LiveJournal', 'Bloger'],
//       internet = [...video, ...blogs, 'Vk', 'Facebook'];
// console.log(internet);


// //Оператор разворота в функции - копирования данных с массива в функцию
// function logServera(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// logServera(...num);

//Копирования объекта - опретор разворота - ПОВЕРХНОСТНАЯ КОПИЯ
const bTest = {
    one: 1,
    two: 2
}
const newBtest = {...bTest};
newBtest.d = 'D';
console.log(bTest);
console.log(newBtest);



