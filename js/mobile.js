
$(document).ready(function () {
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
      //удаляем лишние классы в мобильной версии
        $('.article-item__title_promo').removeClass('article-item__text_left');
        $('.article-item__caption_promo').removeClass('article-item__text_left');
    }else{//если десктоп
        specialItem__dots.style.backgroundImage = "url('/svg/dots.svg')"
    }
  }
  $(window).load(reSize);
  $(window).resize(reSize);

});
