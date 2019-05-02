/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);  // очистка или остановка таймера

// function sayHello() { 
//   console.log("Hello World");
// }

// let timerId = setTimeout(function log() {  
//   console.log("Hello");
//   setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;

  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function (event) {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('good');
//   }
// });

// btnBlock.addEventListener('click', function (event) {
//   if (event.target && event.target.classList.contains('first')) {
//     console.log('good');
//   }
// });

btnBlock.addEventListener('click', function (event) {
  if (event.target && event.target.matches('button.first')) {
    console.log('good');
  }
});