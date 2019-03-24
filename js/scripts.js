/* Navigation */
/* TODO:    on hover, activate matrix gif
 *          on mouse press, deactivate matrix gif

$('header').
$('header').css();
*/

/* Screenshots
 * TODO:   lightbox
 *         random images?
 */ 
// lightGallery
$('#lightgallery').lightGallery({
    thumbnail: false,
    fullScreen: true,
    animateThumb: false,
    showThumbByDefault: false,
    zoom: false,
    download: false,
    mode: 'lg-zoom-in-big',
    scale: 1
});


/* Polygon grid 
 * TODO:    on hover, display actor's name
 *          lightbox?
 *          link to imdb?f
 */

 /* LetteringJS
  * TODO:   apply somewhere...
  */ 


/*
 * determining screen size, and adjusting video (responsive)
 */
var screenWidth = $(window).width();        
var videoWidth = 640;                       // max width
var videoHeight = 360;                      // max height
var aspectRatio = videoWidth/videoHeight;

if (screenWidth < 640) {
    videoWidth = screenWidth * .93;
    videoHeight = videoWidth / aspectRatio;
}

$('video').css({
    'width': videoWidth,
    'height': videoHeight
})

/* Media Element Player Plugin
* Reference: https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md
*/
$('#mediaplayer').mediaelementplayer({

    defaultVideoWidth: videoWidth,
    defaultVideoHeight: videoHeight
   
});

// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );
