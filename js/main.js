$(document).ready(function(){


  $(function() {
      $(".slidetabs").tabs(".images > div", {

    // enable "cross-fading" effect
    effect: 'fade',
    fadeOutSpeed: "slow",

    // start from the beginning after the last tab
    rotate: true

    // use the slideshow plugin. It accepts its own configuration
    }).slideshow();
    });



});




