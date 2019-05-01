// /*jshint -W030*/
// /*jshint -W014*/
// /*jshint expr:true*/
// /*
// Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'array'
// и 'func'
// 'array' - массив
//   'func' - фильтрующая функция
// Условия:
//   Если фильтрующая функция вернет 'true'
// хотя бы для одного элемента массива, то и сама 'isSomeTrue'
// вернет 'true'
// Если фильтрующая функция вернет 'false'
// для ВСЕХ элементов массива, то и сама 'isSomeTrue'
// вернет 'false'
// Нельзя использовать функции для работы с массивами, методы и циклы.

// пример:
//   let numbers = [1, 2, 4, 5, 6, 7, 8],
//     someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
//     noNumbers = ['здесь', 'нет', 'чисел'];

// function isNumber(val) {
//   return typeof val === 'number';
// }

// console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
// */



let numbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = ['fds', 2, 'Hello', 4, 5, 'world', 6, 7, 8],
  noNumbers = ['sdf', 'нет', 'чисел'];


function isSomeTrue(array, func) {
    var check = array.some(func);
    console.log(check);
}

function func(value, array) {
  var result = false;
  if (typeof (value) === "number") {
    result = true;
  }
  return result;
  
}

isSomeTrue(numbers, func);
isSomeTrue(someNumbers, func);
isSomeTrue(noNumbers, func);














