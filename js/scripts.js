/* Screenshots (random images without duplication)
 * written by Jason Campbell
 */
var limit = 12;
var imagesShown = 3;
var images = [imagesShown.length];
var imagePath = 'img/img';

for (let ix = 0; ix < imagesShown; ix++) {

    var rand = Math.floor(Math.random() * limit);
    let jx = ix - 1;

    while (jx >= 0) {

        while (rand == images[jx]) {

            rand = Math.floor(Math.random() * limit);
            jx = ix;

        }// end inner while loop

        jx--;

    }// end outer while loop

    images[ix] = rand;

    $('#screenshot-link' + (ix+1) ).attr('href', imagePath + images[ix] + '.jpg');
    $('#screenshot-img'  + (ix+1) ).attr( 'src', imagePath + images[ix] + '.jpg');

}// end for loop


/* LightGallery
 * Reference: https://sachinchoolur.github.io/lightGallery/
 */
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


 /* LetteringJS
  * Reference: http://letteringjs.com/
  */ 
$('main>h4').lettering('words');


/* determining screen size, and adjusting video (responsive)
 * written by Jason Campbell
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
