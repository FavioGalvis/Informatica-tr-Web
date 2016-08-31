/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-top' ),
                bottom = document.querySelector( '.navbar-bottom' ),
                navbar_logo = document.querySelector( '.navbar-logo'),
		didScroll = false,
		changeHeaderOn = 300;
                changeBottomOn = 30;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
                        classie.add( navbar_logo, 'navbar-logo-shrink');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
                        classie.remove( navbar_logo, 'navbar-logo-shrink');
		}
                if ( sy >= changeBottomOn ) {
                        classie.add( bottom, 'navbar-shrink' );
		}
		else {
                        classie.remove( bottom, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();