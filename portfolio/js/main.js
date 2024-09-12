"use strict";

// メイン画像を横にスライドさせる
$(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: '184px',
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
      }
    }]
  });
});
// メイン画像を横にスライドさせる

// トップに戻る
$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 800, "swing");
    return false;
  });
})
// トップに戻る

// ハンバーガーメニュー
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})
// ハンバーガーメニューここまで

// ハンバーガーメニューの時、スクロールを無効
// $(function () {
//   $('.header-fixed, .hamburger').on('click', function (event) {
//     event.preventDefault();
//     $(this).toggleClass('active');

//     if ($(this).hasClass('active')) {
//       $('html').css('overflow', 'hidden');
//     } else {
//       $('html').removeAttr('style');
//     }
//   });
// });
// ハンバーガーメニューのスクロールを無効はここまで

// スクロールメニュー
$(function () {
  var headerHeight = $('.header-fixed').outerHeight(),
    startPos = 0;
  $(window).on('load scroll', function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > startPos && scrollPos > headerHeight) {
      $('.header-fixed').css('top', '-' + headerHeight + 'px');
    } else {
      $('.header-fixed').css('top', '0');
    }
    startPos = scrollPos;
  });
});
// スクロールメニューここまで

// テキストアニメーション
function slideAnime() {
  $('.downAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeDownUp");
      $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
    } else {
      $(this).removeClass("slideAnimeDownUp");
      $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
    }
  });
}
$(window).scroll(function () {
  slideAnime();
});
// // テキストアニメーションはここまで