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

'use strict';

var app = angular.module('vendor', []);

app.controller('LoginController', ['$scope', function($scope) {

	$scope.filledIn = false;

	$scope.checkForCompletion = function() {

		if ($scope.email && $scope.password) {

			$scope.filledIn = true;

		} else {

			$scope.filledIn = false;			

		}

	}

}]);





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

	listItems : $(".nav").find('li'),

	contactListItem : $("#contact-list-item"),

	requestQuoteButton : $(".nav-request-quote"),

	pageElements : $(".nav-page-elements"),

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
			
			Mast.element.addClass('nav-transparent').removeClass('nav-opaque');
			Mast.listItems.addClass('darken-at-contact');
			Mast.contactListItem.addClass('contact-lighter');
			Mast.pageElements.hide();
			Mast.requestQuoteButton.show();

		} else {

			Mast.element.addClass('nav-opaque').removeClass('nav-transparent');
			Mast.listItems.removeClass('darken-at-contact');
			Mast.contactListItem.removeClass('contact-lighter');
			Mast.requestQuoteButton.hide();
			Mast.pageElements.show();

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
			
			var imagePath = $(this).attr('data-img');

			Team.image.attr('src', imagePath);

		}, function() {

			Team.image.attr('src', Team.defaultImage);

		});

	}

}

$.getDocHeight = function(){
     var D = document;
     return Math.max(Math.max(D.body.scrollHeight,D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
};


var Captions = {

	init : function() {

		Captions.setStartPosition();

		requestAnimationFrame(Captions.push);

	},

	elements : $(".photo-caption"),

	setStartPosition : function() {

		Captions.elements.each(function(index) {

			var i = index + 1;
			var distance = 0;
			var windowHeight = $(window).height();


			if ($(this).hasClass('first-story-caption')) {

				// distance = (($(window).height() * 0.75) * i) - $(this).height();
				distance = (windowHeight * i) - ((windowHeight * 0.25) + $(this).height());

			} else {

				// distance = (($(window).height() * 0.9) * i) - $(this).height();
				distance = (windowHeight * i) - ((windowHeight * 0.1) + $(this).height());

			}

			// console.log(windowHeight - 180);

			$(this).css('top', distance + 'px').attr('data-top', distance);

		});

	},

	push : function() {

		var distance = $(document).scrollTop();

		Captions.elements.each(function(index) {

			var height = $(this).height();
			var nextTop = parseInt($(this).next().attr('data-top'));
			var thisTop = parseInt($(this).css('top'));
			var newTop = nextTop - height;
			var defaultTop = $(this).attr('data-top');

			// distance scrolled is past activation point
			if ( distance > (defaultTop - 150) && distance < (nextTop) - (height + 150) ) {

				$(this).css({position : 'fixed', top : '150px'});
			// distance scrolled is past next elements activation point, fixate this element
			} else if (distance > (nextTop) - (height + 150)) {

				$(this).css({position : 'absolute', top : newTop + 'px' });

			//
			} else {

				$(this).css({top : defaultTop + 'px', position : 'absolute' });


			}

			// console.log($(this).get(0).style.top);
			// console.log(parseInt($(this).css('top')));

		});

		

		requestAnimationFrame(Captions.push);

	}


}


$(document).ready(function() {

	Logo.init();
	Mast.init();
	Team.init();
	Photos.init();

	if (thisPage === 'home') {

		Captions.init();

	}
		
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

	if (thisPage === 'home') {

		Captions.init();

	}

});








