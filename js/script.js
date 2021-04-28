/*global $, jquary, alert*/


$(document).ready(function() {
  
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 450) {
        $('#nav_bar').addClass('navbar-fixed-top');
      }
  
      if ($(window).scrollTop() < 451) {
        $('#nav_bar').removeClass('navbar-fixed-top');
      }
    });
  });

        //Caching The Scroll Top Element
        var scrollButton = $("#scroll-top");
        $(window).on("scroll",function () {

            console.log( $(this).scrollTop() );
            if($(this).scrollTop() >= 700){
                scrollButton.show();
            }
            else{
                scrollButton.hide();
            }
            //click on button to scroll top
        });
        scrollButton.click(function (){
            $("html,body").animate({scrollTop: 0},600);
        });
