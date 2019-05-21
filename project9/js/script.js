/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
/*jshint expr:true*/

window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Tabs

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')){
      for (let i = 0; i < tab.length; i++){
        if (target == tab[i]){
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = '2019-05-25';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

    // let hoursD = Math.floor((t/1000/60/60) % 24),
    //     days = Math.floor((t / (1000*60*60*24)));
    //     console.log(days);

    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        t = getTimeRemaining(endtime),
        timeInterval = setInterval(updateClock, 1000);
        if (t.total <= 0) {
          clearInterval(timeInterval);
          hours.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';
        } else if (t.total > 0) {
          updateClock();
        }

    function updateClock() {
      let t = getTimeRemaining(endtime);
          hours.textContent = ("0" + t.hours).slice(-3);
          minutes.textContent = ("0" + t.minutes).slice(-2);
          seconds.textContent = ("0" + t.seconds).slice(-2);
    }    
  }

  setClock('timer', deadline);

  // Modal

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      dbtn = document.querySelectorAll('.description-btn');
  
  // more.addEventListener('click', function() {
  //   overlay.style.display = 'block';
  //   this.classList.add('more-splash');
  //   document.body.style.overflow = 'hidden';
  // });

  // close.addEventListener('click', function () {
  //   overlay.style.display = 'none';
  //   more.classList.remove('more-splash');
  //   document.body.style.overflow = '';
  // });

  function click(a) {
    if (a instanceof NodeList) {
      a.forEach(function (item) {
        item.addEventListener('click', function () {
          overlay.style.display = 'block';
          this.classList.add('more-splash');
          document.body.style.overflow = 'hidden';
        });
      });
    } else {
    a.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
    }
    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }
  click(dbtn);
  click(more);

});

/* 
let more = document.querySelector('.more'),
  overlay = document.querySelector('.overlay'),
  dbtn = [...document.querySelectorAll('.description-btn')],
  close = document.querySelector('.popup-close');

let allInfo = [...dbtn, more];
for (var i = 0; i < allInfo.length; i++) {

  allInfo[i].addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

*/