/*jshint -W030*/
/*jshint expr:true*/

let num = 50;

// if (2*4 == 8){
//   console.log("Верно!");
// } else {
//   console.log("Не Верно");
// }

// if (num < 49) {
//   console.log("Не Верно!");
// } else if (num > 100){
//   console.log("Много");
// } else {
//   console.log("Верно!");
// }

// (num == 50) ? console.log('Верно!') : console.log('Не Верно!'); // оператор тернард (Есть еще бинарный и унарный);

// switch (num) {
//   case num < 49:
//     console.log('Неверно!');
//     break;
//   case num > 100:
//     console.log("Много!");
//     break;
//   case num > 80:
//     console.log("Все еще Много!");
//     break;
//   case 50:
//     console.log('Верно!');
//     break;
//   default:
//     console.log("Что-то пошло не так!");
//     break;
// }

// while (num < 55) {
//   console.log(num);
//   num++;
// }

do  {
  console.log(num);
  num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6){
    break;
  }
  console.log(i);
}