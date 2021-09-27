$(document).ready(function () {
  const sidebar = $(".special-item__sidebar");
  const sidebar_mobile = $(".special-item__sidebar-mobile");
  const topOfSidebar = $(sidebar).offset().top;
  const topOfSidebarMobile = $(sidebar_mobile).offset().top;
  const sections = $('section');
  const sidebar_height = sidebar.outerHeight();
  const mobileSize = 667;
  $(window).scroll(function () {

    var cur_pos = $(this).scrollTop(),
    sections = $('.special-item__article-box');
    sections.each(function() {
      var top = $(this).offset().top - sidebar_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {

      sidebar.find('a').removeClass('sidebar-item_active');
      sections.removeClass('special-item__article-box_active');

      $(this).addClass('special-item__article-box_active');
      sidebar.find('a[href="#'+$(this).attr('id')+'"]').addClass('sidebar-item_active');
      }
    });

    sidebar.find('.sidebar-item').unbind().click(function () {
      var id = $(this).find('a').attr('href'),
          top = $(id).offset().top - sidebar_height;
        if (id.indexOf('#') != -1) {
          $('body,html').animate({ scrollTop: top }, 500);
          if ($(".special-item__sidebar-mobile").is(':visible')) { //если мобильная версия
              // то при переходе по ссылке закрываем меню
              $('.special-item__sidebar').toggleClass('special-item__sidebar-mobile_visible');
              $('.special-item__top-popup').toggleClass('special-item__top-popup_opened');
              $('.special-item__top-popup > img').toggle();
          }
        }
    });

    $(window).scroll(function () {
        var pageWidth = document.documentElement.clientWidth;
        var scrollTop = $(this).scrollTop();
        if(pageWidth <= mobileSize){//mobile
          //через position:sticky
        }else{//desktop
          if (scrollTop  >= topOfSidebar - sidebar.position().top ) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
              $(sidebar).addClass("special-item__sidebar_visible");
          } else {
              $(sidebar).removeClass("special-item__sidebar_visible");
          };
        }
    });
  });

    $('a>.special-item__top-popup').click(function(){
      $('.special-item__sidebar').toggleClass('special-item__sidebar-mobile_visible');
      $('.special-item__top-popup').toggleClass('special-item__top-popup_opened');
      $('.special-item__top-popup > img').toggle();
    });
});
