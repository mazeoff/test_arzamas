$(document).ready(function () {
//замена фона у промо-блока на мобильной версии
  function reSize() {
    var specialItem__dots = document.getElementsByClassName('special-item__dots')[0],
    pageWidth = document.documentElement.clientWidth,
    mobileSize = 667;
    var specialItem__article = document.querySelector('.special-item__article');
    if(pageWidth < mobileSize){
        specialItem__dots.style.backgroundImage = "url('/svg/dots_mobile.svg')";
        //меняем местами блоки
        const article = document.querySelectorAll(".special-item__article");//берем все статьи
        for (var i = 0; i < article.length; i++) {//проходим по списку
          while (article[i].childElementCount != 1) {//внутри узла идем по детям пока не будет 1 дочерний узел
            if(!article[i].lastElementChild.classList.contains('article-item__title')){//если в списке классов нет нужного
              article[i].parentNode.insertBefore(article[i].lastElementChild, article[i].nextSibling);//то выносим его за рамку статьи
            }else{//если попался нужный закидываем его в начало списка
              article[i].insertBefore(article[i].lastElementChild, article[i].firstChild);
            }
          }
        }
    }else{
        specialItem__dots.style.backgroundImage = "url('/svg/dots.svg')"
    }
  }
  $(window).load(reSize);
  $(window).resize(reSize);

});
