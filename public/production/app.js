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

function isTouchDevice() {

    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);

}

var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
var isExplorer = navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('rv:11.0') > -1;
var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
var isSafari = navigator.userAgent.indexOf("Safari") > -1;
var isOpera = navigator.userAgent.indexOf("Presto") > -1;
if ((isChrome)&&(isSafari)) { isSafari = false; }

if (thisPage === 'vendors') {

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

		$scope.authenticate = function() {

			$scope.email = 'Not currently available';
			$scope.password = '';

		}

	}]);

}


if (thisPage === 'quote') {

	var app = angular.module('quote', []);

	app.controller('QuoteFormController', ['$scope', '$http', function($scope, $http) {

		$scope.form = {};

		$scope.message = '';

		$scope.showMessage = false;

		$scope.messageFlair = 'error';

		$scope.sendEmail = function() {

			if (!$scope.validate()) {

				return false;

			}

			$scope.messageFlair = '';
			$scope.message = 'Sending...';
			$scope.showMessage = true;

			$http.post('/quote', $scope.form).success(function(response) {

				$scope.alert('Thank you, we will get back to you.', true);

				$scope.form = {};

			}).error(function(response) {

				$scope.alert('Sorry, something went wrong on our end. Please try again later.', false);

			});

		}

		$scope.alert = function(message, success) {

			$scope.message = message;

			if (success) {

				$scope.messageFlair = 'success';	

			} else if (success === false) {

				$scope.messageFlair = 'error';

			}
	
			$scope.showMessage = true;
			
		}

		$scope.validate = function() {

			console.log("checking validity");

			if (!$scope.form.name) {

				$scope.alert('please enter a name', false);

				return false;

			}

			if (!$scope.form.email) {
		
				$scope.alert('please enter an email address', false);
		
				return false;

			}

			if (!$scope.form.phone) {

				$scope.alert('please enter a phone number', false);

				return false;

			}

			if (!$scope.form.location) {

				$scope.alert('please enter a city and state', false);

				return false;

			}

			if (!$scope.form.description) {

				$scope.alert('please enter a description', false);

				return false;

			}

			$scope.showMessage = false;
			$scope.message = '';

			return true;

		}

	}]);


}


var viewport = {

	getIndicator : function() {

		var bodyElement = $('body').get(0);
		var indicatorString = window.getComputedStyle(bodyElement,':after').content;

		// Firefox keeps quotation marks in string, remove them here.
		var indicator = indicatorString.replace(/"/g, "").replace(/'/g, "");
 
		return indicator;

	},

	is : {

		small : function() {

			var indicator = viewport.getIndicator();

			if (String(indicator) == "small") {

				return true;

			} else {

				return false;

			}

		},

		medium : function() {

			var indicator = viewport.getIndicator();

			if (String(indicator) == "medium") {

				return true;

			} else {

				return false;

			}

		},

		large : function() {

			var indicator = viewport.getIndicator();

			if (String(indicator) === "large") {
		
				return true;

			} else {
				
				return false;

			}

		}

	}
	
}


// Smooth scrolling to anchor tag
$('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);

		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		if (target.length) {

			$('html,body').animate({ scrollTop: target.offset().top }, 1000);

			MobileNav.close();

        	return false;

		}

    }

});

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function( callback ){
	            				window.setTimeout(callback, 1000 / 60);
          					};


function mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else {
		return false;
	}
}

var Photos = {

	init : function() {

		this.improvedParallax();

		Photos.loop = requestAnimationFrame(Photos.improvedParallax);

	},

	elements : $(".photo"),

	improvedParallax : function() {

		var distance = $(document).scrollTop();
		var windowHeight = $(window).height();
		var speed = 0.05;

		for (var i = 0; i < Photos.elements.length; i++) {

			var parentOffset = Photos.elements.eq(i).parent().offset().top;

			if (distance > parentOffset - windowHeight && distance < parentOffset + (windowHeight * 2)) {

				var startingDistance = parentOffset;
				var photoHeight = Photos.elements.eq(i).height();
				var moveAmount = (distance - (distance * speed)) - (startingDistance - (startingDistance * 0.038));
				
				Photos.elements.eq(i).css('transform', 'translate(-50%,' + moveAmount + 'px)');

			}

		}

		Photos.loop = requestAnimationFrame(Photos.improvedParallax);

	}
}

var Mast = {

	init : function() {

		Mast.loop = requestAnimationFrame(Mast.fixState);
		Mast.transparentLoop = requestAnimationFrame(Mast.transparentState);
		Mast.navPositionLoop = requestAnimationFrame(Mast.navPosition);

		console.log("Mast is being initialized in the object");
	},

	reset : function() {

		cancelAnimationFrame(Mast.loop);

	},

	element : $(".nav"),

	container : $(".nav").find('.container'),

	listItems : $(".nav").find('li'),

	listItemsContainer : $(".nav").find('nav'),

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
			
			Mast.element.addClass('nav-fixed');
			Mast.listItemsContainer.addClass('shifted');

		} else {

			Mast.element.removeClass('nav-fixed');
			Mast.listItemsContainer.removeClass('shifted');
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

			// //This is here because the image on the vendors page is too dark...sorry. client.
			// if (thisPage === 'vendors') Logo.goDark();

		} else {

			Mast.element.addClass('nav-opaque').removeClass('nav-transparent');
			Mast.listItems.removeClass('darken-at-contact');
			Mast.contactListItem.removeClass('contact-lighter');
			Mast.requestQuoteButton.hide();
			Mast.pageElements.show();

			// //This is here because the image on the vendors page is too dark...sorry. client.
			// if (thisPage === 'vendors') Logo.goLight();

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
		var moveAmount = distanceScrolled;

		Logo.element.css('top', moveAmount + 'px');

		Logo.loop = requestAnimationFrame(Logo.fixed);

	},

	goDark : function() {

		Logo.element.attr('src', assetPath + 'img/script-logo.png');

	}, 

	goLight : function() {

		Logo.element.attr('src', assetPath + 'img/script-logo-white.png');

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


var Captions = {

	init : function() {

		Captions.setStartPosition();

		requestAnimationFrame(Captions.push);

	},

	elements : $(".photo-caption-animated"),

	setStartPosition : function() {

		Captions.elements.each(function(index) {

			var i = index + 1;
			var distance = 0;
			var windowHeight = $(window).height();

			if ($(this).hasClass('first-story-caption')) {

				distance = (windowHeight * i) - ((windowHeight * 0.25) + $(this).height());

			} else {

				distance = (windowHeight * i) - ((windowHeight * 0.1) + $(this).height());

			}

			$(this).css('top', distance + 'px').attr('data-top', distance);

		});

	},

	push : function() {

		var distance = $(document).scrollTop();

		Captions.elements.each(function(index) {

			var height = $(this).height();
			var nextTop = parseInt($(this).next().attr('data-top'));
			var newTop = nextTop - height;
			var defaultTop = $(this).attr('data-top');
			var offset = 180;

			if (distance > (defaultTop - offset) && distance < (nextTop) - (height + offset)) {
				// distance scrolled is past activation point
				$(this).css({position : 'fixed', top : offset + 'px'});
			
			} else if (distance > (nextTop) - (height + offset)) {
				// distance scrolled is past next elements activation point, fix this element
				$(this).css({position : 'absolute', top : newTop + 'px' });

			} else {

				$(this).css({top : defaultTop + 'px', position : 'absolute' });

			}

		});

		requestAnimationFrame(Captions.push);

	}

}

var MobileNav = {

	init : function() {

		if (isTouchDevice()) {

			MobileNav.hamburger.on('touchstart', function() {

				if ($(this).hasClass('open')) {

					MobileNav.close();

				} else if ($(this).hasClass('closed')) {

					MobileNav.open();

				}

			});

		} else {

			MobileNav.hamburger.click(function() {

				if ($(this).hasClass('open')) {

					MobileNav.close();

				} else if ($(this).hasClass('closed')) {

					MobileNav.open();

				}

			});

		}

		

	},

	hamburger : $("#mobile-hamburger"),

	body : $("#master-container"),

	navbar : $(".navbar"),

	open : function() {

		MobileNav.body.addClass('shifted');
		MobileNav.navbar.addClass('shifted');
		MobileNav.hamburger.addClass('open').removeClass('closed');

	},

	close : function() {

		MobileNav.body.removeClass('shifted');
		MobileNav.navbar.removeClass('shifted');
		MobileNav.hamburger.addClass('closed').removeClass('open');

	}

}

$(document).ready(function() {

	if (viewport.is.large()) {

		if (!isSafari && !isExplorer) {

			Photos.init();	
			Logo.init();

		} else {

			$(".logo").addClass('logo-fixed');
			$(".photo").addClass('fixed');

		}
		
		Team.init();

	}

	if (viewport.is.medium() || viewport.is.large()) {

		Mast.init();

	}

	if (thisPage === 'home' || thisPage === 'pacific.home' && viewport.is.large()) {

		Captions.init();

	}
		
	if (thisPage === 'capabilities' || thisPage === 'pacific.home') {

		ImageContainers.init();
		Parts.init();

	}

	MobileNav.init();

	$(".data-img").dataImg({

		sml : 500,
		med : 900,
		lrg : 1200,
		resize : true

	});

});

$(window).resize(function() {

	if (thisPage === 'capabilities') {

		ImageContainers.init();

	}

	if (thisPage === 'home' && viewport.is.large()) {

		Captions.init();

	}


});








