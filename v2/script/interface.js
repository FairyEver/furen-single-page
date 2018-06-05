$(function(){
	setTimeout(function(){ 
		$(".leftF").animate({ "left": "0px" },300);
		$(".rightF").animate({ "right": "0px" },300);

		$(".closeL").click(function () {
			$(".leftF").animate({ "left": "-300px" },300);
		});
		$(".closeR").click(function () {
			$(".rightF").animate({ "right": "-150px" }, 300);
		});
	},1000);

	var timeer,num=4;
	$('.mail_wrap em,.mail_wrap p').on('click',function(){
		$(".TC").hide();
		clearInterval(timeer);
		alertTime();
	});
	function alertTime(){
		num--;
		if(num<=0){
			clearInterval(timeer);
			return false;
		}
		timeer=setInterval(function(){
			$(".TC").show();
		},15000);
	}
	// alertTime();

	$(document).ready(function() {  
		var navOffset=$(".nav_wrapper").offset().top;  
		$(window).scroll(function(){  
			var scrollPos=$(window).scrollTop();  
			if(scrollPos >= navOffset){  
				$(".nav_wrapper").addClass("fixed");
			}else{  
				$(".nav_wrapper").removeClass("fixed");
			}  
		});  

	});
})