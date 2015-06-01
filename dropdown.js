$( document ).ready(function() {
  $(document).bind('scroll', navFader);
  $('body').scrollspy({ target: '#navbar' })
  navClickListener();
  scrollArrowListener();
  moreButtonListener();
});


function navFader() {
  var navBar = $('.navbar')
  var documentTop = $(document).scrollTop()
  navBar.css("background-color", "rgba(42,77,105," +  (0.7 + (documentTop/500)) + ")");
  navBar.css("border-bottom", "1px solid rgba(224,224,224," +  ((documentTop/500)) + ")");

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


function moreButtonListener(){
  $('#more_button').on('click', function(event){
    event.preventDefault();
    $(this).hide();
    $('#more_about').fadeIn();
  });
}
