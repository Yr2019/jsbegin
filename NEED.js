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