$(function(){
	var item1 = $('.reason_wrap .coursebox .course1');
	var item2 = $('.reason_wrap .coursebox .course2');
	var item3 = $('.reason_wrap .coursebox .course3');
	var item4 = $('.reason_wrap .coursebox .course4');

	var item_1 = $('.money_wrap .item .item1');
	var item_2 = $('.money_wrap .item .item2');
	var item_3 = $('.money_wrap .item .item3');
	var item_4 = $('.money_wrap .item .item4');

	item1.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item2.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item3.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item4.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});

	item_1.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item_2.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item_3.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});
	item_4.mouseenter(function(){
		$(this).stop().animate({'top':'-3px'},200);
	}).mouseleave(function(){
		$(this).stop().animate({'top':'0px'},200);
	});

	var backtop = $('.backtop');
	backtop.mouseenter(function(){
		$(this).html('返回顶部');
	}).mouseleave(function(){
		$(this).html('<span></span>');
	});

	var change = $('.nav_wrappers .change');
	change.click(function(){
		$(this).parent().animate({'left':'-100%'},300);
	});


})