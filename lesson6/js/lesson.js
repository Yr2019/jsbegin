/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/


let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//   alert('fds');
// };

// btn[0].addEventListener('click',function() {
//     alert('Вы нажали на первую кнопку');
// });

// btn[0].addEventListener('click', function () {
//   alert('Вы опять нажали на первую кнопку');
// });

// btn[0].addEventListener('mouseenter', function () {
//   alert('Вы навели на первую кнопку');
// });

// btn[0].addEventListener('click', function (event) {
//   console.log('Произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

// btn[0].addEventListener('click', function (event) {
//   let target = event.target;
//   //target.style.display = 'none';
//   console.log(event);
//   target.style.color = 'red';
//   console.log('Произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

// wrap.addEventListener('click', function() {
//   console.log('Произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

// link.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('Произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

btn.forEach(function(item) {
  item.addEventListener('mouseleave', function(){
    console.log('Вышли');
  });
});