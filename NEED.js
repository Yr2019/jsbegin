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