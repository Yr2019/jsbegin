let money = prompt('Ваш бюджет на месяц?', '60000');
let d = new Date(prompt('Введите дату в формате YYYY-MM-DD', '2012-05-22')),
    year = d.getFullYear(),
    month = d.getMonth() + 1,
    date = d.getDate(),
    time = (year + "-" + month + "-" + date);
console.log(money);
console.log(time);

let appData = {
  budget: {
    
  },
  timeData: {

  },
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false,
};

let budgetUser = money;
    appData.budget = budgetUser;

let dateTime = time;
    appData.timeData = dateTime;

let questionArticle = prompt('Введите обязательную статью расходов в этом месяце', '20000'),
    questionCost = prompt('Во сколько обойдется?', '15000'),
    artRequired = 'article',
    costReguired = 'cost';
    appData.expenses[artRequired] = questionArticle;
    appData.expenses[costReguired] = questionCost;

  console.log(appData);

let budgetDay = (money / 30 ) ;
    console.log(budgetDay);
    alert('Бюджет на 1 день :' + budgetDay);


var num = 33721;
var multiple = num.toString().split("").reduce(function (prev, current) {
  return parseInt(prev) * parseInt(current);
});

console.log(multiple);


var step = 3;
var result = 1;
var i = 0;
  while ( i < step) {
    result = result * multiple;
    i++;
  }
console.log(result);
var digit = result.toString()[0] + result.toString()[1];
alert('Первые цифры : ' + digit);