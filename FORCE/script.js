$(document).ready(function(){


  $("h1").slideUp(0);
  $("h1").fadeIn(1500);

  $("h3").slideUp(0);
  $("h3").fadeIn(1500);

  $("button").slideUp(0);
  $("button").fadeIn(2000);

  $("button").onclick($("h1").slideUp(2000););

  $("#1").click(function(){
      $(".img1").addClass("index1");
      $(".img3").removeClass("index1");
      $(".img2").removeClass("index1");
  });
  $("#2").click(function(){
      $(".img2").addClass("index1");
      $(".img1").removeClass("index1");
      $(".img3").removeClass("index1");
  });

  $("#3").click(function(){
      $(".img3").addClass("index1");
      $(".img2").removeClass("index1");
      $(".img1").removeClass("index1");

  });
});
