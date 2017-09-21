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
  $('.emailAddy').html('<a href="mailto:' + email + '@' + domain + '">' + email + '@' + domain + '</a>');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicG9ydGZvbGlvIiwiY29udHJhc3ROYXYiLCJzY3JvbGxTdGFydCIsImhlYWRlckhvbWVDaGFuZ2UiLCIkIiwib2Zmc2V0IiwidG9wIiwiaGVhZGVyQWJvdXRDaGFuZ2UiLCJhYm91dENvbnRhY3RDaGFuZ2UiLCJnYWxsZXJ5Q2hhbmdlIiwiaW5wdXROYW1lQ2hhbmdlIiwiaW5wdXRFbWFpbENoYW5nZSIsInRleHRhcmVhQ2hhbmdlIiwic2tpbGxDaGFuZ2UiLCJjb250YWN0Q2hhbmdlIiwiZm9vdGVyQ2hhbmdlIiwibXExMjAwIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1xNzY4IiwiZG9jdW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJtYXRjaGVzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhbWJ1cmdlckNsaWNrIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJmbGlja2l0eSIsImNlbGxBbGlnbiIsImNvbnRhaW4iLCJhY2Nlc3NpYmlsaXR5Iiwic2V0R2FsbGVyeVNpemUiLCJlbWFpbEFkZHJlc3MiLCJlbWFpbCIsImRvbWFpbiIsImh0bWwiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsWUFBWSxFQUFsQjs7QUFFQUEsVUFBVUMsV0FBVixHQUF3QixZQUFNO0FBQzVCLE1BQUlDLGNBQWMsQ0FBbEI7QUFDQSxNQUFJQyxtQkFBbUJDLEVBQUUsT0FBRixFQUFXQyxNQUFYLEdBQW9CQyxHQUEzQztBQUNBLE1BQUlDLG9CQUFvQkgsRUFBRSxPQUFGLEVBQVdDLE1BQVgsR0FBb0JDLEdBQTVDO0FBQ0EsTUFBSUUscUJBQXFCSixFQUFFLFFBQUYsRUFBWUMsTUFBWixHQUFxQkMsR0FBOUM7QUFDQSxNQUFJRyxnQkFBZ0JMLEVBQUUsVUFBRixFQUFjQyxNQUFkLEdBQXVCQyxHQUEzQztBQUNBLE1BQUlJLGtCQUFrQk4sRUFBRSxXQUFGLEVBQWVDLE1BQWYsR0FBd0JDLEdBQTlDO0FB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RUMsbUJBQWUsSUFKakI7QUFLRUMsb0JBQWdCO0FBTGxCLCtDQU1hLFFBTmIsZ0RBT2dCLGdCQVBoQixnREFRZ0IsSUFSaEIsOENBU2MsSUFUZCw0Q0FVWSxJQVZaLHdEQVl3QixLQVp4QjtBQWNELENBZkQ7O0FBaUJBbEMsVUFBVW1DLFlBQVYsR0FBeUIsWUFBTTtBQUM3QixNQUFJQyxRQUFRLFNBQVo7QUFDQSxNQUFJQyxTQUFTLFlBQWI7QUFDQWpDLElBQUUsWUFBRixFQUFnQmtDLElBQWhCLHNCQUF3Q0YsS0FBeEMsU0FBaURDLE1BQWpELFVBQTRERCxLQUE1RCxTQUFxRUMsTUFBckU7QUFDRCxDQUpEOztBQU1BckMsVUFBVXVDLElBQVYsR0FBaUIsWUFBTTtBQUNyQnZDLFlBQVVtQyxZQUFWO0FBQ0FuQyxZQUFVOEIsUUFBVjtBQUNBOUIsWUFBVTBCLGNBQVY7QUFDQTFCLFlBQVVDLFdBQVY7QUFDRCxDQUxEOztBQU9BRyxFQUFFLFlBQUk7QUFDSkosWUFBVXVDLElBQVY7QUFDRCxDQUZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3J0Zm9saW8gPSB7fTtcclxuXHJcbnBvcnRmb2xpby5jb250cmFzdE5hdiA9ICgpID0+IHtcclxuICBsZXQgc2Nyb2xsU3RhcnQgPSAwO1xyXG4gIGxldCBoZWFkZXJIb21lQ2hhbmdlID0gJCgnI2hvbWUnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IGhlYWRlckFib3V0Q2hhbmdlID0gJCgnI2hvbWUnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IGFib3V0Q29udGFjdENoYW5nZSA9ICQoJyNhYm91dCcpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgZ2FsbGVyeUNoYW5nZSA9ICQoJyNnYWxsZXJ5Jykub2Zmc2V0KCkudG9wO1xyXG4gIGxldCBpbnB1dE5hbWVDaGFuZ2UgPSAkKCcjZm9ybU5hbWUnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IGlucHV0RW1haWxDaGFuZ2UgPSAkKCcjZm9ybUVtYWlsJykub2Zmc2V0KCkudG9wO1xyXG4gIGxldCB0ZXh0YXJlYUNoYW5nZSA9ICQoJ3RleHRhcmVhJykub2Zmc2V0KCkudG9wO1xyXG4gIGxldCBza2lsbENoYW5nZSA9ICQoJyNza2lsbHMnKS5vZmZzZXQoKS50b3A7XHJcbiAgbGV0IGNvbnRhY3RDaGFuZ2UgPSAkKCcjY29udGFjdCcpLm9mZnNldCgpLnRvcDtcclxuICBsZXQgZm9vdGVyQ2hhbmdlID0gJCgnZm9vdGVyJykub2Zmc2V0KCkudG9wO1xyXG4gIGNvbnN0IG1xMTIwMCA9IHdpbmRvdy5tYXRjaE1lZGlhKCBcIihtYXgtd2lkdGg6IDEyMDBweClcIiApO1xyXG4gIGNvbnN0IG1xNzY4ID0gd2luZG93Lm1hdGNoTWVkaWEoIFwiKG1heC13aWR0aDogNzY4cHgpXCIgKTtcclxuXHJcbiAgLy8gaWYgKCFtcTc2OC5tYXRjaGVzKXtcclxuICAgICQoZG9jdW1lbnQpLnNjcm9sbCggKCkgPT4ge1xyXG4gICAgICBzY3JvbGxTdGFydCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICBpZiAoKHNjcm9sbFN0YXJ0ID4gaGVhZGVySG9tZUNoYW5nZSs3MCAmJiBzY3JvbGxTdGFydCA8IGhlYWRlckhvbWVDaGFuZ2UrNDUwKSkge1xyXG4gICAgICAgIGlmICghbXExMjAwLm1hdGNoZXMpIHtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6Zmlyc3QtY2hpbGQgPiBhXCIpLmFkZENsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY3JvbGxTdGFydCA+IGhlYWRlckhvbWVDaGFuZ2UrMTI1KXsgICAgICAgIFxyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoMikgPiBhXCIpLmFkZENsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY3JvbGxTdGFydCA+IGhlYWRlckhvbWVDaGFuZ2UrMzI1KSB7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgyKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoc2Nyb2xsU3RhcnQgPiBhYm91dENvbnRhY3RDaGFuZ2UrMTI1ICYmIHNjcm9sbFN0YXJ0IDwgYWJvdXRDb250YWN0Q2hhbmdlKzIyNSAmJiAhbXExMjAwLm1hdGNoZXMpeyAgICAgICAgXHJcbiAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpsYXN0LWNoaWxkID4gYVwiKS5hZGRDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChzY3JvbGxTdGFydCA+IHNraWxsQ2hhbmdlLTEwMCAmJiBzY3JvbGxTdGFydCA8IHNraWxsQ2hhbmdlKzc3NSkgfHwgKHNjcm9sbFN0YXJ0ID4gY29udGFjdENoYW5nZS0xMDApKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNjcm9sbFN0YXJ0ID4gaW5wdXROYW1lQ2hhbmdlLTEwMCAmJiBzY3JvbGxTdGFydCA8IGlucHV0TmFtZUNoYW5nZS0zMCl7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgyKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDMpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgaWYgKG1xMTIwMC5tYXRjaGVzKXtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoNCkgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bGFzdC1jaGlsZCA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2Nyb2xsU3RhcnQgPiBpbnB1dEVtYWlsQ2hhbmdlLTEwMCAmJiBzY3JvbGxTdGFydCA8IGlucHV0RW1haWxDaGFuZ2UtMzApe1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoMikgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgzKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgIGlmKG1xMTIwMC5tYXRjaGVzKXtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoNCkgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bGFzdC1jaGlsZCA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2Nyb2xsU3RhcnQgPiB0ZXh0YXJlYUNoYW5nZS0xMDAgJiYgc2Nyb2xsU3RhcnQgPCB0ZXh0YXJlYUNoYW5nZSsxMjUpe1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaTpudGgtY2hpbGQoMikgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOm50aC1jaGlsZCgzKSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgIGlmIChtcTEyMDAubWF0Y2hlcyl7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGk6bnRoLWNoaWxkKDQpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpOmxhc3QtY2hpbGQgPiBhXCIpLnJlbW92ZUNsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNjcm9sbFN0YXJ0ID4gZm9vdGVyQ2hhbmdlLTEwMCl7XHJcbiAgICAgICAgICAkKFwiLmhlYWRlcl9fbmF2IGxpID4gYVwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgICAgJChcIi5oYW1idXJnZXIgc3BhblwiKS5yZW1vdmVDbGFzcyhcImNvbnRyYXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICQoXCIuaGVhZGVyX19uYXYgbGkgPiBhXCIpLmFkZENsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgICAkKFwiLmhhbWJ1cmdlciBzcGFuXCIpLmFkZENsYXNzKFwiY29udHJhc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5oZWFkZXJfX25hdiBsaSA+IGFcIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgICAgICQoXCIuaGFtYnVyZ2VyIHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJjb250cmFzdFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5wb3J0Zm9saW8uaGFtYnVyZ2VyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcuaGVhZGVyX19uYXYgPiB1bCcpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKFwibmF2XCIpLnNob3coKTtcclxuICAgIFxyXG4gICAgY29uc3QgbXE3NjggPSB3aW5kb3cubWF0Y2hNZWRpYSggXCIobWF4LXdpZHRoOiA3NjhweClcIiApO1xyXG4gICAgaWYgKG1xNzY4Lm1hdGNoZXMpe1xyXG4gICAgICAkKFwibmF2XCIpLnRvZ2dsZUNsYXNzKCdtcScpO1xyXG4gICAgICAkKCduYXYgPiAuaGFtYnVyZ2VyID4gc3BhbicpLnRvZ2dsZUNsYXNzKCdtcScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5wb3J0Zm9saW8uZmxpY2tpdHkgPSAoKSA9PiB7XHJcbiAgJCgnLm1haW4tY2Fyb3VzZWwnKS5mbGlja2l0eSh7XHJcbiAgICAvLyBvcHRpb25zXHJcbiAgICBjZWxsQWxpZ246ICdsZWZ0JyxcclxuICAgIGNvbnRhaW46IHRydWUsXHJcbiAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgc2V0R2FsbGVyeVNpemU6IHRydWUsXHJcbiAgICBjZWxsQWxpZ246ICdjZW50ZXInLFxyXG4gICAgY2VsbFNlbGVjdG9yOiAnLmNhcm91c2VsLWNlbGwnLFxyXG4gICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxyXG4gICAgd3JhcEFyb3VuZDogdHJ1ZSxcclxuICAgIGF1dG9QbGF5OiAzMDAwLFxyXG4gICAgXHJcbiAgICBwYXVzZUF1dG9QbGF5T25Ib3ZlcjogZmFsc2VcclxuICB9KTtcclxufVxyXG5cclxucG9ydGZvbGlvLmVtYWlsQWRkcmVzcyA9ICgpID0+IHtcclxuICBsZXQgZW1haWwgPSBcImNvbnRhY3RcIjtcclxuICBsZXQgZG9tYWluID0gXCJhbnNvbmxpLmlvXCI7XHJcbiAgJCgnLmVtYWlsQWRkeScpLmh0bWwoYDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1AJHtkb21haW59XCI+JHtlbWFpbH1AJHtkb21haW59PC9hPmApXHJcbn1cclxuXHJcbnBvcnRmb2xpby5pbml0ID0gKCkgPT4ge1xyXG4gIHBvcnRmb2xpby5lbWFpbEFkZHJlc3MoKTtcclxuICBwb3J0Zm9saW8uZmxpY2tpdHkoKTtcclxuICBwb3J0Zm9saW8uaGFtYnVyZ2VyQ2xpY2soKTtcclxuICBwb3J0Zm9saW8uY29udHJhc3ROYXYoKTtcclxufVxyXG5cclxuJCgoKT0+e1xyXG4gIHBvcnRmb2xpby5pbml0KCk7ICBcclxufSk7Il19
