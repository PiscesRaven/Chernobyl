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

function DOM(e) {
  var result = document.querySelectorAll(e);
  return result;
}

$(document).on('click', '.openNtc', e => {
  e.preventDefault(e)
  $(DOM('.openNtc')).removeClass("active")
  $('.openNtc + ul').children('div').slideUp()
  if ($(e.target).next('ul').children('div').is(':visible')) return
  $(e.target).next('ul').children('div').slideDown()
  $(e.target).toggleClass("active");


})
