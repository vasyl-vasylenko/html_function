
// let numberOfFilms;
// function start(){
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
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


//  Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку 
// function getCoupeNumber(numberCoope) {
//     if ( typeof(numberCoope) !== 'number' || numberCoope == null || numberCoope <0 || !Number.isInteger(numberCoope) ){
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//     if (numberCoope === 0 || numberCoope > 36){
//         return "Таких мест в вагоне не существует";
//     }
//     return Math.ceil(numberCoope / 4)
// }

// console.log(getCoupeNumber(5));

// *************Урок 29. Практика JS*****************//

// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
function getTimeFromMinutes(timeNumber) {

    if (typeof(timeNumber) !== 'number' || timeNumber < 0 || !Number.isInteger(timeNumber)){
        return "Ошибка, проверьте данные";
    }

    const housr = Math.floor(timeNumber / 60);
    const minutes = timeNumber % 60;

    let housrStr = '';

    switch(housr){
        case 0:
            housrStr = 'часов';
            break;
        case 1:
            housrStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            housrStr = 'часа';
            break;
        default:
            housrStr = 'часов';
    }

    
    return (`Это ${housr} ${housrStr} и ${minutes} минут`)
 }
 console.log(getTimeFromMinutes(150));


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
function findMaxNumber(oneNumber, twoNumber, threeNumber, fourNumber) {
    if (typeof(oneNumber) !== 'number' || typeof(twoNumber) !== 'number' || typeof(threeNumber) !== 'number' || typeof(fourNumber) !== 'number'){
        return 0;
    } else {
        return Math.max(oneNumber, twoNumber, threeNumber, fourNumber) ;
    }

}

console.log(findMaxNumber(4, 5, '6', 8));
console.log(findMaxNumber(4, 5, 24, 8));
