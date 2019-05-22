function form() {
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
          this.name = 'mail';
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
          if (this.name == 'phone') { } else { this.name = 'tel'; }
          elem.insertBefore(statusMessage, elem.children[2]);
          statusMessage.innerHTML = message.error;
          this.value = '+' + this.value.replace(/[^\d]/g, '').slice(0, 11);
          if (this.value.length === 12) {
            tel = true;
            statusMessage.innerHTML = message.check;
          } else {
            statusMessage.innerHTML = message.error;
          }
        }
        if (countInput === 1 && tel === true) {
          isValid = true;
        }
        if (tel === true && email === true) {
          isValid = true;
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

}

module.exports = form;