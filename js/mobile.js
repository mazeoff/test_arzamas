
$(document).ready(function () {
//замена фона у промо-блока на мобильной версии
// const sidebar = $(".special-item__sidebar");
// const sidebar_mobile = $(".special-item__sidebar-mobile");
// const topOfSidebar = $(sidebar).offset().top;
  function reSize() {
    const sidebar = $(".special-item__sidebar");
    const sidebar_mobile = $(".special-item__sidebar-mobile");
    const topOfSidebar = $(sidebar).offset().top;
    var specialItem__dots = document.getElementsByClassName('special-item__dots')[0],
    pageWidth = document.documentElement.clientWidth,
    mobileSize = 667;
    var specialItem__article = document.querySelector('.special-item__article');
    const article = document.querySelectorAll(".special-item__article");//берем все статьи
    if(pageWidth <= mobileSize){//если мобилка
      //меняем фон промо
        specialItem__dots.style.backgroundImage = "url('/svg/dots_mobile.svg')";
        //меняем местами блоки
        for (var i = 0; i < article.length; i++) {//проходим по списку
          while (article[i].childElementCount != 1) {//внутри узла идем по детям пока не будет 1 дочерний узел
            if(!article[i].lastElementChild.classList.contains('article-item__title')){//если в списке классов нет нужного
              article[i].parentNode.insertBefore(article[i].lastElementChild, article[i].nextSibling);//то выносим его за рамку статьи
            }else{//если попался нужный закидываем его в начало списка
              article[i].insertBefore(article[i].lastElementChild, article[i].firstChild);
            }
          }
        }

          //$(sidebar).removeClass("special-item__sidebar_visible");

    }else{//если десктоп
        specialItem__dots.style.backgroundImage = "url('/svg/dots.svg')"
        //$(sidebar_mobile).removeClass("special-item__sidebar-mobile_visible");

    }
  }
  $(window).load(reSize);
  $(window).resize(reSize);

});
