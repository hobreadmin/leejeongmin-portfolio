$(function(){
	//search 창
	$('.right_lnb>a').click(function(){
		$('#search').addClass('view');
	});
	$('.search_content>a').click(function(){
		$('#search').removeClass('view');
	});
	
	//moblie 메뉴 오픈
	$('.mo_nav_hbg').click(function(){
		$('.moblie_nav_menu').addClass('view');
	});
	$('.fa-times').click(function(){
		$('.moblie_nav_menu').removeClass('view');
	});
	
	$('.acc_nm').click(function(){
		$(this).next().slideToggle().siblings('.sub_menu').slideUp();
	});
	
	//메인 슬라이드 배너
	$('.slider_pc').bxSlider({
		mode:'fade',
		auto:true,
		pause:3800,
		touchEnabled: (navigator.maxTouchPoints>0)
	});
	
	$('.slider_mo').bxSlider({
		mode:'fade',
		auto:true,
		pause:3800,
		touchEnabled: (navigator.maxTouchPoints>0)
	});
	
	//new&best 슬라이드 배너
	$('.multiple_slider').bxSlider({
		minSlides:4,
		maxSlides:5,
		moveSlides:1,
		slideWidth:240,
		pager:false,
		touchEnabled: (navigator.maxTouchPoints>0)
	});
	
	//인테리어 슬라이드 배너
	$('.interior_slider').bxSlider({
		auto:true,
		pause:3800
	});
	
	//FAQ 아코디언 탭 메뉴
	$('.fml_title').click(function(){
		$(this).next().slideToggle().siblings('.fml_submenu').slideUp();
	});
	
	//new&bast 메뉴 슬라이드 배너
	$('.newbest_menu_silder').bxSlider({
		auto:true,
		pause:3800
	});
	
	
	$(".col").slice(0, 6).show()
	$(".btn").on("click", function(){
		$(".col:hidden").slice(0, 6).slideDown()
		if ($(".col:hidden").length == 0) {
			$(".btn").fadeOut('slow')
		}
	})
	
	$(".notice_list").slice(0, 10).show()
	$(".bttn").on("click", function(){
		$(".notice_list:hidden").slice(0, 10).slideDown()
		if ($(".notice_list:hidden").length == 0) {
			$(".bttn").fadeOut('slow')
		}
	})
	
	$('.tr_list').click(function(){
		$(this).next().slideToggle().siblings('.sub_table').slideUp();
	});
	
	$(".tr_list").slice(0, 10).show()
	$(".showmore_btn").on("click", function(){
		$(".tr_list:hidden").slice(0, 10).slideDown()
		if ($(".tr_list:hidden").length == 0) {
			$(".showmore_btn").fadeOut('slow')
		}
	})
});