/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2012-05-22');

    while(isNaN(money) || money == "" || money == null){
      money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');
    if ((typeof (a)) === 'string' && ((typeof (a))) != null && ((typeof (b))) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerday = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет:" + appData.moneyPerday);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerday < 100) {
    console.log("Минимальний уровень достатка");
  } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerday >= 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
  console.log(appData);
}
detectLevel();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let a = prompt('Статья необязательных расходов?', '');

    if ((typeof (a)) === 'string' && ((typeof (a))) != null  &&
      a != '' && a.length < 50) {
      console.log("done");
      appData.optionalExpenses[i + 1] = a;
    } else {
      i = i - 1;
    }
  }
}
chooseOptExpenses();

function checkSavings() {
  if (appData.savings == true) {
      let save = +prompt("Какова сума накоплений?"),
        percent = +prompt("Под какой процент");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
  }
}
checkSavings();








// First required exercise 

//  While
// var i = 0; 
// while (i < 2) {
// let a = prompt('Введите расходы в этом месяце', ''),
//     b = prompt('Во сколько обойдется?', '');
// while ((typeof (a)) != 'string' || (typeof (a)) == null || (typeof (b)) == null 
//     || a == '' || b == '' || a.length > 50) {
//   a = prompt('Введите расходы в этом месяце', '');
//   b = prompt('Во сколько обойдется?', '');
// }
//   console.log("done");
//   appData.expenses[a] = b;
//   i++;
// }


// //  Do.while

// var i = 0;
// while (i < 2) {
// do {
//   var a = prompt('Введите расходы в этом месяце', ''),
//       b = prompt('Во сколько обойдется?', '');
// }
// while ((typeof (a)) != 'string' || (typeof (a)) == null || (typeof (b)) == null || a == '' || b == '' || a.length > 50);

// console.log("done");
// appData.expenses[a] = b;
// i++;
// }