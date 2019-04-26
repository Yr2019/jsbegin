/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/

let menu = document.querySelector('.menu'),
  li = document.getElementsByTagName('li'),
  body = document.getElementsByTagName('body'),
  titleText = document.querySelector('#title').textContent,
  title = document.querySelector('#title'),
  adv = document.querySelector('.adv'),
  column = document.querySelectorAll('.column'),
  answer = document.querySelector('#prompt');

menu.insertBefore(li[1], li[3]);

let newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Пятий пункт"));
newLi.classList.add('menu-item');
menu.appendChild(newLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let result = "Мы продаем только".slice(0, 17) + " подлинную " + "технику Apple";
title.textContent = result;

// adv.style.display = "none";
column[1].removeChild(adv);

let question = prompt("Какое у Вас отношение к технике apple?", '');
answer.textContent = question;