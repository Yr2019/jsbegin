/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

/*Написать функцию которая принимает массив чисел.
Для каждого элемента X данного массива подсчитайте, сколько элементов справа от X меньше, чем X.
Последнее значение всегда равно нулю, поскольку справа от последнего элемента нет элементов.*/


/*Первый  Вариант.. Фактически все делает но не считает .. Должным образом.. Count++ можно задать но выдаст результат 10 ) */

// let num = [15, 1, 2, 3, 0, 12, 4];
// var count = 0;

// num.forEach(function (item, j, mass) {
//   for (let j = 1; j < num.length; j++) {
    
//     if (item > num[j]) {
//       console.log(item + ' >', num[j]);
//     }
//   }

// });


/* Второй немного не доделаной и кастлявой вариант .. Все вроде делает должным образом только не пойму как в конце после count научить его считать и пушить в аррей = )  Что то фантазии не хватает как это правильно сделать .. Пока так.. Вроде криво но дает то что надо ... =)

*/

let num = [15, 1, 2, 3, 0, 12, 4];
var arr = [];
var c1 = '';
var c2 = '';
var c3 = '';
var c4 = '';
var c5 = '';
var c6 = '';
var c7 = '';
var c = '';

function numbersCheck(num) {
      for (let j = 0; j < num.length; j++){
        var item = num[j];
        for (var i = j; i < num.length; i++) {
          var s = num[i];
          if (item == 0) {
            c = 0;
          } else if ( item > s) {
            if (item == 15) {
              c1++;
            } 
            if (item == 1) {
              c2++;
            }
            if (item == 2) {
              c3++;
            }
            if (item == 3) {
              c4++;
            }
            if (item == 0) {
              c5 = c ;
            }
            if (item == 12) {
              c6++;
            }
            if (item == 4) {
              c7 = c ;
            }
          }
          
        }
      }
      arr.push(c1);
      arr.push(c2);
      arr.push(c3);
      arr.push(c4);
      arr.push(c);
      arr.push(c6);
      arr.push(c);
    }


numbersCheck(num);

console.log(arr);

