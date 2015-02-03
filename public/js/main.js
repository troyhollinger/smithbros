'use strict';

// Smooth scrolling to anchor tag
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


function mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else {
		return false;
	}
}

var Photos = {

	init : function() {

		this.parallax();

		Photos.loop = requestAnimationFrame(Photos.parallax);

	},

	elements : $(".photo"),

	parallax : function() {

		var distance = $(document).scrollTop();

		Photos.elements.each(function() {

			var startingDistance = $(this).parent().offset().top;
			var photoHeight = $(this).height();
			// var speed = $(this).attr('data-speed') * 10;
			var speed = 0.05;
			var moveAmount = (distance - (distance * speed)) - (startingDistance - (startingDistance * 0.038));
			
			// $(this).css('transform', 'translate(-50%,' + ((distance - (distance / speed)) - (parentDistance - (distance / (speed * ( (speed / 10) * 0.75 ) )))) + 'px)');
			// $(this).css('transform', 'translate(-50%,' + (((distance - (distance / speed)) - (parentDistance - (distance / (speed * ( (speed / 10) * 0.75 ) )))) + ((parentDistance / photoHeight) * 25) ) + 'px)');

			$(this).css('transform', 'translate(-50%,' + moveAmount + 'px)');

		});	

		Photos.loop = requestAnimationFrame(Photos.parallax);

	}
}

var Mast = {

	init : function() {

		Mast.loop = requestAnimationFrame(Mast.fixState);
		Mast.transparentLoop = requestAnimationFrame(Mast.transparentState);
		Mast.navPositionLoop = requestAnimationFrame(Mast.navPosition);
	},

	reset : function() {

		cancelAnimationFrame(Mast.loop);

	},

	element : $(".nav"),

	container : $(".nav").find('.container'),

	previousDistance : 0,
	previousHeight : $(window).height() * 0.20,

	fixState : function() {

		var distance = $(document).scrollTop();

		if (Mast.previousDistance < distance) {
			// scrolling down logic

			var elementHeight = $(window).height() * 0.20;

			// assign storage variables for use in next frame
			Mast.previousDistance = distance;
			Mast.previousHeight = elementHeight;

		} else if (Mast.previousDistance > distance) {
			// scrolling up logic

			var elementHeight = $(window).height() * 0.15;

			// assign storage variables for use in next frame
			Mast.previousDistance = distance;
			Mast.previousHeight = elementHeight;

		} else {
			// not scrolling
			var elementHeight = Mast.previousHeight;

		}
		
		if (distance > ($(window).height() - elementHeight)) {
			// if 
			Mast.element.addClass('nav-fixed');

		} else {

			Mast.element.removeClass('nav-fixed');
		}

		Mast.loop = requestAnimationFrame(Mast.fixState);

	},

	transparentState : function() {

		var distance = $(document).scrollTop();

		// if user has scrolled past the point of mast fixation...
		if (distance >= (document.body.offsetHeight - $(window).height())) {

			// Mast.element.css('background-color', 'transparent')
			Mast.element.addClass('nav-transparent').removeClass('nav-opaque');


		} else {

			// Mast.element.css('background-color', 'white');
			Mast.element.addClass('nav-opaque').removeClass('nav-transparent');

		}

		Mast.transparentLoop = requestAnimationFrame(Mast.transparentState);

	},

	navPosition : function() {
	
		var distance = $(document).scrollTop();	
		var windowHeight = $(window).height() - Mast.element.height();
		var elementPadding = $(window).height() * 0.055;
		var moveAmount = elementPadding + (elementPadding / (windowHeight / distance));

		if (distance < windowHeight) {

			Mast.container.css('padding-top', moveAmount + 'px');

		} else {

			Mast.container.css('padding-top', (elementPadding * 2) + 'px');

		}

		Mast.navPositionLoop = requestAnimationFrame(Mast.navPosition);

	}

}

var Logo = {

	init : function() {

		Logo.loop = requestAnimationFrame(Logo.fixed);

	},

	element : $('.logo'),

	fixed : function() {

		var distanceScrolled = $(document).scrollTop();
		var moveAmount = distanceScrolled + ($(window).height() * 0.01);

		Logo.element.css('top', moveAmount + 'px');

		Logo.loop = requestAnimationFrame(Logo.fixed);

	}

}


var ImageColumns = {

	init : function() {

		requestAnimationFrame(ImageColumns.parallax);

	},

	elements : $(".parts-images-column"),

	parallax : function() {

		var distance = $(document).scrollTop();

		ImageColumns.elements.each(function() {

			var offset = $(this).attr('data-offset');
			var movement = distance * (offset * 0.01);

			$(this).css('transform', 'translate(0,-' + movement + 'px)');

		}); 

		requestAnimationFrame(ImageColumns.parallax);
		
	}

}

var ImageContainers = {

	init : function() {

		this.sizing();

	},

	longElements : $(".long-parts-image-container"),

	shortElements : $(".short-parts-image-container"),

	sizing : function() {

		this.longElements.each(function() {

			$(this).height($(this).width() * 1.25);

		});

		this.shortElements.each(function() {

			$(this).height($(this).width() * 0.8);

		});

	}

}

var Parts = {

	init : function() {

		this.hover();

	},

	elements : $(".parts-image"),

	hover : function() {

		this.elements.hover(function() {

			var zoomLevel = $(this).attr('data-zoom');

			$(this).css('transform', 'scale(' + zoomLevel + ')');

		}, function() {

			$(this).attr('style', '');

		})

	}

}


var Team = {

	init : function() {

		Team.hover();

	},

	elements : $(".team-hover-trigger"),
	image : $("#team-image"),
	defaultImage : $("#team-image").attr('data-default'),

	hover : function() {

		Team.elements.hover(function() {
			console.log('hovered over');
			var imagePath = $(this).attr('data-img');

			Team.image.attr('src', imagePath);

		}, function() {

			Team.image.attr('src', Team.defaultImage);

		});

	}

}


$(document).ready(function() {

	Logo.init();
	Mast.init();
	Team.init();
	Photos.init();
		
	if (thisPage === 'capabilities' || thisPage === 'pacific.home') {

		ImageContainers.init();
		// ImageColumns.init();
		Parts.init();

	}

});

$(window).resize(function() {

	if (thisPage === 'capabilities') {

		ImageContainers.init();

	}

});
