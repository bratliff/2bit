	//* 1st greensock animation //
      var timelineLite = $("#timelinelite"),
        tagline = $("#tagline span"),
        playBtn = $("#playBtn"),
        pauseBtn = $("#pauseBtn"),
        resumeBtn = $("#resumeBtn"),
        reverseBtn = $("#reverseBtn"),
        playFromBtn = $("#playFromBtn"),
        reverseFromBtn = $("#reverseFromBtn"),
        seekBtn = $("#seekBtn"),
        timeScaleSlowBtn = $("#timeScaleSlowBtn"),
        timeScaleNormalBtn = $("#timeScaleNormalBtn"),
        timeScaleFastBtn = $("#timeScaleFastBtn"),
        restartBtn = $("#restartBtn"),
        tl = new TimelineLite({onUpdate:updateSlider}); 
        tl.pause();
    
    tl.from($('#sign'), 0.5, {top:'-=400px', ease:Back.easeOut})
      .from($('#of'), 0.5, {top:'-=800px', ease:Back.easeOut})
      .from($('.swing'), 0.2, {top:'-=300px', ease:Back.easeOut})
      .to($('.swing img'), 0.2, { rotationX:20, ease:Power1.easeOut})
      .to($('.swing img'), 0.4, { rotationX:-20, ease:Power1.easeInOut})
      .to($('.swing img'), 2, { rotationX:0, ease:Elastic.easeOut})
      .to($('#holder div img'), 1, {rotationY:360, transformOrigin:"top left"})


$( "#slider" ).slider({
            range: false,
            min: 0,
            max: 100,
            step:.5,
            slide: function ( event, ui ) {
                tl.progress( ui.value/100 ).pause();
            }
     });    
            
    function updateSlider() {
        $("#slider").slider("value", tl.progress() * 100);
    };   

	playBtn.click(function(){
        //Play the tween forward from the current position.
        //If tween is complete, play() will have no effect
        tl.play();
    });
    pauseBtn.click(function(){
        tl.pause();
    });
    resumeBtn.click(function(){
        //Resume playback in current direction.
        tl.resume();
    });
    reverseBtn.click(function(){
        tl.reverse();
    });
    playFromBtn.click(function(){
        //Play from a sepcified time (in seconds).
        tl.play(1);
    });
    reverseFromBtn.click(function(){
        //Reverse from a specified time (in seconds).
        tl.reverse(1);
    });
    seekBtn.click(function(){
        //Jump to specificied time (in seconds) without affecting
        //whether or not the tween is paused or reversed.
        tl.seek(1.5);
    });
    timeScaleSlowBtn.click(function(){
        //timescale of .5 will make the tween play at half-speed (slower).
        //Tween will take 12 seconds to complete (normal duration is 6 seconds).
        tl.timeScale(0.5);
    });
    timeScaleNormalBtn.click(function(){
        //timescale of 1 will make tween play at normal speed.
        tl.timeScale(1);
    });
    timeScaleFastBtn.click(function(){
        //timescale of 1 will make the tween play at double-speed (faster).
        //Tween will take 3 seconds to complete (normal duration is 6 seconds).
        tl.timeScale(2);
    });
    restartBtn.click(function(){
        //Start playing from a progress of 0.
        tl.restart();
    });

    /* 2nd greensock animation */

    var boxLine = new TimelineLite(); 
    boxLine.pause();

    boxLine.to($('.boxes'), 3, {left:'+=180px', ease:Back.easeOut});

    $('#playBtn2').click(function(){
        boxLine.play();
    });