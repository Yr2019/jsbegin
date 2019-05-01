// /*jshint -W030*/
// /*jshint -W014*/
// /*jshint expr:true*/

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














