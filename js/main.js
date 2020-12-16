jQuery(document).ready(function () {

	// Make the overlay the size of the body
	var $body = $(this.ie6 ? document.body : document); // using document in ie6 causes a crash

	$("body").resize(function(e){
		$("#lightbox-overlay").append("width = " + $body.width() + "<br>" + "height = " + $body.height())
	});


	// Get the window dimensions
	var $window = $(window);
	var wWidth = $window.width();
	var wHeight = $window.height();

	
	// slides
	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide, 5000);

	function nextSlide() {
		goToSlide(currentSlide + 1);
	}

	function previousSlide() {
		goToSlide(currentSlide - 1);
	}

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		currentSlide = (n + slides.length) % slides.length;
		slides[currentSlide].className = 'slide showing';
	}


	var playing = true;
	var pauseButton = document.getElementById('pause');

	function pauseSlideshow() {
		// pauseButton.innerHTML = '&#9658;'; // play character
		playing = false;
		clearInterval(slideInterval);
	}

	function playSlideshow() {
		// pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
		playing = true;
		slideInterval = setInterval(nextSlide, 2000);
	}

	pauseButton.onclick = function () {
		if (playing) {
			pauseSlideshow();
		} else {
			playSlideshow();
		}
	};

	var next = document.getElementById('next');
	var previous = document.getElementById('prev');

	next.onclick = function () {
		pauseSlideshow();
		nextSlide();
	};
	previous.onclick = function () {
		pauseSlideshow();
		previousSlide();
	};

	/* How to Handle Hashtags */
	jQuery(window).hashchange(function () {
		var hash = location.hash;
		jQuery('a[href=' + hash + ']').trigger('click');
	});
	jQuery('section.content.hide').hide();
	/* Main Navigation Clicks */
	jQuery('.main-nav ul li a').click(function () {
		link = jQuery(this).attr('href').substr(1);
		console.log(link)

		if (!jQuery('section.content.show, section#' + link).is(':animated')) {
			jQuery('.main-nav ul li a').removeClass('active'); //remove active
			jQuery('section.content.show').addClass('show').animate({
				'opacity': 0
			}, {
				queue: false,
				duration: 800,
				complete: function () {
					jQuery('section.content.show').hide();
					jQuery('a[href="#' + link + '"]').addClass('active'); // add active
					jQuery('section#' + link).show();
					if (link == 'contact') {
						$('#map').fadeIn(800);
						console.log('fadeIn')
					} else {
						$('#map').fadeOut(800);
					}
					jQuery('section#' + link).addClass('show').animate({
						'opacity': 1
					}, {
						queue: false,
						duration: 1000
					});
				}
			});
		}
	});

});