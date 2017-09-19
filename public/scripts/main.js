'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var portfolio = {};

portfolio.contrastNav = function () {
  var scrollStart = 0;
  var headerHomeChange = $('#home').offset().top;
  var headerAboutChange = $('#home').offset().top;
  var aboutContactChange = $('#about').offset().top;
  var galleryChange = $('#gallery').offset().top;
  var inputNameChange = $('#formName').offset().top;
  var inputEmailChange = $('#formEmail').offset().top;
  var textareaChange = $('textarea').offset().top;
  var skillChange = $('#skills').offset().top;
  var contactChange = $('#contact').offset().top;
  var footerChange = $('footer').offset().top;
  var mq1200 = window.matchMedia("(max-width: 1200px)");
  var mq768 = window.matchMedia("(max-width: 768px)");

  // if (!mq768.matches){
  $(document).scroll(function () {
    scrollStart = $(document).scrollTop();
    if (scrollStart > headerHomeChange + 70 && scrollStart < headerHomeChange + 450) {
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
    } else if (scrollStart > skillChange - 100 && scrollStart < skillChange + 775 || scrollStart > contactChange - 100) {

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
      } else {
        $(".header__nav li > a").addClass("contrast");
        $(".hamburger span").addClass("contrast");
      }
    } else {
      $(".header__nav li > a").removeClass("contrast");
      $(".hamburger span").removeClass("contrast");
    }
  });
  // }
};

portfolio.hamburgerClick = function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('.header__nav > ul').toggleClass('open');
    $("nav").show();

    var mq768 = window.matchMedia("(max-width: 768px)");
    if (mq768.matches) {
      $("nav").toggleClass('mq');
      $('nav > .hamburger > span').toggleClass('mq');
    }
  });
};

portfolio.flickity = function () {
  var _$$flickity;

  $('.main-carousel').flickity((_$$flickity = {
    // options
    cellAlign: 'left',
    contain: true,
    accessibility: true,
    setGallerySize: true
  }, _defineProperty(_$$flickity, 'cellAlign', 'center'), _defineProperty(_$$flickity, 'cellSelector', '.carousel-cell'), _defineProperty(_$$flickity, 'imagesLoaded', true), _defineProperty(_$$flickity, 'wrapAround', true), _defineProperty(_$$flickity, 'autoPlay', 3000), _defineProperty(_$$flickity, 'pauseAutoPlayOnHover', false), _$$flickity));
};

portfolio.emailAddress = function () {
  var email = "contact";
  var domain = "ansonli.io";
  $('.emailAddy').html('<a href="' + email + '@' + domain + '">' + email + '@' + domain + '</a>');
};

portfolio.init = function () {
  portfolio.emailAddress();
  portfolio.flickity();
  portfolio.hamburgerClick();
  portfolio.contrastNav();
};

$(function () {
  portfolio.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicG9ydGZvbGlvIiwiY29udHJhc3ROYXYiLCJzY3JvbGxTdGFydCIsImhlYWRlckhvbWVDaGFuZ2UiLCIkIiwib2Zmc2V0IiwidG9wIiwiaGVhZGVyQWJvdXRDaGFuZ2UiLCJhYm91dENvbnRhY3RDaGFuZ2UiLCJnYWxsZXJ5Q2hhbmdlIiwiaW5wdXROYW1lQ2hhbmdlIiwiaW5wdXRFbWFpbENoYW5nZSIsInRleHRhcmVhQ2hhbmdlIiwic2tpbGxDaGFuZ2UiLCJjb250YWN0Q2hhbmdlIiwiZm9vdGVyQ2hhbmdlIiwibXExMjAwIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1xNzY4IiwiZG9jdW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJtYXRjaGVzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhbWJ1cmdlckNsaWNrIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJmbGlja2l0eSIsImNlbGxBbGlnbiIsImNvbnRhaW4iLCJhY2Nlc3NpYmlsaXR5Iiwic2V0R2FsbGVyeVNpemUiLCJlbWFpbEFkZHJlc3MiLCJlbWFpbCIsImRvbWFpbiIsImh0bWwiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsWUFBWSxFQUFsQjs7QUFFQUEsVUFBVUMsV0FBVixHQUF3QixZQUFNO0FBQzVCLE1BQUlDLGNBQWMsQ0FBbEI7QUFDQSxNQUFJQyxtQkFBbUJDLEVBQUUsT0FBRixFQUFXQyxNQUFYLEdBQW9CQyxHQUEzQztBQUNBLE1BQUlDLG9CQUFvQkgsRUFBRSxPQUFGLEVBQVdDLE1BQVgsR0FBb0JDLEdBQTVDO0FBQ0EsTUFBSUUscUJBQXFCSixFQUFFLFFBQUYsRUFBWUMsTUFBWixHQUFxQkMsR0FBOUM7QUFDQSxNQUFJRyxnQkFBZ0JMLEVBQUUsVUFBRixFQUFjQyxNQUFkLEdBQXVCQyxHQUEzQztBQUNBLE1BQUlJLGtCQUFrQk4sRUFBRSxXQUFGLEVBQWVDLE1BQWYsR0FBd0JDLEdBQTlDO0FB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RUMsbUJBQWUsSUFKakI7QUFLRUMsb0JBQWdCO0FBTGxCLCtDQU1hLFFBTmIsZ0RBT2dCLGdCQVBoQixnREFRZ0IsSUFSaEIsOENBU2MsSUFUZCw0Q0FVWSxJQVZaLHdEQVl3QixLQVp4QjtBQWNELENBZkQ7O0FBaUJBbEMsVUFBVW1DLFlBQVYsR0FBeUIsWUFBTTtBQUM3QixNQUFJQyxRQUFRLFNBQVo7QUFDQSxNQUFJQyxTQUFTLFlBQWI7QUFDQWpDLElBQUUsWUFBRixFQUFnQmtDLElBQWhCLGVBQWlDRixLQUFqQyxTQUEwQ0MsTUFBMUMsVUFBcURELEtBQXJELFNBQThEQyxNQUE5RDtBQUNELENBSkQ7O0FBTUFyQyxVQUFVdUMsSUFBVixHQUFpQixZQUFNO0FBQ3JCdkMsWUFBVW1DLFlBQVY7QUFDQW5DLFlBQVU4QixRQUFWO0FBQ0E5QixZQUFVMEIsY0FBVjtBQUNBMUIsWUFBVUMsV0FBVjtBQUNELENBTEQ7O0FBT0FHLEVBQUUsWUFBSTtBQUNKSixZQUFVdUMsSUFBVjtBQUNELENBRkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcnRmb2xpbyA9IHt9O1xyXG5cclxucG9ydGZvbGlvLmNvbnRyYXN0TmF2ID0gKCkgPT4ge1xyXG4gIGxldCBzY3JvbGxTdGFydCA9IDA7XHJcbiAgbGV0IGhlYWRlckhvbWVDaGFuZ2UgPSAkKCcjaG9tZScpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgaGVhZGVyQWJvdXRDaGFuZ2UgPSAkKCcjaG9tZScpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgYWJvdXRDb250YWN0Q2hhbmdlID0gJCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xyXG4gIGxldCBnYWxsZXJ5Q2hhbmdlID0gJCgnI2dhbGxlcnknKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IGlucHV0TmFtZUNoYW5nZSA9ICQoJyNmb3JtTmFtZScpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgaW5wdXRFbWFpbENoYW5nZSA9ICQoJyNmb3JtRW1haWwnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IHRleHRhcmVhQ2hhbmdlID0gJCgndGV4dGFyZWEnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IHNraWxsQ2hhbmdlID0gJCgnI3NraWxscycpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgY29udGFjdENoYW5nZSA9ICQoJyNjb250YWN0Jykub2Zmc2V0KCkudG9wO1xyXG4gIGxldCBmb290ZXJDaGFuZ2UgPSAkKCdmb290ZXInKS5vZmZzZXQoKS50b3A7XHJcbiAgY29uc3QgbXExMjAwID0gd2luZG93Lm1hdGNoTWVkaWEoIFwiKG1heC13aWR0aDogMTIwMHB4KVwiICk7XHJcbiAgY29uc3QgbXE3NjggPSB3aW5kb3cubWF0Y2hNZWRpYSggXCIobWF4LXdpZHRoOiA3NjhweClcIiApO1xyXG5cclxuICAvLyBpZiAoIW1xNzY4Lm1hdGNoZXMpe1xyXG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKCAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFN0YXJ0ID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIGlmICgoc2Nyb2xsU3RhcnQgPiBoZWFkZXJIb21lQ2hhbmdlKzcwICYmIHNjcm9sbFN0YXJ0IDwgaGVhZGVySG9tZUNoYW5nZSs0NTApKSB7XHJcbiAgICAgICAgaWYgKCFtcTEyMDAubWF0Y2hlcykge1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpmaXJzdC1jaGlsZCA+IGFcIikuYWRkQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjcm9sbFN0YXJ0ID4gaGVhZGVySG9tZUNoYW5nZSsxMjUpeyAgICAgICAgXHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgyKSA+IGFcIikuYWRkQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjcm9sbFN0YXJ0ID4gaGVhZGVySG9tZUNoYW5nZSszMjUpIHtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDIpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzY3JvbGxTdGFydCA+IGFib3V0Q29udGFjdENoYW5nZSsxMjUgJiYgc2Nyb2xsU3RhcnQgPCBhYm91dENvbnRhY3RDaGFuZ2UrMjI1ICYmICFtcTEyMDAubWF0Y2hlcyl7ICAgICAgICBcclxuICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOmxhc3QtY2hpbGQgPiBhXCIpLmFkZENsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHNjcm9sbFN0YXJ0ID4gc2tpbGxDaGFuZ2UtMTAwICYmIHNjcm9sbFN0YXJ0IDwgc2tpbGxDaGFuZ2UrNzc1KSB8fCAoc2Nyb2xsU3RhcnQgPiBjb250YWN0Q2hhbmdlLTEwMCkpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2Nyb2xsU3RhcnQgPiBpbnB1dE5hbWVDaGFuZ2UtMTAwICYmIHNjcm9sbFN0YXJ0IDwgaW5wdXROYW1lQ2hhbmdlLTMwKXtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDIpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoMykgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICBpZiAobXExMjAwLm1hdGNoZXMpe1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCg0KSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpsYXN0LWNoaWxkID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzY3JvbGxTdGFydCA+IGlucHV0RW1haWxDaGFuZ2UtMTAwICYmIHNjcm9sbFN0YXJ0IDwgaW5wdXRFbWFpbENoYW5nZS0zMCl7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgyKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDMpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgaWYobXExMjAwLm1hdGNoZXMpe1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCg0KSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpsYXN0LWNoaWxkID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzY3JvbGxTdGFydCA+IHRleHRhcmVhQ2hhbmdlLTEwMCAmJiBzY3JvbGxTdGFydCA8IHRleHRhcmVhQ2hhbmdlKzEyNSl7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgyKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDMpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgaWYgKG1xMTIwMC5tYXRjaGVzKXtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoNCkgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bGFzdC1jaGlsZCA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2Nyb2xsU3RhcnQgPiBmb290ZXJDaGFuZ2UtMTAwKXtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGkgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAkKFwiLmhhbWJ1cmdlciBzcGFuXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaSA+IGFcIikuYWRkQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICQoXCIuaGFtYnVyZ2VyIHNwYW5cIikuYWRkQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgJChcIi5oYW1idXJnZXIgc3BhblwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAvLyB9XHJcbn1cclxuXHJcbnBvcnRmb2xpby5oYW1idXJnZXJDbGljayA9ICgpID0+IHtcclxuICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoJy5oZWFkZXJfX25hdiA+IHVsJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoXCJuYXZcIikuc2hvdygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtcTc2OCA9IHdpbmRvdy5tYXRjaE1lZGlhKCBcIihtYXgtd2lkdGg6IDc2OHB4KVwiICk7XHJcbiAgICBpZiAobXE3NjgubWF0Y2hlcyl7XHJcbiAgICAgICQoXCJuYXZcIikudG9nZ2xlQ2xhc3MoJ21xJyk7XHJcbiAgICAgICQoJ25hdiA+IC5oYW1idXJnZXIgPiBzcGFuJykudG9nZ2xlQ2xhc3MoJ21xJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbnBvcnRmb2xpby5mbGlja2l0eSA9ICgpID0+IHtcclxuICAkKCcubWFpbi1jYXJvdXNlbCcpLmZsaWNraXR5KHtcclxuICAgIC8vIG9wdGlvbnNcclxuICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxyXG4gICAgY29udGFpbjogdHJ1ZSxcclxuICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICBzZXRHYWxsZXJ5U2l6ZTogdHJ1ZSxcclxuICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjZWxsU2VsZWN0b3I6ICcuY2Fyb3VzZWwtY2VsbCcsXHJcbiAgICBpbWFnZXNMb2FkZWQ6IHRydWUsXHJcbiAgICB3cmFwQXJvdW5kOiB0cnVlLFxyXG4gICAgYXV0b1BsYXk6IDMwMDAsXHJcbiAgICBcclxuICAgIHBhdXNlQXV0b1BsYXlPbkhvdmVyOiBmYWxzZVxyXG4gIH0pO1xyXG59XHJcblxyXG5wb3J0Zm9saW8uZW1haWxBZGRyZXNzID0gKCkgPT4ge1xyXG4gIGxldCBlbWFpbCA9IFwiY29udGFjdFwiO1xyXG4gIGxldCBkb21haW4gPSBcImFuc29ubGkuaW9cIjtcclxuICAkKCcuZW1haWxBZGR5JykuaHRtbChgPGEgaHJlZj1cIiR7ZW1haWx9QCR7ZG9tYWlufVwiPiR7ZW1haWx9QCR7ZG9tYWlufTwvYT5gKVxyXG59XHJcblxyXG5wb3J0Zm9saW8uaW5pdCA9ICgpID0+IHtcclxuICBwb3J0Zm9saW8uZW1haWxBZGRyZXNzKCk7XHJcbiAgcG9ydGZvbGlvLmZsaWNraXR5KCk7XHJcbiAgcG9ydGZvbGlvLmhhbWJ1cmdlckNsaWNrKCk7XHJcbiAgcG9ydGZvbGlvLmNvbnRyYXN0TmF2KCk7XHJcbn1cclxuXHJcbiQoKCk9PntcclxuICBwb3J0Zm9saW8uaW5pdCgpOyAgXHJcbn0pOyJdfQ==
