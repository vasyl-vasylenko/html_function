


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


// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
//Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }
// function isBudgetEnough(data) {
//     let totalVolumeStores = 0;
//     let shopArea = 0;
//     data.shops.forEach((item) => {
//         shopArea += item.width * item.length; 
//     });
//     totalVolumeStores = shopArea * data.height;

//     if(data.budget - (totalVolumeStores * data.moneyPer1m3) >= 0 ){
//         return console.log('Бюджета достаточно');
//     } else {
//         return console.log('Бюджета недостаточно');
//     }
// }
// isBudgetEnough(shoppingMallData);



// //У вас есть список учеников, которые хотят поиграть в игру: const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// //Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// //Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// //Пример: sortStudentsByGroups(students)  =>[
//     //   [ 'Andrew', 'Ann', 'Bernard' ],
//     //   [ 'Cris', 'Josh', 'Mark' ],
//     //   [ 'Peter', 'Sam', 'Sandra' ],
//     //   'Оставшиеся студенты: Takesi'
//     // ]
// //Если убрать одно студента из списка, то результат будет:[
//     //   [ 'Andrew', 'Ann', 'Bernard' ],
//     //   [ 'Cris', 'Josh', 'Mark' ],
//     //   [ 'Peter', 'Sam', 'Sandra' ],
//     //   'Оставшиеся студенты: -'
//     // ]
// // А если добавить одного, то:[
// //       [ 'Andrew', 'Ann', 'Bernard' ],
// //       [ 'Cris', 'Josh', 'Mark' ],
// //       [ 'Peter', 'Sam', 'Sandra' ],
// //       'Оставшиеся студенты: Takesi, Somebody'
// //     ]
// //То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const arrOne = [], 
//         arrTwo = [], 
//         arrThere = [],
//         arrRest = [];
//     for( i = 0; i < arr.length; i++){
//         if ( i < 3){
//             arrOne.push(arr[i]);
//         } else if ( i < 6 ){
//             arrTwo.push(arr[i])
//         } else if ( i < 9){
//             arrThere.push(arr[i]);
//         } else {
//             arrRest.push(arr[i]);
//         }
//     }
//     return [arrOne,arrTwo, arrThere, `Оставшиеся студенты: ${arrRest.length === 0 ? '-' : arrRest.join(', ')}`]
// }
// sortStudentsByGroups(students);



const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop === false ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}
console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (((+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [{name: 'Mike', age: 32}, ...copy.waitors];
    return copy;
}
console.log(transferWaitors(restorantData));