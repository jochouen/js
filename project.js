/**
 * project.js  by  jojo
 */


var project = function(){
	var scroll = function(){
		$('body,html').animate({
			scrollTop: 0
		}, 0);
		
		$('a[href^=#]').click(function() {
			 var speed = 800;
			 var href= $(this).attr("href");
			 var target = $(href == "#" || href == "" ? 'html' : href);
			 $(window).unbind("scroll",showStarMenu);
			 var position = target.offset().top;
			 var MenuClass = $(this).parent().attr("class");
			 $('a img').removeClass("menu_on").css("opacity","0");
			 $("."+ MenuClass + " img").addClass("menu_on").css("opacity","1");
			 $('html,body').animate({scrollTop:position-100}, speed, 'swing',function(){
				 scrollShowStarMenu();
			 });
			 return false;
		});
	};
	
	var scrollShowStarMenu = function(){
		setTimeout(function(){
			$(window).bind("scroll", showStarMenu);
		},0);
	}
	
	var showStarMenu = function(){
		var w_position = null;
		var posArr = new Array();
		posArr["trailer"] = $("#main-contents-movie").offset().top-100;
		posArr["tickets"] = $("#main-contents-tickets").offset().top-100;
		posArr["theater"] = $("#main-contents-theater").offset().top-100;
		posArr["goods"] = $("#main-contents-goods").offset().top-100;
		posArr["link"] = $("#main-contents-link").offset().top-100;
		
		w_position = $(this).scrollTop();
		$('a img').removeClass("menu_on").css("opacity","0");
		if(w_position<posArr["trailer"]){
			 $(".top img").addClass("menu_on").css("opacity","1");
		}else if(w_position>=posArr["trailer"] && w_position < posArr["tickets"]){
			$(".trailer img").addClass("menu_on").css("opacity","1");
		}else if(w_position>=posArr["tickets"] && w_position < posArr["theater"]){
			$(".tickets img").addClass("menu_on").css("opacity","1");
		}else if(w_position>=posArr["theater"] && w_position < posArr["goods"]){
			$(".theater img").addClass("menu_on").css("opacity","1");
		}else if(w_position>=posArr["goods"] && w_position < posArr["link"]){
			$(".goods img").addClass("menu_on").css("opacity","1");
		}else if(w_position>=posArr["link"]){
			$(".link img").addClass("menu_on").css("opacity","1");
		}
	}

	var changeMenu = function(){
		$('a img').mouseover(function(){
			if(!$(this).hasClass('menu_on')){
				$(this).stop().animate({'opacity':'1'}, 300);
			}
		}).mouseout(function(){
			if(!$(this).hasClass('menu_on')){
				$(this).stop().animate({'opacity':'0'}, 600);
			}
		});
	}
	
	var fixedMenu = function(){
		var nav = $("#main-contents-menu");
		var nav2 = $("#main-contents-menu2");
		$(window).scroll(function () {
	        if ($(this).scrollTop() > 645) {
	        	nav.css("visibility","hidden");
	        	nav2.css("display","block");
	        } else {
	        	nav.css("visibility","visible");
	            nav2.css("display","none");
	        }
	    });
	}
	
	var menuPos = function(){
		var win_w = parseInt($(window).width());
		var main = parseInt($("#main-contents-outer").css("width"));
		var nav = $("#main-contents-menu,#main-contents-menu2");
		var leftNum = (win_w -main)*0.5-13;
		
		if(win_w<1021){
			leftNum = -13;
		}
		nav.css("left", leftNum);
	}
	
	var hideHorizontalScroll = function(){
		var win_w = parseInt($(window).width());
		if(win_w>=1000){
			$("html").css("overflow-x","hidden");
		}else{
			$("html").css("overflow-x","auto");
		}
	}
	
	var resize = function(){
		$(window).resize(function() {
			menuPos();
			hideHorizontalScroll();
		});
	}
	
	var init = function(){
		resize();
		menuPos();
		fixedMenu();
		scroll();
		changeMenu();
		hideHorizontalScroll();
		scrollShowStarMenu();
		showStarMenu();
	}
	
	init();
};
