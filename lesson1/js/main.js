let money = prompt('Ваш бюджет на месяц?');
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

let questionArticle = prompt('Введите обязательную статью расходов в этом месяце'),
    questionCost = prompt('Во сколько обойдется?'),
    questionAll = (questionArticle + ":" + questionCost);
    appData.expenses = questionAll;

  console.log(appData);

let budgetDay = (money / 30 ) ;
    console.log(budgetDay);

