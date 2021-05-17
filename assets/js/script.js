AOS.init();

/* 
=========================================================================================================
																					FEATURE
=========================================================================================================
*/
	// Navigation
  $(document).ready(function() {
    $('nav .burger').click(function() {
      $(".sideNav").addClass("active");
    })
    $('nav .closeNav').click(function() {
      $(".sideNav").removeClass("active");
    })
  });
	// Go Down
	$('#chevronDown').click(function(){
		$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
		}, 1500);
	});
	$('#chevronDown1').click(function(){
		$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
		}, 1500);
	});
	$('#chevronDown2').click(function(){
		$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
		}, 1500);
	});
	$('#chevronDown3').click(function(){
		$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
		}, 1500);
	});
	// Go Top
	$(document).ready(function(){
		$(function () {
				// scroll body to 0px on click
				$('a#compBaTTop').click(function () {
						$('body,html').animate({
								scrollTop: 0
						}, 2000);
						return false;
				});
		});
	});

	// Home > Category
	$(document).ready(function() {
		$('#mainHome .homeCategory.func01').hover(function() {
			$('#mainHome .homeCategory.func01 .overlay').addClass('active');
			$('#mainHome .homeCategory.func01 .link').addClass('active');
		}, function() {
			$('#mainHome .homeCategory.func01 .overlay').removeClass('active');
			$('#mainHome .homeCategory.func01 .link').removeClass('active');
		});
		$('#mainHome .homeCategory.func02').hover(function() {
			$('#mainHome .homeCategory.func02 .overlay').addClass('active');
			$('#mainHome .homeCategory.func02 .link').addClass('active');
		}, function() {
			$('#mainHome .homeCategory.func02 .overlay').removeClass('active');
			$('#mainHome .homeCategory.func02 .link').removeClass('active');
		});
	});

	// Developer > VMaC
  $(function(tabs){
		/* Content Hide and Show*/
    $('#mainDeveloper .developerVMaC .tabsDeveloper #tabsNav .navList').hover(function(){
      $('#mainDeveloper .developerVMaC .tabsDeveloper .tabsContent').hide();
			$('#mainDeveloper .developerVMaC .tabsDeveloper .imageDef').hide();
      $("#mainDeveloper .developerVMaC .tabsDeveloper #tabsNav .navList").removeClass("active");
      $(this).addClass("active");
      var $targetTab = $('#tabsVMaC-'+$(this).attr('target'));
      $targetTab.fadeIn(200);
    });
  });

	// Virtual > Product
  $(function(tabs02){
		/* Content Hide and Show*/
    $('#mainVirtual .virtualProduct .tabsVPrd #tabsNav .navList').click(function(){
      $('#mainVirtual .virtualProduct .tabsVPrd .tabsContent').hide();
      $("#mainVirtual .virtualProduct .tabsVPrd #tabsNav .navList").removeClass("active");
      $(this).addClass("active");
      var $targetTab = $('#tabsVPrd-'+$(this).attr('target'));
      $targetTab.fadeIn(200);
    });
  });

/* 
=========================================================================================================
																					CAROUSEL
=========================================================================================================
*/
$('.carouselOneSlider').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: true,
	loop: true,
	nav: true,
	dots: true,
	animateOut: 'fadeOut',
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeft.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRight.png'>"
	],
	responsive:{
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.carouselOneSliderWhite').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: true,
	loop: true,
	nav: true,
	dots: true,
	animateOut: 'fadeOut',
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeftWhite.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRightWhite.png'>"
	],
	responsive:{
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.carouselStagePadding').addClass('owl-carousel owl-theme').owlCarousel({
	stagePadding: 30,
	margin: 0,
	responsiveClass: true,
	autoplay: false,
	loop: false,
	nav: true,
	dots: true,
	left: -30,
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeftWhite.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRightWhite.png'>"
	],
	responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:1
			}
	}
})
$('.carouselSlideSlider').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: true,
	autoplaySpeed: 3000,
	autoplayTimeout: 8000,
	loop: true,
	nav: true,
	dots: true,
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeft.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRight.png'>"
	],
	responsive:{
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.carouselProductSlider').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: false,
	loop: true,
	nav: true,
	dots: true,
	animateOut: 'fadeOut',
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeftWhite.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRightWhite.png'>"
	],
	responsive:{
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.carouselHomeLocation').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: true,
	loop: true,
	nav: true,
	dots: true,
	animateOut: 'fadeOut',
	autoplayTimeout: 3000,
	navText: [
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowLeft.png'>",
		"<img src='https://golfislandpik.netlify.app/assets/images/icon/arrowRight.png'>"
	],
	responsive:{
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});


/* 
=========================================================================================================
																					FILTER
=========================================================================================================
*/
	// Product
		$(document).ready(function(){
			var filterActive;
			var clone = $(".filter-cat-results .f-cat").clone(); // making zeh' clones!
			// $(".filter-cat-results .f-cat").remove();
			// $("body").append(clone);

			function filterCategory(cat1, cat2, cat3) {
				// reset results list
				$('.filter-cat-results .f-cat').removeClass('active');
				// the filtering in action for all criteria
				var selector = ".filtering .f-cat";
				if (cat1 !== 'cat-all') {
					selector = '[data-cat=' + cat1 + "]";
				}
				if (cat2 !== 'cat-all') {
					selector = selector + '[data-cat2=' + cat2 + "]";
				}
				if (cat3 !== 'cat-all') {
					selector = selector + '[data-cat3=' + cat3 + "]";
				}
				// show all results
				$(selector).addClass('active');
				// reset active filter
				filterActive = cat1;
			}
			// start by showing all items
			$('.filtering .f-cat').addClass('active');
			// call the filtering function when selects are changed
			$('.filtering select').change(function() {
				filterCategory($('.filtering select.cat1').val(), $('.filtering select.cat2').val(), $('.filtering select.cat3').val());
			});
		});

	// News
		$(document).ready(function(){
			var filterActive2;
			function filterCategory2(newsCat1, newsCat2) {
				// reset results list
				$('.filter-cat-results2 .f-cat2').removeClass('active');
				// the filtering in action for all criteria
				var selector = ".filtering2 .f-cat2";
				if (newsCat1 !== 'cat-all2') {
					selector = '[data-newsCat=' + newsCat1 + "]";
				}
				if (newsCat2 !== 'cat-all2') {
					selector = selector + '[data-newsCat2=' + newsCat2 + "]";
				}
				// show all results
				$(selector).addClass('active');
				// reset active filter
				filterActive2 = newsCat1;
			}
			// start by showing all items
			$('.filtering2 .f-cat2').addClass('active');
			// call the filtering function when selects are changed
			$('.filtering2 select').change(function() {
				filterCategory2($('.filtering2 select.newsCat1').val(), $('.filtering2 select.newsCat2').val());
			});
		});