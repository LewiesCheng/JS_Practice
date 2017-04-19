/**
 * ÂÖ²¥Í¼Æ¬
 */

var i = 0;
var timer;
$(function(){
	"use strict";
	$(".pic").eq(0).show().siblings().hide();
	StartLunbo();
	
	$("#tags li").hover(function(){
		clearInterval(timer);
		i = $(this).index();
		ShowPicTag();
	},function(){
		StartLunbo();
	});
	$(".left").click(function(){
		clearInterval(timer);
		i--;
		if(i === -1){
			i = 3;
		}
		ShowPicTag();
		StartLunbo();
	});
	$(".right").click(function(){
		clearInterval(timer);
		i++;
		if(i === 4){
			i = 0;
		}
		ShowPicTag();
		StartLunbo();
	});
});

function ShowPicTag(){
	"use strict";
	$(".pic").eq(i).stop(true,true).fadeIn(300).siblings().stop(true,true).fadeOut(300);
	$("#tags li").eq(i).addClass("bg").siblings().removeClass("bg");
}

function StartLunbo(){
	"use strict";
	timer = setInterval(function(){
		i++;
		if(i === 4){
			i=0;
		}
		ShowPicTag();
	},4000);
}