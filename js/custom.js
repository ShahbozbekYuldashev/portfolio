$(function () {
	"use strict";
	// typing js part 
	$(".typed").typed({
		strings: ["SHAHBOZBEK", "DEVELOPER", "CODER", "DESIGNER"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {}
	});
	// Portfolio
	$(window).on('load', function () {
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.portfolioFilter a').on('click', function () {
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	});
	//animation scroll js
	var html_body = $('html, body');
	$('.navbar a , .scroll-down a , .backtotop a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 25
				}, 1500);
				return false;
			}
		}
	});
	// preloader
	$(window).on('load', function () {
		$('.loder').delay(1000).fadeOut(1000);

	});

	// Closes responsive menu when a scroll link is clicked
	$('.nav-link').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

	// smooth scroll js 
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		var stikey = $('.sticky-top');

		if (scrolling >= 100) {

			$(stikey).addClass("nav-bg");

		} else {

			$(stikey).removeClass("nav-bg");
		}
		if (scrolling > 50) {
			$('.backtotop').fadeIn(500);
		} else {
			$('.backtotop').fadeOut(500);
		}
	});
	// testimonial slider js
	$('.testimonial-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		dots: false,
		arrows: true,
		nextArrow: '.a-r',
		prevArrow: '.a-l',
	});
	//scorllspy js
	$('body').scrollspy({
		target: ".navbar",
		offset: 50,
	});
	// video player js
	jQuery("#bgndVideo").YTPlayer();
	// lightbox js
	$('.venobox').venobox();

});
