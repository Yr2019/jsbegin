/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint expr:true*/

let options = {
  width: 1366,
  height: 768,
  background: 'red',
  font: {
    size: '16px',
    color: '#fff'
  }
};

//console.log(JSON.stringify(options));   // Перевести в JSON
// console.log(JSON.parse(JSON.stringify(options))); // Распарсить в  обекты

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  //status
  //statusText
  //responseText  / response
  //readyState

  request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd;
    } else {
      inputUsd.value = "Что-то пошло не так!";
    }
  });

});