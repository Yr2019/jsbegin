// /*jshint -W030*/
// /*jshint -W014*/
// /*jshint expr:true*/


// // Стандарт ES5
// // function User(name, id) {
// //   this.name = name;
// //   this.id = id;
// //   this.human = true;
// //   this.hello = function() {
// //     console.log('Hello! ' + this.name);
// //   };
// // }

// // User.prototype.exit = function(name) {
// //   console.log('Пользователь ' + this.name + ' ушел');
// // };

// // let ivan = new User('Ivan', 25),
// //     alex = new User('Alex', 20);

// // console.log(ivan);
// // console.log(alex);

// // ivan.exit();

// // Стандарт ES6

// // class User {
// //   constructor(name, id){
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// //   }
// //   hello(){
// //     console.log(`Hello!  ${this.name}`);
// //   }
// //   exit(){
// //     console.log(`Пользователь ${this.name} ушел`);
// //   }
// // }
// // let ivan = new User('Ivan', 23);
// // let alex = new User('Alex', 20);
// // console.log(ivan);
// // console.log(alex);
// // ivan.hello();
// // alex.hello();

// // ivan.exit();


// // function showThis(a, b) {
// //   console.log(this);
// //   function sum() {
// //     console.log(this);
// //     return a + b;
// //   }
// //   console.log(sum());
// // }

// // showThis(4, 5);
// // showThis(5, 5);


// // let obj = {
// //   a: 20,
// //   b: 15,
// //   sum: function() {
// //     console.log(this);
// //     function shout() {
// //       console.log(this);
// //     }
// //     shout();
// //   }
// // };
// // obj.sum();

// let user = {
//   name: "John"
// };

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//   return this * number;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));
// // 1 Просто вызов функции - window / undefined
// // 2 Метод обьекта - this = обьект
// // 3 Конструктор (new) -- this = новый созданный обьект
// // 4 Указанные конкретного контекста - call, apply, bind

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  console.log(this);
  this.style.backgroundColor = 'red';
  function showThis() {
    console.log(this);
  }
  showThis();
});