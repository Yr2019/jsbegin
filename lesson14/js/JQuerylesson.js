/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint expr:true*/
$(document).ready(function () {
  $('.list-item:first').hover(function () { 
    $(this).toggleClass('active');
  });

  $('.list-item:eq(2)').on('click', function () {  
    $('image:even').fadeToggle('slow');
  });

  $('.list-item:eq(4)').on('click', function () { 
    $('.iname:odd').animate(
      {
        opacity: 'toggle',
        height: 'toggle'
      }, 3000
    );
  });
});

//document.querySelectorAll('.list-item').forEach();
//.classList 
// .addEventListener
//  $.ajax - fetch
// animate