/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint expr:true*/

// function User(name, age) {
//   this.name = name;
//   //this.age = age;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110){
//       userAge = age;
//     } else {
//       console.log('Недопустимое значения');
//     }
//   };
// }

// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.userAge);
// console.log(ivan.getAge());

// ivan.setAge(30);
// console.log(ivan.getAge());

// ivan.say();

// let number = 1;

// (function() {
//   let number = 2;
//   console.log(number);
//   return console.log(number + 3);
// }());  // Первый способо создания модуля

// console.log(number);


// let user = (function () {  
//     let privat = function () {
//       console.log('I am privat');
//     };

//     return {
//       sayHello : function () {
//         console.log('Hello');
//       }
//     };
// }());  // Второй способо создания модулей

// console.log(user);
// console.log(user.sayHello());

let user = (function () {
  let privat = function () {
    console.log('I am privat');
  };
  let sayHello = function () {
    console.log('Hello');
  };
  return {
    sayHello: sayHello
  };
}()); // Третий способ создания модулей

console.log(user);
console.log(user.sayHello());