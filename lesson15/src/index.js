/*jshint -W117*/
let myModule = require('./myModule');

let NewModule = new myModule();


console.log(NewModule.hello());
console.log(NewModule.goodbye());