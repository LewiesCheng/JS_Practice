/**
 * 飘雪动画
 * 随机值：
 * 1.雪片产生的时候（下落后）距离浏览器的left
 * 2.雪片的大小
 * 3.雪片的透明度
 * 4.雪花下落的速度
 */

var flakeColor = "#fff";//雪花的颜色
var newOn = 200; //间隔多长时间产生一个雪片
var flake = $("<div></div>").css("position","absolute").html("❄");//雪花的对象
$(function(){
	var documentWidth = $(document).width();//浏览器的宽度
	var documentHeight = $(document).height();
	setInterval(function(){
		var startLeft = Math.random()*documentWidth;//雪片一开始的时候距离浏览器的left
		var endLeft = Math.random()*documentWidth;//雪片下落后距离浏览器的left
		var flakeSize = 5 + Math.random() * 50;  //雪花大小
		var startOpacity = 0.7 + 0.3*Math.random();  //雪花一开始透明度 >=0.7
		var endOpacity = 0.4 + 0.3*Math.random();  //雪花结束透明度 <0.7
		var durationTime = 4000 + 6000 * Math.random();//雪花下落的时间
		flake.clone().appendTo($("body")).css({
			"left":startLeft,
			"color":flakeColor,
			"top":"-55px",
			"font-size":flakeSize,
			"opacity":startOpacity
		}).animate({
			"left":endLeft,
			"top":documentHeight,
			"opacity":endOpacity
		},durationTime,function(){
			$(this).remove();
		});
	}, newOn);
});