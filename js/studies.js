
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
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.geners[i - 1] = genre;
    }
}
writeYourGeners();