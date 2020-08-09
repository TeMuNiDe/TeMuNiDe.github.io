var scrollTimer = -1;
function autoScroll(pos){


if(scrollTimer!=-1){
clearTimeout(scrollTimer);
}
scrollTimer = setTimeout(function(){
//    console.log("position::"+pos);
      if(pos<0.1){
        var target  = "#page-home";
      }
      else if(pos<.3){
      var target  = "#page-about";
      }else if(pos<.5){
        var target  = "#page-hackathon";
      }else if(pos<.7){
        var target  = "#page-events";
      }else if(pos<.9){
        var target  = "#page-registration";
      }else{
        var target  = "#page-contact";
      }
      var active = target.split("-")[1];
      $(".menu-item").each(function(){
      $(this).removeClass('active');
    });
      $('[data-target='+active+']').addClass('active');
      var left = $(target).position().left;
      var whole = $("#top-layer").width();
      var percent = (left/whole)*height;
    //  console.log("calculated::"+percent);
       $('html, body').animate({scrollTop: percent}, 200);
},500);
}
