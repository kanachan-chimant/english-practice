$(function(){
  $('#slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '120px',
    infinite: true,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {breakpoint: 1500 , settings:{
        slidesToShow: 5,

      }},
      {breakpoint: 1179 , settings:{
        slidesToShow: 3,
      }},
      {breakpoint: 720 , settings:{
        slideToShow: 1,

      }}],

  });

  $('#text-slider').slick({
    slidesToShow: 1,
    fade: true,
    infinite: true,
    draggable: true,
    asNavFor: '#img-slider',
    arrows: false,

  });

  $('#img-slider').slick({
    prevArrow: '<img src="C:/Users/81902/OneDrive/デスクトップ/英会話　模写/img/arrow-slide_l.png" class="slick-btn prev-btn">',
    nextArrow: '<img src="C:/Users/81902/OneDrive/デスクトップ/英会話　模写/img/arrow-slide_r.png" class="slick-btn next-btn">',
    focusOnSelect: true,
    slideToShow: 7,
    centerMode: true,
    centerPadding: '430px',
    infinite: true,
    draggable: true,
    asNavFor: '#text-slider',
    responsive: [
      {breakpoint: 1040,settings:{
        slidesToShow: 5,
        centerPadding: '40px',
      }},
      {breakpoint: 622,settings:{
        slidsToShow: 3,
        centerPadding: '225px',
      }},
      {breakpoint: 580,settings:{
        slidsToShow: 3,
        centerPadding: '205px',
      }},
      {breakpoint:540,settings:{
        slidesToShow:3,
        centerPadding: '90px',
      }},
      {breakpoint:500, settings:{
        slidesToShow:3, centerPadding:'10px',
      }},
      {breakpoint: 447, settings:{
        slidesToShow: 3,
        centerPadding: '0px',
      }},
      {breakpoint: 400,settings:{
        slidesToShow: 3,
        centerPadding: '10px',
      }},
      {breakpoint: 365,settings:{
        slidesToShow: 1,
        centerPadding: '70px',
      }}],

  });

$('#up').click(function(){
  $('html,body').animate({'scrollTop':'0'},'slow');
});

$(window).scroll(function(){
  var offset =  $('.top-wrapper').offset().top;
  if($(this).scrollTop()>offset){
    $('#up').fadeIn();
  }else{
    $('#up').fadeOut();
  }
});

































});
