$(document).ready(function () {
  function reSize() {
    var specialItem__dots = document.getElementsByClassName('special-item__dots')[0],
    pageWidth = document.documentElement.clientWidth,
    mobileSize = 667;
    if(pageWidth < mobileSize){
        specialItem__dots.style.backgroundImage = "url('/svg/dots_mobile.svg')";
    }else{
        specialItem__dots.style.backgroundImage = "url('/svg/dots.svg')"
    }
  }
  $(window).load(reSize);
  $(window).resize(reSize);


});
