
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

if (personalMovieDB.count < 10) {
    console.log("Вы просмотрели мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класиче аий зритель");
} else if (personalMovieDB.count > 30){
    console.log("Вы кирноман");
}else {
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);