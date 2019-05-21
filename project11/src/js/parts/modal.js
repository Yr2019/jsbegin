function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    dbtn = document.querySelectorAll('.description-btn');

  let allInfo = [...dbtn, more];

  for (var i = 0; i < allInfo.length; i++) {
    allInfo[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }
}

module.exports = modal;