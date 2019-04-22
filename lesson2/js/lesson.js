/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

// let money = +prompt('Ваш бюджет на месяц?', '60000'),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '2012-05-22');

// let appData = {
//   budget: money,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   timeData: time,
//   savings: false,
// };

// for (let i = 0; i < 2; i++){
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
    
//     if ((typeof (a)) === 'string' && ((typeof (a))) != null && ((typeof (b))) != null 
//       && a != '' && b != '' && a.length < 50) {
//       console.log("done");
//       appData.expenses[a] = b;
//     } else {
//       console.log("restart loop");
//       i = i - 1;
//     } 
// }

// appData.moneyPerday = appData.budget / 30 ;

// alert("Ежедневный бюджет:" + appData.moneyPerday);

// if(appData.moneyPerday < 100) {
//   console.log("Минимальний уровень достатка");
// } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
//   console.log("Средний уровень достатка");
// } else if (appData.moneyPerday >= 2000) {
//   console.log("Высокий уровень достатка");
// } else {
//   console.log("Произошла ошибка");
// }

// console.log(appData);


// // First required exercise 


// //  While 
// let a = prompt('Введите расходы в этом месяце', ''),
//     b = prompt('Во сколько обойдется?', '');
// while ((typeof (a)) != 'string' || (typeof (a)) == null || (typeof (b)) == null 
//     || a == '' || b == '' || a.length > 50) {
//   a = prompt('Введите расходы в этом месяце', '');
//   b = prompt('Во сколько обойдется?', '');
// }
//   alert("Отлично! Вы ввели число: " + a);
//   alert("Отлично! Вы ввели число: " + b);

//  Do.while

// do {
//   var a = prompt('Введите расходы в этом месяце', ''),
//       b = prompt('Во сколько обойдется?', '');
// }
// while ((typeof (a)) != 'string' || (typeof (a)) == null || (typeof (b)) == null || a == '' || b == '' || a.length > 50);

// console.log(a);
// console.log(b);