$(document).ready(function(){
	$('.mainbanner_slider').bxSlider({
		auto:true,
		pause:3800
	});
	
	$(".imgBox_img").slice(0, 12).show()
	$(".btn").on("click", function(){
		$(".imgBox_img:hidden").slice(0, 12).slideDown()
		if ($(".imgBox_img:hidden").length == 0) {
			$(".btn").fadeOut('slow')
		}
	})
	
	
});