/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
/*jshint -W093*/
/*jshint -W004*/
/*jshint expr:true*/

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Tabs

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  let hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };
  hideTabContent(1);

  let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = '2019-05-25';

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  let setClock = (id, endtime) => {
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
  };

  setClock('timer', deadline);

  // Modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    dbtn = document.querySelectorAll('.description-btn');

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

  // Form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    check: 'Проверка пройдена',
    error: 'Нужно пройти проверку'
  };

  let form = document.querySelector('.main-form'),
      formContacts = document.getElementById('form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.style.cssText = `
                font-size: 12px; 
                color: white;`;

  let isValid = false;
  let email;
  let tel;
  let countInput;


  function checkForm(elem) {
    countInput = elem.getElementsByTagName('input').length;
    elem.style.position = 'relative';
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener('input', function () {
        if (this.type === 'email') {
          elem.insertBefore(statusMessage, elem.children[1]);
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(this.value).toLowerCase()) === true) {
            email = true;
            statusMessage.innerHTML = message.check;
          } else {
            statusMessage.innerHTML = message.error;
            email = false;
          }
          setTimeout(function () {
            statusMessage.remove();
          }, 1500);
        } else if (this.type === 'tel') { 
          elem.insertBefore(statusMessage, elem.children[2]);
          statusMessage.innerHTML = message.error;
          if (this.value.replace(/[^0-9| +]/g, '')) {
            tel = true;
            statusMessage.innerHTML = message.check;
          }
        }
        if (countInput === 1 && tel === true) {
            isValid = true;
        }
        if (tel === true && email === true) {
            isValid = true;
            let input = elem.getElementsByTagName('input');
            input[0].name = 'mail';
            input[1].name = 'tel';
        } 
      });
    }
  }

  function sendForm(elem) {
    checkForm(elem);
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let input = elem.getElementsByTagName('input');
      if (isValid === true) {
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      let formData = new FormData(elem);
      let obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);
      request.send(json);
      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
          statusMessage.style.cssText = `
                font-size: 12px; 
                color: white;`;
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      };
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
      }
    });
  }

  sendForm(formContacts);
  sendForm(form);


    // slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      // for (let i = 0; i < slides.length; i++) {
      //   slides[i].style.display = 'none';
      // } // Точно такой же цикл как Foreach выше
      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
      plusSlides(-1);
    });

    next.addEventListener('click', function () {
      plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
          currentSlide(i);
        }
      }
    });

    //calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
      let personsCheck = persons.value;
          personsCheck.replace(/\d*\.?\d*/, ' ');
          personsSum = personsCheck;
          //persons.value = parseFloat(persons.value.replace(/^.*?(-?\d+(?:\.\d+)?).*?$/, '$1'));
      if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
      } else {
        total = (daysSum + personsSum) * 4000;
        totalValue.innerHTML = total;
      }
    });

    restDays.addEventListener('change', function () {
      let  daysCheck = restDays.value;
            daysCheck.replace(/\d*\.?\d*/, ' ');
            daysSum = daysCheck;
    // restDays.value = parseFloat(restDays.value.replace(/^.*?(-?\d+(?:\.\d+)?).*?$/, '$1'));
      if (persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = 0;
      } else {
        total = (daysSum + personsSum) * 4000;
        totalValue.innerHTML = total;
      }
    });

    // Второй вариант 
    // persons.addEventListener('input', function () {
    //   personsSum = +this.value;
    //   persons.value = parseFloat(persons.value.replace(/^.*?(-?\d+(?:\.\d+)?).*?$/, '$1'));
    //   total = (daysSum + personsSum) * 4000;

    //   if (restDays.value == '' || persons.value == '') {
    //     totalValue.innerHTML = 0;
    //   } else {
    //     totalValue.innerHTML = total;
    //   }
    // });

    // restDays.addEventListener('input', function () {
    //   daysSum = +this.value;
    //   restDays.value = parseFloat(restDays.value.replace(/^.*?(-?\d+(?:\.\d+)?).*?$/, '$1'));
    //   total = (daysSum + personsSum) * 4000;

    //   if (persons.value == '' || restDays.value == '') {
    //     totalValue.innerHTML = 0;
    //   } else {
    //     totalValue.innerHTML = total;
    //   }
    // });

    place.addEventListener('change', function () {
      if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
      } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
    });


});

// persons.addEventListener('change', function () {
//   let personsCheck = persons.value;
//   personsCheck.replace(/\d*\.?\d*/, ' ');
//   if (personsCheck == '' || daysSum == '') {
//     totalValue.innerHTML = 0;
//   } else {
//     personsSum = +this.value;
//     total = (daysSum + personsSum) * 4000;
//     if (restDays.value == '') {
//       totalValue.innerHTML = 0;
//     } else {
//       totalValue.innerHTML = total;
//     }
//   }
// });

// restDays.addEventListener('change', function () {
//   let daysCheck = restDays.value;
//     daysCheck.replace(/\d*\.?\d*/, ' ');
//   if (daysCheck == '' || daysSum == '') {
//     totalValue.innerHTML = 0;
//   } else {
//     personsSum = +this.value;
//     total = (daysSum + personsSum) * 4000;
//     if (restDays.value == '') {
//       totalValue.innerHTML = 0;
//     } else {
//       totalValue.innerHTML = total;
//     }
//   }
// });





















