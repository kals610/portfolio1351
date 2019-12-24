$(document).ready(function(){
	var goPage;
	var topPos;
	var t=0;
	var n=0;
	var num=1;
	var link="";
	var firstFlag=false;
	var ht = $(window).height();

	$("#button1").click(function(){
		var winHeight = $(window).height();
		goScroll(winHeight, 1.025);
		return false;
	});
	loopBtn();
	function loopBtn() {
		// $("#button1").animate({bottom:50},1000).animate({bottom:30},1000,loopBtn);
	}
	function goScroll(a,b) {
		$("html,body").stop().animate({scrollTop:a * b}, 300);
	}

	setTimeout(function(){
		$("html").animate({scrollTop: 0},800, function(){
			firstFlag=true;
			$(window).trigger("scroll");
		});
	}, 10);


	$(window).scroll(function(){
		if(firstFlag == false){
			return;
		}
		t=$(window).scrollTop();

		if(t < $("#portfolioWrap").offset().top-200){
			n=0; // 1
		}
		else if(t < $("#aboutmeWrap").offset().top-200){
			n=1; // 2

		}
		else{
			n=2; // 3
			if(n == $(window).height() - $("#footerWrap").offset().top-200){
			}
		}

		if(n == 1){
			$(".portfolio .title").addClass("active");
			$(".contents > li").addClass("active");
		}
		else if(n >= 1){
			$(".aboutme .title").addClass("active");
			$(".me_img").addClass("active");
			$(".intro_me").addClass("active");
			$(".intro").addClass("active");
		}



	});
	$("#top_menu > ul > li > a").click(function(e){
		e.preventDefault();
		link=$(this).attr("href");
		$("body, html").animate({scrollTop:$(link).offset().top}, 400);

		num=$(this).parent().index()+1;
		return false;
	});

	$(".web_mg").hover(
		function(e){
			e.preventDefault();
			$(this).addClass("active");
		},
		function(e){
			e.preventDefault();
			$(this).removeClass("active");
		}
	);







});
