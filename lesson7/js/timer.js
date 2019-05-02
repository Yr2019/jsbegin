/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
/*jshint expr:true*/

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let d = new Date(),
      hours = ("0" + d.getHours()).slice(-2).split(''),
      minute = ("0" + d.getMinutes()).slice(-2).split(''),
      seconds = ("0" + d.getSeconds()).slice(-2).split(''),
      date = ("0" + d.getDate()).slice(-2).split(''),
      timerWrapper = document.querySelector('.timer__wrapper'),
      timerBox = document.querySelectorAll('.timer__box'),
      timerItem = document.querySelectorAll('.timer__item');

    timerItem[0].innerHTML = hours[0];
    timerItem[1].innerHTML = hours[1];
    timerItem[2].innerHTML = minute[0];
    timerItem[3].innerHTML = minute[1];
    timerItem[4].innerHTML = seconds[0];
    timerItem[5].innerHTML = seconds[1];

});