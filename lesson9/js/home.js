// /*jshint -W030*/
// /*jshint -W014*/
// /*jshint expr:true*/

let age = document.getElementById('age');

function showUser(surname, name) {
  this.value = age.value;
  console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser('Chernov', 'Ivan');