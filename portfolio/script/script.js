$(function(){
	//메뉴
	$('.home .fa-circle').click(function(){
		$('.lnb-wrap').addClass('active');
	});
	$('.nav_btn').click(function(){
		$('.lnb-wrap').addClass('active');
	});
	$('.close-btn').click(function(){
		$('.lnb-wrap').removeClass('active');
	});
	$('.lnb-wrap .fa-circle').click(function(){
		$('.lnb-wrap').removeClass('active');
	});
	
	//메뉴 이동
	var $menu = $('.lnb li'),
		$contents = $('.scroll-menu');

	$menu.click(function(x){
		x.preventDefault();
		var idx = $(this).index();
		var section = $contents.eq(idx)
		var sectionDistance = section.offset().top;
		$('html,body').stop().animate({scrollTop:sectionDistance});
	});

	//about svg
	var chart = $('.chart');
	var chartOST = chart.offset().top - 700;
	var excuted = false;
	console.log(excuted);
	
	$(window).scroll(function(){
		var currentSCT = $(this).scrollTop();
		if(currentSCT >= chartOST){
			if(excuted == false){
			   chart.each(function(){
					var item = $(this);
					var title = item.find('h2');
					var targetNum = title.attr('data-num');
					var circle = item.find('circle');
		
					$({rate:0}).animate({rate:targetNum},
						{
							duration:1500,
							progress:function(){
								var now = this.rate;
								var amount = 377 - (377*now/100);
								console.log(now);
								title.text(Math.floor(now));
								circle.css({strokeDashoffset:amount});
							}
						});	
				});
				excuted = true;
			}
			console.log(excuted);
		}
	});

	//포트폴리오 슬라이드
	$('.slider_pc').bxSlider({
		auto:false,
		pause:3800,
		touchEnabled: (navigator.maxTouchPoints>0)
	});
	
	//디자인 탭메뉴
	const tabs = document.querySelectorAll("[data-tab-target]");
	const tabcon = document.querySelectorAll("[data-tab-content]");
	tabs.forEach((tab) => {
  		tab.addEventListener("click", () => {
    		const target = document.querySelector(tab.dataset.tabTarget);
    		tabcon.forEach((tabc_all) => {
      			tabc_all.classList.remove("active");
    		});

    	target.classList.add("active");
  		});
	});
	
	//디자인 모달
	function Popup__init(no) {
		$('.modal-' + no).click(function(){
			$('.contents-' + no).addClass('active');
			$('html').addClass('not-scroll');
		});
		
		$('.contents-' + no + ' .modal-btn-close, .contents-' + no).click(function(){
			$('.contents-' + no).removeClass('active');
			$('html').removeClass('not-scroll');
		});
		
		$('.contents-' + no + ' .modal-content').click(function(){
			return false;
		});
	}
	Popup__init(1);
	Popup__init(2);
	Popup__init(3);
	Popup__init(4);
	Popup__init(5);
	Popup__init(6);
	Popup__init(7);
	Popup__init(8);
	Popup__init(9);
	Popup__init(10);
	Popup__init(11);
	Popup__init(12);
	Popup__init(13);
	Popup__init(14);
});