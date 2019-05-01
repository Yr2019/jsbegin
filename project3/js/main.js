/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
/*jshint expr:true*/

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    app = document.querySelector('.app'),
    logo = document.querySelector('.logo'),

    optionalExpensesText = document.querySelectorAll('.optionalexpenses-item'),
    expensesText = document.querySelectorAll('.expenses-item'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
expensesBtn.style.background = "0";
expensesBtn.style.color = "red";
expensesBtn.style.border = "1px solid grey";

optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.background = "0";
optionalExpensesBtn.style.color = "red";
optionalExpensesBtn.style.border = "1px solid grey";
countBtn.disabled = true;
countBtn.style.background = "0";
countBtn.style.color = "red";
countBtn.style.border = "1px solid grey";

app.style.backgroundImage = "url('img/bg.jpg')";
app.style.height = "100vh";
logo.style.background = "0";

startBtn.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  while ( time == "" || time == null) {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2012-05-10');
  }
  money = +prompt('Ваш бюджет на месяц?', '');
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  countBtn.disabled = false;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

[].forEach.call(expensesText, function (element) {
  element.addEventListener("input", function () {
    let sum = 0;
    for (let i = 0; i < expensesText.length; i++) {
    let a = expensesText[i].value,
        b = expensesText[++i].value,
        c = expensesText[++i].value,
        d = expensesText[++i].value;
    if (a == null || a == "" || b == null || b == "" || c == null || c == "" || d == null || d == "") {
      console.log("Please Fill All Required Field");
      return false;
    } else if (a.length > 20 || isNaN(b) || c.length > 20 || isNaN(d)) {
        console.log(" Ошибка: Наименование не должно превишать 20 символов ..  Цена только цифры");
        return false; 
    } else if((typeof (a)) === 'string' && ((typeof (a))) != null && ((typeof (b))) != null &&
      a != '' && b != '') {
      console.log("done");
      appData.expenses[a] = b;
      appData.expenses[c] = d;
      sum += +b + (+d);
      expensesBtn.disabled = false;
      expensesBtn.style.background = "";
      expensesBtn.style.color = "";
      expensesBtn.style.border = "0";
      countBtn.disabled = false;
      countBtn.style.background = "";
      countBtn.style.color = "";
      countBtn.style.border = "0";
    } else {
      i = i - 1;
    }
  }
  expensesBtn.addEventListener('click', function () {
    expensesValue.textContent = sum;
  });
  });
});

[].forEach.call(optionalExpensesText, function (element) {
  element.addEventListener("input", function () {
    for (let i = 0; i < optionalExpensesText.length; i++) {
      let a = optionalExpensesText[i].value,
        b = optionalExpensesText[++i].value,
        c = optionalExpensesText[++i].value;
      if (a == null || a == "") {
        a = '';
        appData.optionalExpenses[1] = a;
      } else if (/[a-zA-Z]/gi.test(a) == 1) {
        a = '';
        appData.optionalExpenses[1] = a;
        console.log("Ошибка : Только Русские Символы" + a);
      } else {
        appData.optionalExpenses[1] = a;
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.background = "";
        optionalExpensesBtn.style.color = "";
        optionalExpensesBtn.style.border = "0";
      }
      if (b == null || b == "") {
        b = '';
        appData.optionalExpenses[2] = b;
      } else if (/[a-zA-Z]/gi.test(b) == 1) {
        b = '';
        appData.optionalExpenses[1] = b;
        console.log("Ошибка : Только Русские Символы" + b);
      } else {
        appData.optionalExpenses[2] = b;
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.background = "";
        optionalExpensesBtn.style.color = "";
        optionalExpensesBtn.style.border = "0";
      }
      if (c == null || c == "") {
        c = '';
        appData.optionalExpenses[3] = c;
      } else if (/[a-zA-Z]/gi.test(c) == 1) {
        c = '';
        appData.optionalExpenses[1] = c;
        console.log("Ошибка : Только Русские Символы" + c);
      } else {
        appData.optionalExpenses[3] = c;
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.background = "";
        optionalExpensesBtn.style.color = "";
        optionalExpensesBtn.style.border = "0";
      }
      let opt = a + ' ' + b + ' ' + c + ' ';
      optionalExpensesBtn.addEventListener('click', function () {
        optionalexpensesValue.textContent = opt;
      });
    }
  });
});

countBtn.addEventListener('click', function() {
  let expFirst = appData.expenses[Object.keys(appData.expenses)[0]],
      expSecond = appData.expenses[Object.keys(appData.expenses)[1]];
      if ( expFirst === undefined || expSecond === undefined) {
        console.log("Ошибка :: Заполните обезательные расходы");
      } else if (appData.budget != undefined) {
        appData.moneyPerday = ((appData.budget - expFirst - expSecond) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerday;

        if (appData.moneyPerday < 100) {
          levelValue.textContent = "Минимальний уровень достатка";
        } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
          levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerday >= 2000) {
          levelValue.textContent = "Высокий уровень достатка";
        } else {
          levelValue.textContent = "Произошла ошибка";
        }
      } else {
        dayBudgetValue.textContent = 'Произошла ощибка!';
      }

});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
      appData.income = items.split(', ');
      incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true){
      appData.savings = false;
  } else {
      appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};



/*
expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value,
        c = expensesItem[++i].value,
        d = expensesItem[++i].value;
        console.log(a);
        console.log(typeof(a));
        console.log(typeof (b));
        console.log(typeof (c));
        console.log(typeof (d));
        if (a == null || a == "" || b == null || b == "" || c == null || c == "" || d == null || d == "" || isNaN(d) || isNaN(b)) {
          console.log("Please Fill All Required Field");
          return false;
        } else if ((typeof (a)) === 'string' && ((typeof (a))) != null && ((typeof (b))) != null &&
          a != '' && b != '' && a.length < 50) {
          console.log("done");
          appData.expenses[a] = b;
          appData.expenses[c] = d;
          sum += +b +(+d);
        } else {
          i = i - 1;
        }
  }
  expensesValue.textContent = sum;  
});

*/



/*
if (a.search(/[А-яЁё]/) === -1) {
  console.log('Нет русских букв');
} else {
  console.log('Русские буквы есть');
}
*/




// [].forEach.call(optionalExpensesText, function (element) {
//       element.addEventListener("input", function () {
//         for (let i = 0; i < optionalExpensesText.length; i++) {  
//             let a = optionalExpensesText[i].value,
//                 b = optionalExpensesText[++i].value,
//                 c = optionalExpensesText[++i].value;
//               if (a == null || a == "") {
//                   a = '';
//                   appData.optionalExpenses[1] = a;
//               } else {
//                 appData.optionalExpenses[1] = a;
//                 optionalExpensesBtn.disabled = false;
//                 optionalExpensesBtn.style.background = "";
//                 optionalExpensesBtn.style.color = "";
//               }
//               if (b == null || b == "") {
//                 b = '';
//                 appData.optionalExpenses[2] = b;
//               } else {
//                 appData.optionalExpenses[2] = b;
//                 optionalExpensesBtn.disabled = false;
//                 optionalExpensesBtn.style.background = "";
//                 optionalExpensesBtn.style.color = "";
//               }
//               if (c == null || c == "") {
//                 c = '';
//                 appData.optionalExpenses[3] = c;
//               } else {
//                 appData.optionalExpenses[3] = c;
//                 optionalExpensesBtn.disabled = false;
//                 optionalExpensesBtn.style.background = "";
//                 optionalExpensesBtn.style.color = "";
//               }
//               let opt = a + ' ' + b + ' ' + c + ' ';
//               optionalExpensesBtn.addEventListener('click', function () {
//                 optionalexpensesValue.textContent = opt;
//               });
//         }
//     });
// });









