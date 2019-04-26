/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

    console.log(box);
    console.log(btn);
    console.log(btn[0]);
    console.log(circle[2]);
    console.log(heart);

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';

    circle[0].style.backgroundColor = 'blue';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    for (let i = 0; i < heart.length; i++){
      heart[i].style.backgroundColor = 'blue';
    }

    heart.forEach(function(item, i, hearts) {
      item.style.backgroundColor = 'red';
    });

    let div = document.createElement('div'),
        text = document.createTextNode('Тут был я');

    div.classList.add('black');
    console.log(div);