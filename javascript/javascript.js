/*------------------------------------------------
header　固定
------------------------------------------------*/


/*------------------------------------------------
dropdown　表示　カラー
------------------------------------------------*/
$(function(){
  $(".header-right-position__dropmenu").hide();
  $(".header-right__position").hover(function(){
    $(".header-right-position__dropmenu:not(:animated)",this).slideDown("fast");
  }, function(){
    $(".header-right-position__dropmenu",this).slideUp("fast");
  });
});

/*------------------------------------------------
slider
------------------------------------------------*/
$(function() {
	$('.slide__box').slick({
    autoplay: true,
    dots: true
  });
});

/*------------------------------------------------
prize
------------------------------------------------*/
$(function() {
	$('.prize__slide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: false,
  });
});
