// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

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

			var parentDistance = $(this).parent().offset().top;
			var speed = $(this).attr('data-speed') * 10;
			
			$(this).css('transform', 'translate(-50%,' + ((distance - (distance / speed)) - (parentDistance - (distance / (speed * ( (speed / 10) * 0.75 ) )))) + 'px)');

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

			Mast.element.css('background-color', 'transparent')

		} else {

			Mast.element.css('background-color', 'white');

		}

		Mast.transparentLoop = requestAnimationFrame(Mast.transparentState);

	},

	navPosition : function() {
		// TODO replace 50 with percentage of viewport
		var distance = $(document).scrollTop();	
		var windowHeight = $(window).height() - Mast.element.height();
		var moveAmount = 50 + (50 / (windowHeight / distance));

		if (distance < windowHeight) {

			Mast.container.css('padding-top', moveAmount + 'px');

		} else {

			Mast.container.css('padding-top', '100px');

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

		var moveAmount = distanceScrolled + ($(window).height() * 0.04);

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

		console.log("parallax happening.");

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




$(document).ready(function() {

	Photos.init();
	Mast.init();
	Logo.init();

	if (thisPage === 'capabilities') {

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
