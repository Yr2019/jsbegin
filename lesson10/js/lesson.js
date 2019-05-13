/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint expr:true*/

let name = "Ivan",
    age = 30,
    mail = 'example.ru';

  
//document.write('Пользователю ' + name + ' ' + age + '  лет.  Его почтовый адрес: ' + mail);
document.write(`Пользователю ${name} ${age} лет.  Его почтовый адрес: ${mail}`);  // Интрерпаляция

function makeArray() {
  var items = [];
  for (let i = 0; i < 10; i++){
    var item = function() {
      console.log(i);
    };
    items.push(item);
  }
  return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
  console.log(this);
};

//fun();

let obj = {
  number: 5,
  sayNumber: function() {
    let say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let show = () => {
    console.log(this);
  };
  show();
});


// ES5
// function calcOrDouble(number, basis) {
//   basis = basis || 2; //  Не официальная проверка на basis равно 2 ;
//   console.log(number*basis);
// }

// calcOrDouble(3,5);
// calcOrDouble(6);

// ES6

function calcOrDouble(number, basis = 2) {
   console.log(number * basis);
}

calcOrDouble(3,5);
calcOrDouble(6);

class Reactangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  calcArea(){
    return this.height * this.width;
  }
}

const square = new Reactangle(10, 10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

let numbers = [2, 5, 7];

log(...numbers);
