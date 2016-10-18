$( document ).ready(function() {
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



