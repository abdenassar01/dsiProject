
// $(".menu-toggle-btn").click(function(){
//     $(this).toggleClass("fa-times");
//     $(".navigation-menu").toggleClass("active");
//   });

$( ".menu-toggle-btn" ).on( "click", function() {
  $(this).toggleClass("fa-times");
  $(".navigation-menu").toggleClass("active");
});
$( ".menu-toggle-btn" ).trigger( "click" );

$(window).on('load scroll',function(){

  $('.menu-toggle-btn').removeClass('fa-times');
  $('.navigation-menu').removeClass('active');
})