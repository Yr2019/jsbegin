// "use strict";

window.onload = function (e) {
//   const test = 50;

//   const settings = {
//     a: 10,
//     b: 20,
//     c: 30
//   };

//   settings.a = 15;
//   settings.b = 1;

//   let marks = [2,4,6,64,3];


//   for (let m of marks){
//     console.log(m);
//   }

//   for (let m in marks) {
//     console.log(m);
//   }

// //   var item = document.querySelector('.items .item');

// //   item.onclick = activeItem;

// // };

// // function activeItem() {
// //   this.classList.toggle('item-active');
// // }
//   var items = document.querySelectorAll('.items .item');

//   // for (var i = 0; i < items.length; i++){
//   //   items[i].onclick = activeItem;
//   // }

//   function activeItem() {
//     this.classList.toggle('item-active');
//   }

//   setInterval(function() {  // Функция устанавиливает сет интервал с рандомным числом
//     var rand = mtRand(0, items.length - 1);
//     activeItem.call(items[rand]);  //  Передаем рандом число в this  
//   }, 500);

// function mtRand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1));
// }   // Функция рандом чисел от мин до макс

// console.log(mtRand(0, 20));

// for (var i = 0; i < items.length; i++){
//   items[i].onclick = function () {
//     fade(this, 1000, function () {
//       this.style.display = 'none';
//     });
//   };
// }
// // Функция скритыя елементов с коллбек
// function fade(elem, t, f) {
//   // кадров в секунду (по умолчанию 50)
//   var fps = 50;
//   // время работы анимации (по умолчанию 500мс)
//   var time = t || 500;
//   var steps = time / fps;
//   var op = 1;
//   var d0 = op / steps;

//   var callback = f || function () {};

//   var timer = setInterval(function () {
//     // изменение opacity
//     op -= d0;
//     elem.style.opacity = op;
//     steps--;
//     // если анимация окончена
//     if (steps === 0) {
//       // убираем интервал выполнения
//       clearInterval(timer);
//       // и убираем элемент из потока документа
//       callback.call(elem);
//     }
//   }, (1000 / fps));
// }

// let t1 = new Mytimer(100);
//     t1.run();

// function Mytimer(t) {
//   this.time = t;

//   this.tick = function () {
//     this.time--;
//     console.log(this.time);
//   };

//   this.run - function() {
//     setInterval(() => {
//       this.tick();
//     }, 1000);
//   };
// }


let items = document.querySelectorAll('.items .item');

for (let item of items){
  console.log(item);
  item.onclick = (e) => {
    this.classList.toggle('item-active');
  };
}
};

