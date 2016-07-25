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
    var logo = document.querySelector( '#logo' );
	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}
    /*
    $("#logo").animate({scrollTop :0}, '500',function(){
         $("#logo").addClass("logo-move");
    });
    */
	function scrollPage() {
		var sy = scrollY();
		
		if ( sy >= changeHeaderOn ) {
            //classie.add( logo, 'logo-shrink' );
            classie.add( logo, 'logo-move' );
			classie.add( header, 'navbar-shrink' );
		}
		else {
            
            //classie.remove( logo, 'logo-shrink' );
            classie.remove( logo, 'logo-move' );
			classie.remove( header, 'navbar-shrink' );
            
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();