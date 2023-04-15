


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
// function getTimeFromMinutes(timeNumber) {

//     if (typeof(timeNumber) !== 'number' || timeNumber < 0 || !Number.isInteger(timeNumber)){
//         return "Ошибка, проверьте данные";
//     }

//     const housr = Math.floor(timeNumber / 60);
//     const minutes = timeNumber % 60;

//     let housrStr = '';

//     switch(housr){
//         case 0:
//             housrStr = 'часов';
//             break;
//         case 1:
//             housrStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             housrStr = 'часа';
//             break;
//         default:
//             housrStr = 'часов';
//     }

    
//     return (`Это ${housr} ${housrStr} и ${minutes} минут`)
//  }
//  console.log(getTimeFromMinutes(150));


// // Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// function findMaxNumber(oneNumber, twoNumber, threeNumber, fourNumber) {
//     if (typeof(oneNumber) !== 'number' || typeof(twoNumber) !== 'number' || typeof(threeNumber) !== 'number' || typeof(fourNumber) !== 'number'){
//         return 0;
//     } else {
//         return Math.max(oneNumber, twoNumber, threeNumber, fourNumber) ;
//     }

// }

// console.log(findMaxNumber(4, 5, '6', 8));
// console.log(findMaxNumber(4, 5, 24, 8));



//Задача с собеседований на числа Фибоначчи
//Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//     let result = '';
//     let first = 1;
//     let second = 1;
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return console.log(result);
// }
// fib(7);


// 1 Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// 2 Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
    //showProgrammingLangs(personalPlanPeter)  =>
    //"Язык js изучен на 20% Язык php изучен на 10%"
    //Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// 3 Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. 
//Задание 1
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%', 
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//        //str = `Мне ${this.age} и владею языками: ${this.skills.languages[0].toUpperCase()} ${this.skills.languages[1].toUpperCase()}`;
//        // метод перебора
//        let str = '';
//        str = `Мне ${personalPlanPeter.age} и владею языками: `
//        this.skills.languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()} `;
//        });
//         return str;
//     } 
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// // Задание 2
// function showExperience(){
//      const preriod = `${personalPlanPeter.skills.exp}`;
//      return preriod;
// }
// console.log(showExperience(personalPlanPeter));

// // Задание 3
// function showProgrammingLangs(plan) {
//         const {programmingLangs} = plan.skills; // ключ с объекта programmingLangs 
//         let stringSkills = '';
//         for(let i in programmingLangs){
//             stringSkills += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
//         }
//     return stringSkills;
// }
// console.log(showProgrammingLangs(personalPlanPeter));


// //1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return console.log(str);
// }
// showFamily(family);


// // напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }
// standardizeStrings(favoriteCities);



// // Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// const someString = 'This is some strange string';
// let newArr = '';
// function reverse(str) {
//     if(typeof(str) !== 'string'){
//         return "Ошибка!";
//     } 
//     return  newArr = [...str].reverse().join('');
// }
// reverse(someString);
// console.log(newArr);


// // Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных 
// //банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с 
// //прочими валютами: const baseCurrencies = ['USD', 'EUR']; const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// // Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// // Пример: availableCurr(['UAH', 'RUB', 'CNY'], 'CNY') Вернет строку:
// // Доступные валюты:
// // UAH
// // RUB
// // Заметьте: CNY (юань) исчез из списка валют, значит такая валюта закончилась
// // После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// function availableCurr(arr, missingCurr) {
//     let srt = '';
//     arr.lenght === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n'
//     arr.forEach(function(curr, i){
//         if (curr !== missingCurr){
//             str += `${curr}\n`;
//         }
//     });
//     return console.log(str);
// }
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');