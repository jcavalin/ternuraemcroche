$(document).ready(function() {
	'use strict';
	/*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay').prepend('<span class="bg"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    $('.has-tooltip').tooltip();
    $('.has-popover').popover({
	    trigger: 'focus'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
    /*-----------------------------------------------------------------------------------*/
	function enableIsotope() {
	  var $portfoliogrid = $('.portfolio .isotope');
	  $('.portfolio .isotope-filter').each( function( i, buttonGroup ) {
	    var $buttonGroup = $( buttonGroup );

	    var grid = $buttonGroup.data('target');
	    $(grid).imagesLoaded( function() {
	      $(grid).isotope({
	        itemSelector: '.item',
	        percentPosition: true,
	        transitionDuration: '0.7s',
	        masonry: {
	            columnWidth: $portfoliogrid.width() / 12
	        },
	        layoutMode: 'masonry'
	      })
	    });
	    $(window).resize(function() {
	        $portfoliogrid.isotope({
	            masonry: {
	                columnWidth: $portfoliogrid.width() / 12
	            }
	        });
	    });
	    $(window).on("load", function() {
			$portfoliogrid.isotope({
	            masonry: {
	                columnWidth: $portfoliogrid.width() / 12
	            }
	        });
		});
	    $buttonGroup.on( 'click', '.button', function() {
	      var $this = $( this );
	      var filterValue = $this.attr('data-filter');
	      $(grid).isotope({ filter: filterValue })
	      $buttonGroup.find('.active').removeClass('active');
	      $this.addClass('active');
	    });
	  });

	};
	enableIsotope();
    /*-----------------------------------------------------------------------------------*/
    /*	GO TO TOP
    /*-----------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'linear',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationInSpeed: 200,
        // Animation in speed (ms)
        animationOutSpeed: 200,
        // Animation out speed (ms)
        scrollText: '<span class="btn btn-square btn-rounded btn-icon"><i class="fa fa-arrow-circle-up"></i></span>',
        // Text for element, can contain HTML
        scrollTitle: 'Ir para o início',
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
});