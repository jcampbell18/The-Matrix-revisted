/*
 * determining screen size, and adjusting video (responsive)
 */
var screenWidth = $(window).width();
var videoWidth = 640;
var videoHeight = 360;
var aspectRatio = videoWidth/videoHeight;

if (screenWidth < 640) {
    videoWidth = screenWidth * .93;
    videoHeight = videoWidth / aspectRatio;
}

console.log('Screen width: ' + screenWidth);
console.log('Video (w x h): ' + videoWidth + ' x ' + videoHeight);

/* Media Element Player Plugin
* Reference: https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md
*/
$('#mediaplayer').mediaelementplayer({

    defaultVideoWidth: videoWidth,
    defaultVideoHeight: videoHeight
   
});

// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );
