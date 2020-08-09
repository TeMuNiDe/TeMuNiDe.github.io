var pos = 0;
var scrolling = false;
var height = 4000;

$(document).ready(function(){
  function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

$('#button-collapse').sideNav({
    menuWidth: 200, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  }
);
  $.jInvertScroll(['#background-layer','#top-layer'],{
    height:height,
    onScroll: function(percent){
      if($('.mobile-show').css('display')=='none')
        autoScroll(percent);
        }
  });


  var options = {
  strings: ["<i>Welcome to the annual technical extravaganza, ^1000\n<br> much more innovative than ever...</i>"],
  typeSpeed: 30
}

var typed = new Typed("#typed", options);
var options2 = {
strings: ["9th March - 12th March, 2018"],
typeSpeed: 10
}
var typed2 = new Typed("#date", options2);


$(".menu-item").each(function(){
  $(this).click(function(){
    $(".menu-item").each(function(){
    $(this).removeClass('active');
  });
    $(this).addClass('active');

 var target  = "#page-"+$(this).data('target');
 var left;
left = $(target).position().left;
 var whole = $("#top-layer").width();
 var percent = (left/whole)*height;
//  console.log(percent);
  //var scroll = height*percent/100;
  $('html, body').animate({scrollTop: percent}, 800);
});
});
$(".mobile-menu-item").each(function(){
  $(this).click(function(){
 var target  = "#mobile-page-"+$(this).data('target');
// console.log(target);
 var top = $(target).position().top - viewportToPixels('1vh');
 //console.log(top);
  $('html, body').animate({scrollTop: top}, 800);
  $("#mobile-header-title").text($(this).text());
});
});

$(window).scroll(function() {
  //console.log($(this).scrollTop());
  var sc = $(this).scrollTop();
  var target;
  $($("[id^='mobile-page']").get().reverse()).each(function(){
//  $("[id^='mobile-page']").each(function(){
    /*if(sc<$(this).position().top){
      target = $(this).attr('id');
    }*/
    if(sc<900){
      target = "home";
    }else if(sc<1800){
      target = "about";
    }else if(sc<3000){
      target = "hackathon";
    }else if(sc<3500){
      target = "events";
    }else {
      target = "registrations";
    }
  });
var head = target;
if(head!='about')
$("#mobile-header-title").text($("[data-target="+head+"]").text());
else
$("#mobile-header-title").text("Home");


});
$(".event-box").mouseenter(function(){
$(this).addClass('animate');
});
$(".event-box").mouseleave(function(){
$(this).removeClass('animate');
});
$(".event-box").click(function(){
});
});
