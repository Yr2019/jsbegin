let soldier = {
  health : 400,
  armor : 150
};

let john = {
  health : 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);