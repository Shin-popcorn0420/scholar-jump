$(function () {
  $('header a').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
  });
  $('#g-nav a').click(function(){
    $(".hamburger").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
  });
  $('#g-nav .batsu').click(function(){
    $(".hamburger").removeClass('active');
    $("#g-nav").removeClass('panelactive');
  });
});
(function() {
  const fh = document.getElementById('fixed-header');
  const isUp = (function() {
    const scrollElement = document.scrollingElement;
    let flag, prePoint, scrollPoint;
    return function() {
      scrollPoint = scrollElement.scrollTop;
      flag = prePoint > scrollPoint ? true : false;
      prePoint = scrollPoint;
      return flag;
    }
  }());

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      if (isUp()) {
        fh.classList.remove('is-show');
      } else {
        fh.classList.add('is-show')
      }
    } else {
      fh.classList.remove('is-show');
    }
  })
}());
