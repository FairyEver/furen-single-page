$(function(){
	var a = -2; 
	var date1 = new Date();
	time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
	var date2 = new Date(date1);
	date2.setDate(date1.getDate()+a);
	var time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
	var m = date2.getMonth()+1;
	var d =  date2.getDate();
	$(".month02").html(m);
	$(".day02").html(d);
});
$(function(){
	var a = 2; 
	var date1 = new Date();
	time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
	var date2 = new Date(date1);
	date2.setDate(date1.getDate()+a);
	var time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
	var m = date2.getMonth()+1;
	var d =  date2.getDate();
	$(".month").html(m);
	$(".day").html(d);
});