$(()=>{
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    accessibility: true,
    setGallerySize: false,
    cellSelector: '.carousel-cell',
    imagesLoaded: true,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false
  });

  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.header__nav > ul').toggleClass('open');
    $("nav").show();
  });
});