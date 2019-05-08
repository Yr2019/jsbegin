/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {

  // Способы работы с мобильнимы девайсамы 
  // let box = document.querySelector('.box');

  // // box.addEventListener('touchstart', function(e) {
  // //   e.preventDefault();
  // //   console.log("Red box : touchstart");
  // //  // console.log(e.touches);
  // //   console.log(e.target);
  // //   console.log(e.touches[0].target);
  // //   console.log(e.changedTouches);
  // //   console.log(e.targetTouches);
  // // });

  // box.addEventListener('touchmove', function (e) {
  //   e.preventDefault();
  //   console.log("Red box : " + e.touches[0].pageX);
  // });

  // // box.addEventListener('touchend', function (e) {
  // //   e.preventDefault();
  // //   console.log("Red box : touchend");
  // // });



  // Регулярные выражения

  // new RegExp('pattern', 'flags');
  // //pattern/flags

//   let ans = prompt('Введите ваше имя');

//   let reg = /n/i;

//   console.log(ans.search(reg));
  
//   //Flag

//   // i поиск внезависимосты от регистра
//   // g поиск глобально все вхождения
//   // m флаг многострочносты

//   // Метод Searh всегда ищет только первое совпадение  
//   //  \d -- число \D - не число \w -- буква \W не буква \s 


//  // let reg1 = /n/;  // получим массив с первым совпадениям
//   let reg1 = /n/g; // получим все совпадения   в массиве  let reg1 = /n/gi;   

//   console.log(ans.match(reg1));

//   let pass = prompt('Введите пароль');

//   console.log(pass.replace(/./g, "*"));

//   alert('12-34-56'.replace(/-/g, ':'));
// 


  // let ans = prompt('Введите ваше имя');

  // let reg = /n/ig;

  // console.log(reg.test(ans));   //  тестируем выражения на n

    let ans = prompt('Введите число');

    let reg = /\d/g;

    console.log(ans.match(reg));

    let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/i));


});