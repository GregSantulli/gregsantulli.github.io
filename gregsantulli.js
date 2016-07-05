$( document ).ready(function() {
  $(document).bind('scroll', navFader);
  setSectionHeights()
  addEvent(window, "resize", setSectionHeights)
  addEvent(window, "resize", setLetterSpacing)
  AOS.init()
  setLetterSpacing()


  $(".down-arrow").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#develop').offset().top
      }, 800, function(){
    });
  });


});




function setLetterSpacing(){
  var headers = $('.header')
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i]
    var letterCount = $(header).html().trim().length
    var lmao = letterCount + "px"
    console.log(lmao)
    $(header).css('letter-spacing', lmao)
  };

}

function setSectionHeights(){
  var height = getWindowHeight()
  $('.section').css('min-height', height)
  checkWindowHeight(height)
}

function getWindowHeight(){
  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
  return height
}

function checkWindowHeight(height){
  if (height < 300){
    $('.navigate').hide()
  } else {
    $('.navigate').show()
  }
}

function addEvent(object, type, callback) {
  if (object == null || typeof(object) == 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on"+type] = callback;
  }
};


function navFader() {
  var navBar = $('.navbar')
  var documentTop = $(document).scrollTop()
  navBar.css("background-color", "rgba(42,77,105," +  (0.7 + (documentTop/500)) + ")");
  navBar.css("border-bottom", "1px solid rgba(224,224,224," +  ((documentTop/500)) + ")");

}


