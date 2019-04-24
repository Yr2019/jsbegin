/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '2012-05-22');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

//start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses : function() {
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
  },
  detectDayBudget : function() {
    appData.moneyPerday = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerday);
  },
  detectLevel : function() {
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
  },
  chooseOptExpenses : function() {
    for (let i = 0; i < 3; i++) {
      let a = prompt('Статья необязательных расходов?', '');

      if ((typeof (a)) === 'string' && ((typeof (a))) != null &&
        a != '' && a.length < 50) {
        console.log("done");
        appData.optionalExpenses[i + 1] = a;
      } else {
        i = i - 1;
      }
    }
  },
  checkSavings : function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сума накоплений?"),
        percent = +prompt("Под какой процент");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
    }
  },
  chooseIncome : function() {
    let item = prompt('Что принесет дополнительной доход? (Перечислете через запятую)', '');
    while ((typeof (item)) != 'string' || item == "" || item == null) {
      item = prompt('Что принесет дополнительной доход? (Перечислете через запятую)', '');
    } 
      appData.income = item.split(',');
      appData.income.push(prompt('Может что-то еще?'));
      appData.income.sort();
      appData.income.forEach(function (item, i) {
        let m = i + 1;
        alert("Способы доп. заработка: " + m + ": " + item);
        console.log("Способы доп. заработка: " + m + ": " + item);
      });
  }
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key);
}






















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