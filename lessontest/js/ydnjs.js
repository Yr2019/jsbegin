/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

// function foo(num) {
//   console.log("foo: " + num);
//   data.count++;
// }

// var data = { count: 0 };

// for (var i = 0; i < 10; i++){
//   if (i > 5){
//     foo(i);
//   }
// }

// console.log(data.count);

// /*  Правила формирования This */ 
// // 1 Default binding  Связывание по умолчанию

// //"use strict";  // При use strict в Es5 Дана модель вызова функции выдаст undefined i eror .. 

// function foo() {
//   console.log(this); //  -- this всегда равен window при при Default binding 
//   console.log(this.a);
// }

// var a = 2;  // переменная а знаходитья в глобальном обекте window

// foo(); // вызов функции call site при Default binding 

// // При таком вызове и использовании use strict будет работать
// (function () {
//   "use strict";
//   foo();
// })();

// 2 Implicit Binding - Скрытое связивыные

// function foo() {
//   console.log(this); //  -- this всегда равен обекту в даном случае obj
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// obj.foo();


// //  При вложенности обьектов один в другой .. береться контекст последнего обекта
// function foo() {
//   console.log(this); //  -- this всегда равен обекту в даном случае obj2
//   console.log(this.a);
// }

// var obj2 = {
//   a: 42,
//   foo: foo
// };

// var obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo();

// 3 Implicity Lost - потеря связывания с обьектом


// function foo() {
//   console.log(this); //  -- this всегда равен обекту в даном случае obj
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var bar = obj.foo;  // создаем псевдонним (allias) на функцию

// var a = "oops, global"; // a являеться глобальной переменной

// bar();

// Второй пример

// function foo() {
//   console.log(this); //  -- this всегда равен обекту в даном случае obj
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var a = "oops, global"; // a являеться глобальной переменной

// setTimeout(obj.foo, 100); // oops, global -- потому что вызиваеться не obj.foo ..  а --  fn();  // это наш call-site

// function setTimeout(fn, delay) { // fn - наша функция, delay - задержка // ждем миллисекунд
//   fn();  // это наш call-site -- место в коде где функция вызиваеться
// }


// 3 Explicit Binding - Явное связиваные

// Для того чтобы изменить привязку обекта к this, можно использовать функции call i apply.. Данные методы задают this только на момент текущого выполнения

// fn.apply(obj[, array]);
// fn.call(obj[, param1[, param2[, ]]]);

// function foo() {
//   console.log(this);
//   console.log(this.a);
// }

// var a = "global";

// var obj = {
//   a: 2
// };

// foo( obj); // global

// foo.call( obj );  // 2
// foo.apply( obj ); // 2

// Трюк при использовании explicit binding  = Hard Binding =  Жесткая привязка функции к обякту .. Не важно как вызивать bar всегда будет 2 

// function foo() {
//   console.log(this.a);
// }

// var obj = { a: 2 };

// var bar = function () {
//   foo.call( obj );
// };

// bar(); // 2
// setTimeout( bar, 100 ); // 2
// bar.call( window); // 2

// function foo(something) {
//   return this.a + something;
// }

// var obj = {
//   a: 2
// };

// var bar = function () {
//   return foo.apply(obj, arguments);
// };

// var b = bar( 3 ); 
// console.log( b ); // 5


//  Hard Binding Создаем хелпер

// function bind(fn, obj) {   // Хелпер
//   return function() {  // Функция создает замыкание
//     return fn.apply(obj, arguments );
//   };
// }


// function foo(something) {
//   return this.a + something;
// }

// var obj = { a: 2 };

// var bar = bind( foo , obj); // связиваем foo и obj

// console.log( bar( 3 ));  //5


//  ES5  Function.prototype.bind\

// function foo(something) {
//   return this.a + something;
// }

// var obj = { a: 2 };

// var bar = foo.bind( obj);

// var b = bar ( 3 );

// console.log(b); // 5


// 4. new Binding
// new - вызов функции конструктора
// Когда вызивается конструктор .. следующие действия выполняються автоматически
// --на лету создаеться новый обект
// -- прототип функции конструктора тоже становиться прототипом нового обьекта
// -- этот же обект становиться this для вызова данного конструктора
// -- функция вызванная с оператором new автоматически вернет вновь созданный обьект в конце исполнения

// function foo(a) {
//   this.a = a;
//   console.log(this);  
//   console.log(this.a);
// }

// var bar = new foo( 2 );
// console.log(bar.a);
// console.log(bar);

// Несколько правил в одном call-site

// Default binding имеет самый низкрий приоритет
// Explicit binding ( call, apply) выше по приоритету чем implicit binding ( obj.foo());
// new Binding выше по приоритету чес implicit binding ( obj.foo());
// Explicit binding ( call , apply ) и new binding не могут существовать вместе

// Explicit binding  сильнее implicit binding

// function foo() {
//   console.log(this.a);
// }

// var obj1 = { a: 2, foo: foo};

// var obj2 = { a: 3, foo: foo };

// obj1.foo(); //2
// obj2.foo(); //3

// obj1.foo.call( obj2 ); //3
// obj2.foo.call( obj1 ); //2

// Все вместе

// function foo(a) {
//   this.a = a;
// }

// var obj1 = { foo: foo };
// var obj2 = {};

// obj1.foo( 2 );
// console.log(obj1.a); // 2

// obj1.foo.call(obj2, 3 );
// console.log(obj2.a); // 3 

// var bar = new obj1.foo( 4 );
// console.log( obj1.a ); // 2
// console.log( bar.a ); // 4


// Lexical this и стрелочные функции
// При использовании стрелочных функций => Es6, привязка this не подчиняеться нашим 4 правилам.. Вместо этого, будет использоваться this из родительского Lexical Scope


function foo() {
  return () => {
    console.log(this);
    console.log(this.a);
  };
}

var obj1 = { a: 2 };
var obj2 = { a: 3 };

var bar = foo.call( obj1);
bar.call( obj2 ); // 2, a не 3

// Полезное применение данного приема

function foo() {
  setTimeout(() =>{
    console.log(this.a);
  },100);
}

var obj = { a: 2 };

foo.call( obj ); // 2 