$(document).ready(function(){
  "use strict";

  function animate(){
    $('.animate').each(function(){

      var posItem;
      if ($(window).width() > 767) {
        posItem = $(this).offset().top + 200;
      } else {
        posItem = $(this).offset().top + 50;
      }

      if(posItem > $(window).scrollTop() && posItem < $(window).scrollTop() + $(window).height()){
        $(this).addClass('active');
        $(this).addClass($(this).data("animate"));
      }
    });
    $('.animate-now').each(function(){
      var posItem = $(this).offset().top;

      if(posItem > $(window).scrollTop() && posItem < $(window).scrollTop() + $(window).height()){
        $(this).addClass('active');
        $(this).addClass($(this).data("animate"));
      }
    });
  }

  // Fire animations
  animate();
  $(window).on('scroll', function(){
    animate();
  });

  // Also can pass in optional settings block
  if ( $(window).width() > 767 ) {

    var xara = new Rellax('.xara', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
    var mascote = new Rellax('.mascote', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
    var demoin = new Rellax('.demoin', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
  }

  // video modal
  $('.header-btn').on('click', function(e){
    e.preventDefault();
    $('.video-modal').addClass('active');
    $('.video-iframe').attr('src', 'https://player.vimeo.com/video/260457975?autoplay=1')
  })

  $('.modal-close, .modal-bg').on('click', function(e){
    e.preventDefault();
    $('.video-modal').removeClass('active');

    $('.video-iframe').attr('src', '');
  })


  // Form mask
  $(".form-phone")
  .mask("(99) 9999-9999?9")
  .focusout(function (event) {
    var target, phone, element;
    target = (event.currentTarget) ? event.currentTarget : event.srcElement;
    phone = target.value.replace(/\D/g, '');
    element = $(target);
    element.unmask();
    if(phone.length > 10) {
      element.mask("(99) 99999-999?9");
    } else {
      element.mask("(99) 9999-9999?9");
    }
  });


  // Send form
  $('.form').submit(function(e) {

    e.preventDefault();

    $('.form').addClass('wait');
    $("body").css("cursor", "progress");

    var data = $(this).serialize();
    var url = 'https://fast-depths-50279.herokuapp.com/api/web/form';

    $.post(url, data, function(data){
      $('.footer-form').addClass('form-success');
      $('.form-input').val("");
      $('.form').removeClass('wait');
      $("body").css("cursor", "default");
    }).fail(function(data){
      $('.footer-form').addClass('form-fail');
      $('.form').removeClass('wait');
      $("body").css("cursor", "default");
    });

  });


});
