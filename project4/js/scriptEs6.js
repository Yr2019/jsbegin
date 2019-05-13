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

  let hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };
  hideTabContent(1);

  let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', (event) => {
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

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
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

  // Connect Modal

  let modalPhone = document.querySelector('.popup-form__input'),
      btnModal = document.querySelector('.popup-form__btn'),
      inputForm = document.querySelectorAll('#form input');

      
  var telLibrary = {
    phone: []
  };

  var contactLibrary = {
    mail: [],
    phone: []
  };

  modalPhone.addEventListener('input', () => {
    var phoneCheck = /^[+]?\d+$/;
    let inp = modalPhone.value;
    if (inp.match(phoneCheck) && inp.length < 13 && inp.length > 11) {
      telLibrary.phone.push({number:inp});
      var jsonModal = JSON.stringify(telLibrary);
      console.log(jsonModal);
    } else {
      console.log("Нужно пройти проверку");
    }
  });

 // Contact Form
  inputForm[0].addEventListener('mouseleave', () => {
    var mailCheck = /.+@.+\..+/i ;
    let minp = inputForm[0].value;
    if (minp.match(mailCheck) && minp.length < 30 ) {
      contactLibrary.mail.push({ mail : minp});
      var jsonContact = JSON.stringify(contactLibrary);
      console.log(jsonContact);
    }
  });

  inputForm[1].addEventListener('input', () => {
    var phoneCheck2 = /^[+]?\d+$/;
    let minp2 = inputForm[1].value;
    if (minp2.match(phoneCheck2) && minp2.length < 13 && minp2.length > 11) {
      contactLibrary.phone.push({ number : minp2});
      var jsonContact = JSON.stringify(contactLibrary);
      console.log(jsonContact);
    } else {
      console.log("Нужно пройти проверку");
    }
  });

});







// var saveData = (function () {
//   var a = document.createElement("a");
//   document.body.appendChild(a);
//   a.style = "display: none";
//   return function (data, fileName) {
//     var json = JSON.stringify(data),
//       blob = new Blob([json], {
//         type: "octet/stream"
//       }),
//       url = window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = fileName;
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };
// }());

// var data = {
//     x: 42,
//     s: "hello, world",
//     d: new Date()
//   },
//   fileName = "my-download.json";

// saveData(data, fileName);

// function WriteToFile(passForm) {

//   let fso = CreateObject("Scripting.FileSystemObject");
//   let s = fso.CreateTextFile("<your Path>/filename.txt", True);

//   var firstName = document.getElementById('FirstName');
//   var lastName = document.getElementById('lastName');

//   s.writeline("First Name :" + FirstName);
//   s.writeline("Last Name :" + lastName);

//   s.writeline("-----------------------------");
//   s.Close();
// }


//   Save into Json

// var a = document.createElement("a"),
//   fileName = "my-download.json";
// document.body.appendChild(a);
// a.style = "display: none";
// telLibrary.push(inp);
// var json = JSON.stringify(telLibrary),
//   blob = new Blob([json], {
//     type: "octet/stream"
//   }),
//   url = window.URL.createObjectURL(blob);
// a.href = url;
// a.download = fileName;
// a.click();
// window.URL.revokeObjectURL(url);
// console.log(json);