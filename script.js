//Not perfect yet - but getting there :)

// mute buttons 

$(".master-btn").click(function() {
  $('.master').val(0.01);
  $('.volume').val(0.01);
  $(this).removeClass("active");
  $(".volume").addClass("dim");  
});


$(".ch1-btn").click(function() {
  $('.ch1').val(0.1);
  $(this).removeClass("active");
});

$(".ch2-btn").click(function() {
  $('.ch2').val(0.1);
  $(this).removeClass("active");
});

$(".ch3-btn").click(function() {
  $('.ch3').val(0.1);
  $(this).removeClass("active");
});

$(".ch4-btn").click(function() {
  $('.ch4').val(0.1);
  $(this).removeClass("active");
});



// Play/Pause controls

$("#play").click(function () {
  $("#pause").removeClass("pause-active");
  $(".volume").removeClass("dim");
  $(this).addClass("active");
});

$("#pause").click(function () {
  $("#play").removeClass("active");
  $(".volume").addClass("dim");
  $(this).addClass("pause-active");
});

$("#stop").click(function () {
  $("#play").removeClass("active");
  $(".volume").addClass("dim");
  $("#pause").removeClass("pause-active");
});

// Volume Sliders


$('.master').change(function () {                 
  var Width = $(this).val();
  $('.volume').val(Width);
  
  if ($(this).val() < 0.2) {
    $(".master-btn").removeClass("active");
    $(".volume").addClass("dim");
  }
  else {
    $(".master-btn").addClass("active");
    $(".volume").removeClass("dim");
  }
  
}); 


$('.ch1').change(function () {                 
  var Width = $(this).val();

  if ($('.ch1').val() < 0.2) {
    
    $(".ch1-btn").removeClass("active");
  }
  else { 
    $(".ch1-btn").addClass("active");
  }
}); 

$('.ch2').change(function () {                 
  var Width = $(this).val();
  
  if ($(this).val() < 0.2) {
    
    $(".ch2-btn").removeClass("active");
  }
  else {
    $(".ch2-btn").addClass("active");
  }
}); 

$('.ch3').change(function () {                 
  var Width = $(this).val();
  
  if ($(this).val() < 0.2) {
    
    $(".ch3-btn").removeClass("active");
  }
  else {
    $(".ch3-btn").addClass("active");
  }
}); 

$('.ch4').change(function () {                 
  var Width = $(this).val();
  
  if ($(this).val() < 0.2) {
    
    $(".ch4-btn").removeClass("active");
  }
  else {
    $(".ch4-btn").addClass("active");
  }
}); 




// Music from http://www.musicradar.com/news/tech/free-music-samples-download-loops-hits-and-multis-217833/66