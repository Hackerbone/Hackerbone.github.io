

$(document).ready(function(){
  $(".name").fadeOut(0);
  $(".username").fadeOut(0);
  $(".github-logo").fadeOut(0);
    setTimeout(function(){
      $(".name").slideDown(500);
      $(".username").slideDown();
      $(".github-logo").fadeIn(600);

    }, 950);
});
