$(document).ready(function (){

		 	$(".main").onepage_scroll({
        		sectionContainer: "section",
        		responsiveFallback: 600,
        		loop: true
      		});

            $("#touch").click(function (){
                $(".main").moveTo(2);
            });
        
        	$(".arrow").click(function (){
                $(".main").moveTo(3);
            });

        	$(".logo").click(function (){
                
                $('html, body').animate({
                scrollTop: $(".page1").offset().top
                }, 1000);
            });



        });