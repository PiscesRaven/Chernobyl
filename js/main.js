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

function openNtc(e, fetchDom) {
  console.log(fetchDom)
  $(e).toggleClass("active");
  $(DOM(fetchDom)).slideToggle();
}