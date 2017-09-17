const portfolio = {};
portfolio.contrastNav = () => {
  let scrollStart = 0;
  let headerHomeChange = $('#home').offset().top;
  let headerAboutChange = $('#home').offset().top;
  let skillChange = $('#skills').offset().top;
  let contactChange = $('#contact').offset().top;

  $(document).scroll( () => {
    scrollStart = $(document).scrollTop();    
    console.log(scrollStart);
    if ((scrollStart > headerHomeChange+70 && scrollStart < headerHomeChange+450)) {
      $(".header__nav li:first-child > a").addClass("contrast");
    }
    else {
      $(".header__nav li:first-child > a").removeClass("contrast");
    }

    if ((scrollStart > skillChange-100 && scrollStart < skillChange+775) || (scrollStart > contactChange-100)) {
      $(".header__nav li > a").addClass("contrast");
    }
    else {
        $(".header__nav li > a").removeClass("contrast");
    }
    
    


    if (scrollStart > skillChange.top-100) {
      $("li > a").css("color", "white");
      $(".hamburger > span").css("background-color", "white");
    }
  });
}

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
  portfolio.contrastNav();  
});