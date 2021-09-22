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
        $('.article-item__img').clone().appendTo('.special-item__article_promo');
        $('.article-item__caption').clone().appendTo('.special-item__article');

        specialItem__article.removeChild(document.querySelector('.article-item__img'));
        specialItem__article.removeChild(document.querySelector('.article-item__caption'));
    }else{
        specialItem__dots.style.backgroundImage = "url('/svg/dots.svg')"
    }
  }
  $(window).load(reSize);
  $(window).resize(reSize);

});
