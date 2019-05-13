function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  return number % 2 === 0;
}
let arr = [];
console.out(arr.every(isEven));
console.out(arr.some(isEven));

let appData, blocks;
appData.expenses[Object.keys(appData.expenses)[1]]; // Получить дание с массива по индексу ключа (невідомого )
blocks = document.querySelectorAll("div[class*='value']"); //  Получить елемент по шаблону ***value
$(".menu-item-has-children").append("<button class='menuPlus menuPlus-off' id='mPlus'>+</button>"); //Додає в menu - item - has - children за допомогою.append в хтмл код кнопку з класами
let dbtn = [...document.querySelectorAll('.description-btn')]; // Добавить в массив и разгорнуть все кнопки в массиве;

function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
} // Функция рандом чисел от мин до макс


// Функция сохранения в текстовый файл JSON
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