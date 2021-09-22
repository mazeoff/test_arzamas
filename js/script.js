$(document).ready(function () {
  const sidebar = $(".special-item__sidebar"); //Получаем нужный объект
  const topOfSidebar = $(sidebar).offset().top;
  const sections = $('section');
  const sidebar_height = sidebar.outerHeight();
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

    sidebar.find('a').on('click', function () {
      var $el = $(this)
        , id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - sidebar_height
      }, 500);

      return false;
    });

    console.log(sidebar.position().top);
      var scrollTop = $(this).scrollTop();
      if (scrollTop  > topOfSidebar - sidebar.position().top ) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
          $(sidebar).addClass("special-item__sidebar_visible");
      } else {
          $(sidebar).removeClass("special-item__sidebar_visible");
      };

  });
});
