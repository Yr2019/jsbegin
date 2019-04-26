/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

let options = {
  width : 1024,
  height : 1024,
  name : "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border : "black",
    bg : "red"
};

delete options.bool;

console.log(options);

for (let key in options){
  console.log('Свойство ' + key + ' имеет значения ' + options[key]);
}

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");

console.log(arr);

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
  console.log(i + ': ' + item + " (массив : " + mass + ')');
});

let mass = [1,3,5,6,7];

for (let key in mass){
  console.log(key);
}

for (let key of mass) {
  console.log(key);
}

let ans = prompt("", ""),
    arra = [];

    arra = ans.split(',');
    console.log(arra);

let array = ['aaww', 'zzz', 'zzdf', 'erfw'],
    ing = array.join(', ');
    ing = array.sort();
    console.log(ing);

let arrN = [1,15,4],
    iN  = arrN.sort(compareNum);
    console.log(iN);

function compareNum(a,b) {
  return a-b;
}

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


// to String

String(3432);
console.log(typeof(String(4)));

// to Number

Number('3432');
console.log(typeof (Number('543')));

// to Boolean

Boolean('3432');
console.log(typeof (Boolean('543')));

console.log(typeof ((!!'543')));