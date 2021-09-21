$(document).ready(function () {
  var objToStick = $(".special-item__sidebar"); //Получаем нужный объект
  var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока
      // $(window).scroll(function () {
      //     var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно
      //     if (windowScroll > topOfObjToStick + 135) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
      //         $(objToStick).addClass("special-item__sidebar_visible");
      //     } else {
      //         $(objToStick).removeClass("special-item__sidebar_visible");
      //     };
      // });
      $(document).scroll(function () {
        var el = $('.special-item__sidebar')[0];
        var el_y = getCoords(el)  ;
        console.log(getCoords(el).top);
        if ($(window).scrollTop() >= getCoords(el).top) {
            $(".special-item__sidebar").addClass("special-item__sidebar_visible");
        }
        else {
            $(".special-item__sidebar").removeClass("special-item__sidebar_visible");
        }
   });
    //   $(window).scroll(function(){
    // var el = $('.special-item__sidebar')[0];
    // var el_y = getCoords(el)  ;
    // console.log(getCoords(el).top);
    // if ($(window).scrollTop() >= getCoords(el).top) {
    //     $(".special-item__sidebar").addClass("special-item__sidebar_visible");
    // }
    // else {
    //     $(".special-item__sidebar").removeClass("special-item__sidebar_visible");
    // }
    // });

  function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

});

//    $(document).scroll(function () {
//  s_top = $("body").scrollTop();
//  yes = $('.special-item__sidebar').offset().top;
//  if(s_top > yes){
//      console.log("Yes");
//  }
// });

// var win = window,
//     docEl = document.documentElement,
//     el = document.getElementByClassName('special-item__sidebar')[0];
// alert(el);
// win.onscroll = function(){
//    var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
//    el.style.opacity =  sTop > 100 ? "1":"0" ;
// };
