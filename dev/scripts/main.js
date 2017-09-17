const portfolio = {};
portfolio.contrastNav = () => {
  let scrollStart = 0;
  let headerHomeChange = $('#home').offset().top;
  let headerAboutChange = $('#home').offset().top;
  let aboutContactChange = $('#about').offset().top;
  let skillChange = $('#skills').offset().top;
  let contactChange = $('#contact').offset().top;

  $(document).scroll( () => {
    scrollStart = $(document).scrollTop();
    if ((scrollStart > headerHomeChange+70 && scrollStart < headerHomeChange+450)) {
      $(".header__nav li:first-child > a").addClass("contrast");
      if (scrollStart > headerHomeChange+125){        
        $(".header__nav li:nth-child(2) > a").addClass("contrast");
      }
    }
    else if (scrollStart > aboutContactChange+125 && scrollStart < aboutContactChange+225){        
      $(".header__nav li:last-child > a").addClass("contrast");
    }
    else if ((scrollStart > skillChange-100 && scrollStart < skillChange+775) || (scrollStart > contactChange-100)) {
      $(".header__nav li > a").addClass("contrast");
      $(".hamburger span").addClass("contrast");

      if ((scrollStart > contactChange+250 && scrollStart < contactChange+350) || (scrollStart > contactChange+400 && scrollStart < contactChange+500) || (scrollStart > contactChange+550 && scrollStart < contactChange+750)) {
        $(".header__nav li:nth-child(2) > a").removeClass("contrast");
        $(".header__nav li:nth-child(3) > a").removeClass("contrast");
      }
    }
    else {
        $(".header__nav li > a").removeClass("contrast");
        $(".hamburger span").removeClass("contrast");
    }
  });
}

portfolio.hamburgerClick = () => {
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.header__nav > ul').toggleClass('open');
    $("nav").show();
  });
}

portfolio.flickity = () => {
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
}

portfolio.init = () => {
  portfolio.flickity();
  portfolio.hamburgerClick();
  portfolio.contrastNav();
}

$(()=>{
  portfolio.init();  
});