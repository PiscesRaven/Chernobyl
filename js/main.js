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

function syncElement(obj1, obj2) {
  $(DOM(obj2)).html($(DOM(obj1)).html());
}

$(document).on('click', '.openNtc', e => {
  e.preventDefault(e)
  $(DOM('.openNtc')).removeClass("active")
  $('.openNtc + ul').children('div').slideUp()
  if ($(e.target).next('ul').children('div').is(':visible')) return
  $(e.target).next('ul').children('div').slideDown()
  $(e.target).toggleClass("active");


})


$(document).on('click', '.ques', e => {

  e.preventDefault(e)
  // 兩行寫法
  $(e.target).toggleClass('active').siblings('.ans').slideToggle();
  $(e.target).parent().siblings().find('.ques').removeClass('active').siblings('.ans').slideUp();
})

syncElement("#pc-info", "#mb-info")
syncElement("#provide1", "#provide2")
syncElement("#provide4", "#provide4")


// window.isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)