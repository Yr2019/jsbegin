$(document).ready(function () {
  $('.list-item:eq(2)').on('click', function () {
    $('image:even').fadeToggle('slow');
  });

});