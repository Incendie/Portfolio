const portfolio = {};

portfolio.contrastNav = () => {
  let scrollStart = 0;
  let headerHomeChange = $('#home').offset().top;
  let headerAboutChange = $('#home').offset().top;
  let aboutContactChange = $('#about').offset().top;
  let galleryChange = $('#gallery').offset().top;
  let inputNameChange = $('#formName').offset().top;
  let inputEmailChange = $('#formEmail').offset().top;
  let textareaChange = $('textarea').offset().top;
  let skillChange = $('#skills').offset().top;
  let contactChange = $('#contact').offset().top;
  let footerChange = $('footer').offset().top;
  const mq1200 = window.matchMedia("(max-width: 1200px)");
  const mq768 = window.matchMedia("(max-width: 768px)");

  // if (!mq768.matches){
  $(document).scroll(() => {
    scrollStart = $(document).scrollTop();
    if ((scrollStart > headerHomeChange + 70 && scrollStart < headerHomeChange + 450)) {
      if (!mq1200.matches) {
        $(".header__nav li:first-child > a").addClass("contrast");
      }
      if (scrollStart > headerHomeChange + 125) {
        $(".header__nav li:nth-child(2) > a").addClass("contrast");
      }
      if (scrollStart > headerHomeChange + 325) {
        $(".header__nav li:nth-child(2) > a").removeClass("contrast");
      }
    } else if (scrollStart > aboutContactChange + 125 && scrollStart < aboutContactChange + 225 && !mq1200.matches) {
      $(".header__nav li:last-child > a").addClass("contrast");
    } else if ((scrollStart > skillChange - 100 && scrollStart < skillChange + 775) || (scrollStart > contactChange - 100)) {

      if (scrollStart > inputNameChange - 100 && scrollStart < inputNameChange - 30) {
        $(".header__nav li:nth-child(2) > a").removeClass("contrast");
        $(".header__nav li:nth-child(3) > a").removeClass("contrast");
        if (mq1200.matches) {
          $(".header__nav li:nth-child(4) > a").removeClass("contrast");
          $(".header__nav li:last-child > a").removeClass("contrast");
        }
      } else if (scrollStart > inputEmailChange - 100 && scrollStart < inputEmailChange - 30) {
        $(".header__nav li:nth-child(2) > a").removeClass("contrast");
        $(".header__nav li:nth-child(3) > a").removeClass("contrast");
        if (mq1200.matches) {
          $(".header__nav li:nth-child(4) > a").removeClass("contrast");
          $(".header__nav li:last-child > a").removeClass("contrast");
        }
      } else if (scrollStart > textareaChange - 100 && scrollStart < textareaChange + 125) {
        $(".header__nav li:nth-child(2) > a").removeClass("contrast");
        $(".header__nav li:nth-child(3) > a").removeClass("contrast");
        if (mq1200.matches) {
          $(".header__nav li:nth-child(4) > a").removeClass("contrast");
          $(".header__nav li:last-child > a").removeClass("contrast");
        }
      } else if (scrollStart > footerChange - 100) {
        $(".header__nav li > a").removeClass("contrast");
        $(".hamburger span").removeClass("contrast");
        $(".hamburger").removeClass("contrast");
      } else {
        $(".header__nav li > a").addClass("contrast");
        $(".hamburger span").addClass("contrast");
        $(".hamburger").addClass("contrast");
      }
    } else {
      $(".header__nav li > a").removeClass("contrast");
      $(".hamburger span").removeClass("contrast");
      $(".hamburger").removeClass("contrast");
    }
  });
  // }
}

portfolio.hamburgerClick = () => {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('.header__nav > ul').toggleClass('open');
    $("nav").show();

    const mq768 = window.matchMedia("(max-width: 768px)");
    if (mq768.matches) {
      $("nav").toggleClass('mq');
      $('nav > .hamburger > span').toggleClass('mq');
    }
  });
}

portfolio.flickity = () => {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    accessibility: true,
    setGallerySize: true,
    cellAlign: 'center',
    cellSelector: '.carousel-cell',
    imagesLoaded: true,
    wrapAround: true,
    autoPlay: 3000,

    pauseAutoPlayOnHover: false
  });
}

portfolio.emailAddress = () => {
  let email = "contact";
  let domain = "ansonli.io";
  $('.emailAddy').html(`<a href="mailto:${email}@${domain}">${email}@${domain}</a>`)
}

portfolio.init = () => {
  portfolio.emailAddress();
  portfolio.flickity();
  portfolio.hamburgerClick();
  portfolio.contrastNav();
}

$(() => {
  portfolio.init();
});