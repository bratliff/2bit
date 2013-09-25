// JavaScript Document
// Author: Ben Ratliff

var currentTop;
var topScrollTarget;

$(document).ready(function(){
	$('#nav').localScroll(
			{
			onAfter: function(e) { 
			currentTop = $(window).scrollTop();
			
			
			if ($(window).scrollTop() < 100) {
				topScrollTarget = $('#intro').offset().top;	
			} else if (currentTop > 100 && currentTop < 900 ) {
				topScrollTarget = $('#second').offset().top;
			} else if (currentTop > 900 && currentTop < 1700 ) {
				topScrollTarget = $('#third').offset().top;
			} else if (currentTop > 1700 ) {
				topScrollTarget = $('#fifth').offset().top;
			}
			$fixedElement=$('#nav');
			$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
	}
	});
	

	$(window).scroll(function() {
		var howFar = $(window).scrollTop();
	    //console.log(howFar);
		$('#anim1').css({top: (howFar/1.5) + 350});
		$('#logo').css({top: (howFar/1.5) + 350});

		
		if(howFar < 200) {
			$('#anim1').html("<img src='images/sign/2.png'>");
		}
		else if(howFar > 200 && howFar < 300) {
			$('#anim1').html("<img src='images/sign/b.png'>");
		} else if(howFar > 300 && howFar < 400) {
			$('#anim1').html("<img src='images/sign/i.png'>");
		} else if(howFar > 400 && howFar <  500) {
				$('#anim1').html("<img src='images/sign/t.png'>");
		} else if (howFar > 500 && howFar <  600) {
				$('#anim1').html("<img src='images/sign/c.png'>");
		} else if (howFar > 600 && howFar <  700) {
				$('#anim1').html("<img src='images/sign/r.png'>");
		} else if (howFar > 700 && howFar <  800) {
				$('#anim1').html("<img src='images/sign/e.png'>");
		} else if (howFar > 800 && howFar <  900) {
				$('#anim1').html("<img src='images/sign/a.png'>");
		} else if (howFar > 900 && howFar <  1000) {
				$('#anim1').html("<img src='images/sign/t.png'>");
		} else if (howFar > 1000 && howFar < 1100) {
				$('#anim1').html("<img src='images/sign/i.png'>");
		} else if (howFar > 1100 && howFar <  1200) {
				$('#anim1').html("<img src='images/sign/2.png'>");
		}
	});
	
	 /*$.ajax({
        type: 'GET',
        url: 'images.json',
        dataType: 'json',
        data: {},
        success: function(data){
            imageData = data;
			console.log(imageData);
           
        },
        error: function (response){
           console.log('failure: '+response);
        }
    });*/
	
	var screenChoice = {
		curIndex:0,
		position:0,
		animTime:800
	}
	
	screenChoice.position = $('#interactive').position().left;
	$("#tablet").addClass("norotate");
	
	$(".move_btn").click(function(){
		
		
		$(".move_btn").show(200);
		
		switch($(this).attr('id')) {
			case "move_left":
			
			$("#interactive").animate({left:"+=900"},800, function(){
				reportPos();
				});
			
			break;
			case "move_right":
			$("#interactive").animate({left:"-=900"},800, function(){
				reportPos();
				});
			
			break;	
		}
				
	});

	//Initial screen set up //

	$("#phone").html("<img src='images/diesel_iphone.png'>");
	$("#tablet").html("<img src='images/diesel_ipad.jpg'>");
	$("#tablet").removeClass("norotate").addClass("rotate");
	$("#computer").html("<img src='images/diesel_shot.png'>");

	
	function reportPos(){
		screenChoice.position = $('#interactive').position().left;
		$("#hand").hide(500);
		
		switch(screenChoice.curIndex){
			case 0:
				$("#phone").html("<img src='images/diesel_iphone.png'>");
				$("#tablet").html("<img src='images/diesel_ipad.jpg'>");
				$("#tablet").removeClass("norotate").addClass("rotate");
				$("#computer").html("<img src='images/diesel_shot.png'>");
			    //$("#computer").html("<img src='images/diesel_shot.png'>");
				whichScreens(true, true, true, false, true);
				$('#agency').html("<img src='images/kbsp.gif'>");
			  	$("#move_left").hide(200);
			  break;
			case -900:
				$("#phone").html("<img src='images/bmw_iphone.png'>");
				$('#agency').html("<img src='images/kbsp.gif'>");
				whichScreens(false, false, true, false, true);
			break;
			case -1800:
				$("#tablet").html("<img src='images/mastermind_shot.jpg'>");
				$("#tablet").removeClass("rotate").addClass("norotate");
				$('#agency').html("<img src='images/kbsp.gif'>");
				$("#hand").show(500);
				whichScreens(false, true, false, false, true);	
			break;
			case -2700:
				whichScreens(false, false, false, true, true);
			  	$('#agency').html("<img src='images/saatchi.gif'>");
			break;
			case -3600:
				$("#computer").html("<img src='images/eci_shot.png'>");
				$("#tablet").html("<img src='images/eci_ipad.jpg'>");
				$("#tablet").removeClass("norotate").addClass("rotate");
				whichScreens(true, true, false, false, false);
			break;
			case -4500:
				$("#computer").html("<img src='images/triad_shot.png'>");
				whichScreens(true, false, false, false, false);
			break;
			case -5400:
				$("#computer").html("<img src='images/lindgren_shot.png'>");
				whichScreens(true, false, false, false, false);
				$("#move_right").hide(200);
			break;
		}
		
		
		
	}; 
	
	var slideValues = {
		computerRight:-700,
		computerLeft:0,
		tabletLeft:270,
		tabletRight:1200,
		phoneTop:150,
		phoneBottom:800,
		enbrelRight:0,
		enbrelLeft:-800	
	}
	
	console.log(slideValues.computer);
	
	function whichScreens(computer, tablet, phone, enbrel, agency) {
		
		var time = screenChoice.animTime;
		switch(computer) {
			case true:
				$("#computer").animate({left:slideValues.computerLeft}, time);
			break;
			case false:
				$("#computer").animate({left:slideValues.computerRight},time);
			break;
		}
		switch(tablet) {
			case true:
				$("#tablet").animate({left:slideValues.tabletLeft}, time);
			break;
			case false:
				$("#tablet").animate({left:slideValues.tabletRight}, time);
			break;
		}
		switch(phone) {
			case true:
				$("#phone").animate({top:slideValues.phoneTop}, time);
			break;
			case false:
				$("#phone").animate({top:slideValues.phoneBottom}, time);
			break;
		}		
		switch(enbrel) {
			case true:
				$("#enbrel").animate({left:slideValues.enbrelRight}, time);
			break;
			case false:
				$("#enbrel").animate({left:slideValues.enbrelLeft}, time);
			break;
		}
		switch(agency){
			case true:
				$("#agency").show(300);
			break;
			case false:
				$("#agency").hide(300);
			break;
		}
		
	}




//***************************** Facebook Shore Functionality ***************************//

FB.init( {
              appId : '525449280829351',
              status : true, // check login status
              cookie : true, // enable cookies to allow the server to access the session
              oauth:true,
              xfbml : true
       // parse XFBML
       });
 

$("#facebook").click(function(){ 
FB.ui({
              method: 'feed',
              name: '2bit Creative',
              link: 'http://www.2bitcreative.com',
              picture: 'http://www.2bitcreative.com/images/logo.png',
              description: "Creativity unleashed!"
       },
       function(response) {
              if (response && response.post_id) {
                     // alert('Post was published.');
              } else {
                     //alert('Post was not published.');
              }
       }
       ); 
 });


})