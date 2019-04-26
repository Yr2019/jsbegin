/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

let start = document.getElementById('start'),
    blocks = document.querySelectorAll("div[class*='value']"),
    input = document.querySelectorAll("input[class='expenses-item']"),
    //input = document.getElementsByClassName("expenses-item"),
    btn = document.getElementsByTagName("button"),
    inputOptional = document.querySelectorAll("input[class='optionalexpenses-item']"),
    choose = document.querySelector('.choose-income-label'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    for (let i = 0; i < btn.length; i++) {
      let textbtn = btn[i].textContent;
      if (textbtn == 'Утвердить') {
        var firstbtn = textbtn;
      } else if (textbtn == 'Рассчитать') {
        var secondbtn = textbtn;
      }
    }

let arr = [];

arr.push(choose);
arr.push(checkbox);
arr.push(sum);
arr.push(percent);
arr.push(year);
arr.push(month);
arr.push(day);


console.log(start);
console.log(blocks);
console.log(input);
console.log(firstbtn);
console.log(secondbtn);
console.log(inputOptional);
console.log(arr);