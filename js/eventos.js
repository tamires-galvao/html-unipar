	$(document).ready(function(){
			/*('.banner').cycle;*/
			$('.banner').cycle({ 
	    		fx:    'curtainX', 
	    		sync:  false, 
	    		delay: -2000 
			});
			$(".menu").css({
				top:"-60px"
				});
			$(".menu").animate({
				top:"0px"
			}, 1000);

			$(".logo img").css({
				opacity:0,
				marginLeft: "-1400px"
			});
			$(".logo img").animate({
				opacity:1,
				marginLeft: "0px"
			}, 2000, "easeOutBounce");
			$(".ultimos-produtos .item").css({
				opacity:0,
				
			});
			$(".ultimos-produtos .item").animate({
				opacity:1,
			}, 1000)

			$(".banner").css({
				opacity:0,
				height:"0px"
			})
			$(".banner").animate({
				opacity:1,
				height:"399px"
			}, 2000)
		});