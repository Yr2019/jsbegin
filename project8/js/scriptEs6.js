/*jshint -W030*/
/*jshint -W014*/
/*jshint -W083*/
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
  let phoneInput = document.querySelectorAll('input[name="phone"]'),
      form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      contactForm = document.getElementById('form'),
      contactInput = contactForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');


  phoneInput.forEach(function (item) {
    item.oninput = function () {
      this.value = this.value.replace(/[^\+\d]/g, ' ');
    };
  });

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    check: 'Проверка пройдена',
    error: 'Нужно пройти проверку'
  };

  function sendForm(form, input) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);
      let formData = new FormData(form);

      function postData(data) {

        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          let obj = {};
          formData.forEach((value, key) => {
            obj[key] = value;
          });

          let data = JSON.stringify(obj);

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status === 200) {
              resolve();
            } else {
              reject();
            }
          };
          request.send(data);
        });
      } // End postData    /[^\+\d]/g,

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = message.success;
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    });
  }
  sendForm(form, input);
  sendForm(contactForm, contactInput);

});




// var isValid = false;

// input[0].addEventListener('input', () => {
//   var phoneCheck = /^[+]?\d+$/;
//   let inp = input[0].value;
//   if (inp.match(phoneCheck) && inp.length < 13 && inp.length > 11) {
//     isValid = true;
//     statusMessage.innerHTML = message.check;
//   } else {
//     statusMessage.innerHTML = message.error;
//   }
// });

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   form.appendChild(statusMessage);
//   if (isValid) {
//     console.log("submit");
//     let request = new XMLHttpRequest();
//     request.open('POST', 'server.php');
//     //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Отправка в обычном тектовом формате
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//     let formData = new FormData(form);

//     let obj = {};
//     formData.forEach(function (value, key) {
//       obj[key] = value;
//     });  // Все данные c FormData помещаем в обект obj
//     let json = JSON.stringify(obj);
//     request.send(json);

//     request.addEventListener('readystatechange', function () {
//       if (request.readyState < 4) {
//         statusMessage.innerHTML = message.loading;
//       } else if (request.readyState === 4 && request.status == 200) {
//         statusMessage.innerHTML = message.success;
//       } else {
//         statusMessage.innerHTML = message.failure;
//       }
//     });
//     for (let i = 0; i < input.length; i++) {
//       input[i].value = '';
//       isValid = false;
//     }
//   }
// });

// Contact Form






//==========================================================
//   let formContacts = document.getElementById('form'),
//     inputContacts = formContacts.getElementsByTagName('input'),
//     statusMessage2 = document.createElement('div');
//   statusMessage2.classList.add('status');
//   formContacts.style.position = 'relative';

//   inputContacts[0].addEventListener('input', () => {
//     statusMessage.style.cssText = `
//             font-size: 12px; 
//             color: white;
//             position: absolute;
//             top: 50px`;
//     formContacts.insertBefore(statusMessage, formContacts.children[1]);
//     var mailCheck = /.+@.+\..+/i;
//     let minp = inputContacts[0].value;
//     if (minp.match(mailCheck) && minp.length < 30) {
//       isValid = true;
//       statusMessage.innerHTML = message.check;
//       inputContacts[0].name = 'mail';
//     } else {
//       statusMessage.innerHTML = message.error;
//     }
//   });

//   inputContacts[1].addEventListener('input', () => {
//     statusMessage2.style.cssText = `
//               font-size: 12px; 
//               color: white;
//               position: absolute;
//               top: 120px`;
//     formContacts.insertBefore(statusMessage2, formContacts.children[2]);
//     var phoneCheck2 = /^[+]?\d+$/;
//     let minp2 = inputContacts[1].value;
//     if (minp2.match(phoneCheck2) && minp2.length < 13 && minp2.length > 11) {
//       isValid = true;
//       statusMessage2.innerHTML = message.check;
//       inputContacts[1].name = 'number';
//     } else {
//       statusMessage2.innerHTML = message.error;
//     }
//   });

//   formContacts.addEventListener('submit', function (event) {
//     event.preventDefault();
//     formContacts.appendChild(statusMessage);
//     if (isValid) {
//       console.log("submit");
//       let request = new XMLHttpRequest();
//       request.open('POST', 'server.php');
//       //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Отправка в обычном тектовом формате
//       request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//       let formData2 = new FormData(formContacts);

//       let obj2 = {};
//       formData2.forEach(function (value, key) {
//         obj2[key] = value;
//       });  // Все данные c FormData помещаем в обект obj
//       let json2 = JSON.stringify(obj2);
//       request.send(json2);

//       request.addEventListener('readystatechange', function () {
//         if (request.readyState < 4) {
//           statusMessage.innerHTML = message.loading;
//         } else if (request.readyState === 4 && request.status == 200) {
//           statusMessage.innerHTML = message.success;
//         } else {
//           statusMessage.innerHTML = message.failure;
//         }
//       });
//       for (let i = 0; i < input.length; i++) {
//         input[i].value = '';
//         isValid = false;
//       }
//     }
//   });
// });





//   // Connect Modal

//   let modalPhone = document.querySelector('.popup-form__input'),
//       btnModal = document.querySelector('.popup-form__btn'),
//       inputForm = document.querySelectorAll('#form input');

//   var telLibrary = {
//     phone: []
//   };

//   var contactLibrary = {
//     mail: [],
//     phone: []
//   };

//   modalPhone.addEventListener('input', () => {
//     var phoneCheck = /^[+]?\d+$/;
//     let inp = modalPhone.value;
//     if (inp.match(phoneCheck) && inp.length < 13 && inp.length > 11) {
//       telLibrary.phone.push({number:inp});
//       var jsonModal = JSON.stringify(telLibrary);
//       console.log(jsonModal);
//       var request = new XMLHttpRequest();
//       request.open("POST", "server.php");
//       request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//       request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200){
//           telLibrary.innerHTML = request.responseText;
//       }
//       };
//       request.send(jsonModal);
//     } else {
//       console.log("Нужно пройти проверку");
//     }
//   });

//  // Contact Form
//   inputForm[0].addEventListener('mouseleave', () => {
//     var mailCheck = /.+@.+\..+/i ;
//     let minp = inputForm[0].value;
//     if (minp.match(mailCheck) && minp.length < 30 ) {
//       contactLibrary.mail.push({ mail : minp});
//       var jsonContact = JSON.stringify(contactLibrary);
//       console.log(jsonContact);
//       var request = new XMLHttpRequest();
//       request.open("POST", "server.php");
//       request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//       request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//           contactLibrary.innerHTML = request.responseText;
//         }
//       };
//       request.send(jsonContact);
//     }
//   });

//   inputForm[1].addEventListener('input', () => {
//     var phoneCheck2 = /^[+]?\d+$/;
//     let minp2 = inputForm[1].value;
//     if (minp2.match(phoneCheck2) && minp2.length < 13 && minp2.length > 11) {
//       contactLibrary.phone.push({ number : minp2});
//       var jsonContact = JSON.stringify(contactLibrary);
//       console.log(jsonContact);
//       var request = new XMLHttpRequest();
//       request.open("POST", "server.php");
//       request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//       request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//           contactLibrary.innerHTML = request.responseText;
//         }
//       };
//       request.send(jsonContact);
//     } else {
//       console.log("Нужно пройти проверку");
//     }
//   });









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