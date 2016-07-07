$( document ).ready(function() {
  $(document).bind('scroll', navFader);
  $(document).bind('scroll', setSectionHeights);
  setSectionHeights()
  AOS.init()

  $(".down-arrow").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#develop').offset().top
      }, 800, function(){
    });
  });


});


function setSectionHeights(){
  var height = getWindowHeight()
    $('.landing.section').css('min-height', height)
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

function navFader() {
  var navBar = $('.navbar')
  var documentTop = $(document).scrollTop()
  navBar.css("background-color", "rgba(42,77,105," +  (0.7 + (documentTop/500)) + ")");
  navBar.css("border-bottom", "1px solid rgba(224,224,224," +  ((documentTop/500)) + ")");

}


