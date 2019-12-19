$(window).scroll(function () {
  if ($(window).width() > 0) {
    if ($(this).scrollTop() > 10) {
      $('header').addClass('boxshow');
      $('.scroll_show').fadeIn(500);
    } else {
      $('header').removeClass('boxshow');
      $('.scroll_show').fadeOut(100);
    }
  }
});
$('.drawer').drawer();

$(document).on('click', '.openNtc', e => {
  e.preventDefault(e)
  $('.openNtc + ul').children('div').slideUp()
  if ($(e.target).next('ul').children('div').is(':visible')) return
  $(e.target).next('ul').children('div').slideDown()
})

window.addEventListener('resize', function(event){
  if(window.innerWidth <= 768 ){
    $('.openNtc + ul > div').slideUp()

  }
  // do stuff here
});