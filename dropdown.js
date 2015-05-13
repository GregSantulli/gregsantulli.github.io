$( document ).ready(function() {
  // navFaderListener();
  $('body').scrollspy({ target: '#navbar' })
  navClickListener();
  scrollArrowListener();
});


function navFaderListener() {
  var navBar = $('.navigation_container')
  var documentTop = $(document).scrollTop()
  navBar.css("background-color", "rgba(42,77,105," +  (0.7 + (documentTop/500)) + ")");
}


function navClickListener(){
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
}


function scrollArrowListener(){
  $(".down_arrow").click(function(){
      $('html,body').animate({
          scrollTop: $("#about").offset().top},
          'slow');
  });
}
