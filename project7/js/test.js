// let a = [];
// let c = [12, 'Hello', true];

// let out = document.getElementById('out');
// let str = '';

// for (let i = 0; i < c.length; i++){
//   if (c[i] !== undefined) { str += i+ ' - ' + c[i]+'<br>'; }
// }

// out.innerHTML = str;

// let c = [12, 'Hello', true];
//   c.push(15);
//   c.pop();  
//   c.shift(33);
//   c.unshift(453);
//   c.split(','); // trim  метод удаления ненужных пробелов
//   c.join('-');
//   c.slice(1, 3);  // Получить часть массива от 1 до 3

// let a = [12, 'Hello', true, 15, 123, 432, 534, 63, 65456,  654, false];
// let b = a[a.length - 1];
// console.log(b);

// let tempC = [4, 2];
// let CA = 0;
// for (let k = 0; k < tempC.length; k++){
//   CA +=tempC[k];
// }

// console.log(CA / tempC.length);
// console.log( Math.min.apply(null, tempC));
// console.log( Math.max.apply(null, tempC));

// let temp2 = [
//   [-4, 0, 3],
//   [-5, -1, 8],
//   [0, 3, 6],
// ];

// for (let k = 0; k < temp2.length; k++){
//   CA = 0;
//   for (let l = 0; l < temp2[k].length; l++) {
//     CA += temp2[k][l];
//   }
//   console.log(CA / temp2[k].length);
//   console.log(Math.min.apply(null, temp2[k]));
//   console.log(Math.max.apply(null, temp2[k]));
// }

// let a = [3, 4 , 5];
// // Умножить каждый елемент массива на 2 6 -8 -10
// let b = [];
// for (let i = 0; i < a.length; i++){
//   b[i] = a[i] * 2;
// }
// console.log(b);

// // let b = a.map(function (current value, index, array) {
// //   return af;
// // });


// // Умножить каждый елемент массива на 2 
// let c = a.map(function (x) {  
//   return x * 2; 
// });
// console.log(c);

// let a = [ 3,-12, 0, 4, 5, -8];

// let b = [];

// for (let i = 0; i < a.length; i++){
//   if (a[i]>=0) {b.push(a[i]);}
// }

// console.log(a);
// console.log(b);

// Filter 
// let c = a.filter(function (currentvalue, index, array) { return 1 });

// let a = [3, -12, 0, 4, 5, -8];
// let c = a.filter (function (x, y) {
//   return y % 2 == 0;  // только четные индексы 
// });

// console.log(c);

// let summ = 0;

// for (let i = 0; i <= 5000000; i++){
//   summ += i;
// }
// console.log(summ);

// let summ2 = 0;
// let j = 0;

// while(j <= 5000000){
//   summ2 += j;
//   j++;
// }

// console.log(summ2);

// let a = [];

// for (let i = 0; i <= 10000; i++){
//   a.push(i);
// }

// console.log(a);

// let arr = [3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) { console.log('yes');}
// }

// let a = arr.every(function (b) {
//   return b<5;
// });

// console.log(a);

// Reduce 

// let arr = [20, 4, 5, 9];

// // // Свертывания массивов или получения суммы массива
// let a = arr.reduce(function(prevValue, currentValue, index) {
//   console.log('PrevValue ' + prevValue);
//   console.log('index ' + index);
//   console.log('CurrentValue ' + currentValue);
//   return prevValue + currentValue;
// });

// console.log(a);

// let arr = [20, 4, 5, 9];

// let a = arr.reduceRight(function (prevValue, currentValue, index) {
//   console.log('PrevValue ' + prevValue);
//   console.log('index ' + index);
//   console.log('CurrentValue ' + currentValue);
//   return prevValue + currentValue;
// })
// console.log(a);

// Функци и Аргументы

// let t = 9;
// function showTemp() {
//     if (t>0) { console.log("Выше нуля");}
//     else if (t<0) { console.log("Ниже нуля");}
//     else { console.log("Равна нулю"); }
// } 
// showTemp();


// function summa(a = 0 , b = 5) { // b = 5 параметр по умолчанию  // только в ES6 будет работать
//   console.log(a+b);
// }

// summa(41);


// function getSumm() {
//   console.log(3*5);
// }

// getSumm();

// let w = function () {
//   console.log(4*12);
// };

// w();

// let z = function test() {
//   console.log(5*7);
//   //test ();  Вызов функции тест до бесконечности.. 
// };

// z();

// function summ() {
//   console.log("Hello " + "World");
// }

// summ();

// // Es6 стрелочная функция

// let myFunc = (z, y) => {
//   console.log("work");
//   console.log(z*3*y);
// };

// myFunc(4, 5);

// let a = (z, y) => z*3*y;
// console.log(a(4,5));

function first(y) {
  console.log(1);
  y();
}

function second(a, b) {
  console.log(a*b);
}

//first(second);
//second(4, 7);


// first(function() {
//   second(5, 7);
// });  // Вызов функции каллбек с параметрамы


let number = 20;
let  isValid = false;

function sendForm(elem) {
  elem();
  console.log("sendForm :" + number + isValid);
}

function checkForm(elem) {
  if ( number >= 5 ) {
    isValid = true;
    //console.log("checkForm :" + number + isValid);
  }
}

sendForm(function () {
  checkForm(number);
});
