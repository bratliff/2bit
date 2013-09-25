// JavaScript Document


function validateForm()
		{
		
		var x=document.forms["contactForm"]["fname"].value;
		var y=document.forms["contactForm"]["email"].value;
		var responseBox = document.getElementById("outputDIV");
		var atpos=y.indexOf("@");
		var dotpos=y.lastIndexOf(".");
		
		if (x==null || x=="")
		  {
		  responseBox.innerHTML = "You must enter a name";
		  return false;
		  } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
			  {
			  responseBox.innerHTML = "You must enter a valid e-mail address";
			  return false;
			  }
		  else {  
		  	alert("Hello, " +  x + ". Your email " + y + " has been added to our database.");
			return true;
		  }
		}
		


$(document).ready(function() {
// begin Ready

	$('article').hide();
	
	$('.link').click(function() {
		stop();
  		hideAll();
		var newID = String($(this).attr('href'));
		$(newID).slideDown(500);
	});
	
	function hideAll(url){
		$('article').slideUp(500);	
	};
	
	$(".closer").click(function() {
		hideAll();
	});

	var phone_no = /(?:\d*).\d{3}.\d{3}.\d{4}/g;
	
	// replace strings
	var targetPara = document.getElementById("replacePara");
	var phoneID = targetPara.innerHTML.match(phone_no, '<span>' + phoneID + '</span>');

	var phoneMask = targetPara.innerHTML.replace(phone_no, 'XXX-XXX-XXXX');
	
	$('#highlight').click(function() {
		$("#samplePara p:contains('fracking')").slideDown(500);
		$("#samplePara p:contains('fracking')").css('background','#FC0');
	});
	
	$('#remove').click(function() {
		$("#samplePara p:contains('fracking')").slideUp(500);
	}); 
	
	$('#restore').click(function() {
		$("#samplePara p:contains('fracking')").slideDown(500).css('background','#FFF');
	});
	
	$('#wordReplace').click(function() {
		targetPara.innerHTML = targetPara.innerHTML.replace(/fracking/ig, 'flowers');
	});
	 
	 $('#wordRestore').click(function() {
		targetPara.innerHTML = targetPara.innerHTML.replace(/flowers/ig, 'fracking');
	});
	
	 $('#addLink').click(function() {						   
		targetPara.innerHTML = targetPara.innerHTML.replace(/flowers/ig, 'fracking');
		targetPara.innerHTML = targetPara.innerHTML.replace(/fracking/ig, '<a href=http://en.wikipedia.org/wiki/Seven_dirty_words>fracking</a>');
	});

	$('#idPhones').click(function() {						   
		targetPara.innerHTML = phoneID;
	});

	$('#maskPhones').click(function() {						   
		targetPara.innerHTML = phoneMask;
	});

	$('#unmaskPhones').click(function() {
		for(i = 0; i < phoneID.length; i++){
			var xmark = targetPara.innerHTML.replace(/XXX-XXX-XXXX/, phoneID[i]);
			targetPara.innerHTML = xmark;
		}	
		
	});

	//* animation code *//

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

     
	
// end Ready
});