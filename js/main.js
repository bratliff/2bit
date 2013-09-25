/* JavaScript Document */
/* Author: Ben Ratliff */
/*jslint browser: true*/
/* global window, document */
/*global $*/
/* global FB */

var currentTop;
var topScrollTarget;

$(document).ready(function () {
    "use strict";
    $('#nav').localScroll(
        {
            onAfter: function () {
                currentTop = $(window).scrollTop();
                if ($(window).scrollTop() < 100) {
                    topScrollTarget = $('#intro').offset().top;
                } else if (currentTop > 100 && currentTop < 900) {
                    topScrollTarget = $('#second').offset().top;
                } else if (currentTop > 900 && currentTop < 1700) {
                    topScrollTarget = $('#third').offset().top;
                } else if (currentTop > 1700) {
                    topScrollTarget = $('#fifth').offset().top;
                }
                var $fixedElement = $('#nav');
                $fixedElement.css({ "position": "relative" });
                window.scroll(0, topScrollTarget);
                $fixedElement.css({ "position": "fixed"});
            }
        }
    );

    $(window).scroll(function () {
        var howFar = $(window).scrollTop();
        //console.log(howFar);
        $('#anim1').css({top: (howFar / 1.5) + 350});
        $('#logo').css({top: (howFar / 1.5) + 350});
        $('.section_title').css({top: (howFar / 1.4) + 600});
        if (howFar < 200) {
            $('#anim1').html("<img src='images/sign/2.png'>");
            $('.section_title').html("WEB");
            $('.section_title').removeClass("rotate_title");
        } else if (howFar > 200 && howFar < 300) {
            $('#anim1').html("<img src='images/sign/b.png'>");
            $('.section_title').html("GRAPHIC");
            $('.section_title').addClass("rotate_title");
        } else if (howFar > 300 && howFar < 400) {
            $('#anim1').html("<img src='images/sign/i.png'>");
        } else if (howFar > 400 && howFar <  500) {
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
            $('.section_title').html("GRAPHIC");
        } else if (howFar > 1200 && howFar <  1800) {
            $('.section_title').html("MOTION");
        }
    });

    var captionText = [
        {
            company: "Clean Diesel",
            description: "Developed responsive web site for KBS+P clients BMW, Mercedes-Benz, Porsche, Volkswagen and Bosch"
        },
        {
            company: "BMW Mobile",
            description: "Worked on team building BMW's mobile presence for KBS+P"
        },
        {
            company: "Puma Wall Controller",
            description: "Built draggable iPad interface to control programmable PUMA in-store display"
        },
        {
            company: "Pfizer Tablet Development",
            description: "Developed interactive sales tablets for Saatchi and Saatchi Health client Pfizer using Flash and ActionScript 3.0"
        },
        {
            company: "Engineering Conferences International",
            description: "Created web site for conference planning organization using WordPress CMS"
        },
        {
            company: "Triad Theater",
            description: "Designed web site for off-Broadway theater"
        },
        {
            company: "Lisa Lindgren",
            description: "Created web site for visual artist Lisa Lindgren"
        }
    ],

        screenChoice = {
            curIndex: 0,
            position: 0,
            animTime: 800
        },
        slideValues = {
            computerRight: -700,
            computerLeft: 0,
            tabletLeft: 270,
            tabletRight: 1200,
            phoneTop: 150,
            phoneBottom: 800,
            enbrelRight: 0,
            enbrelLeft: -800
        };
    screenChoice.position = $('#interactive').position().left;
    function whichScreens(computer, tablet, phone, enbrel, agency) {
        var time = screenChoice.animTime;
        switch (computer) {
        case true:
            $("#computer").animate({left: slideValues.computerLeft}, time);
            break;
        case false:
            $("#computer").animate({left: slideValues.computerRight}, time);
            break;
        }
        switch (tablet) {
        case true:
            $("#tablet").animate({left: slideValues.tabletLeft}, time);
            break;
        case false:
            $("#tablet").animate({left: slideValues.tabletRight}, time);
            break;
        }
        switch (phone) {
        case true:
            $("#phone").animate({top: slideValues.phoneTop}, time);
            break;
        case false:
            $("#phone").animate({top: slideValues.phoneBottom}, time);
            break;
        }
        switch (enbrel) {
        case true:
            $("#enbrel").animate({left: slideValues.enbrelRight}, time);
            break;
        case false:
            $("#enbrel").animate({left: slideValues.enbrelLeft}, time);
            break;
        }
        switch (agency) {
        case true:
            $("#agency").show(300);
            break;
        case false:
            $("#agency").hide(300);
            break;
        }
    }
    function reportPos() {
        screenChoice.position = $('#interactive').position().left;
        $("#hand").hide(500);

        $('#caption').find('h2').html(captionText[screenChoice.curIndex].company);
        $('#caption').find('p').html(captionText[screenChoice.curIndex].description);
        switch (screenChoice.curIndex) {
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
        case 1:
            $("#phone").html("<img src='images/bmw_iphone.png'>");
            $('#agency').html("<img src='images/kbsp.gif'>");
            whichScreens(false, false, true, false, true);
            break;
        case 2:
            $("#tablet").html("<img src='images/mastermind_shot.jpg'>");
            $("#tablet").removeClass("rotate").addClass("norotate");
            $('#agency').html("<img src='images/kbsp.gif'>");
            $("#hand").show(500);
            whichScreens(false, true, false, false, true);
            break;
        case 3:
            whichScreens(false, false, false, true, true);
            $('#agency').html("<img src='images/saatchi.gif'>");
            break;
        case 4:
            $("#computer").html("<img src='images/eci_shot.png'>");
            $("#tablet").html("<img src='images/eci_ipad.jpg'>");
            $("#tablet").removeClass("norotate").addClass("rotate");
            whichScreens(true, true, false, false, false);
            break;
        case 5:
            $("#computer").html("<img src='images/triad_shot.png'>");
            whichScreens(true, false, false, false, false);
            break;
        case 6:
            $("#computer").html("<img src='images/lindgren_shot.png'>");
            whichScreens(true, false, false, false, false);
            $("#move_right").hide(200);
            break;
        }
    }
    $("#tablet").addClass("norotate");
    $(".move_btn").click(function () {
        $(".move_btn").show(200);
        switch ($(this).attr('id')) {
        case "move_left":
            screenChoice.curIndex--;
            $("#interactive").animate({left: "+=900"}, 800, function () {
                reportPos();
            });
            break;
        case "move_right":
            screenChoice.curIndex++;
            $("#interactive").animate({left: "-=900"}, 800, function () {
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
//***************************** Facebook Shore Functionality ***************************//
    FB.init({
        appId : '525449280829351',
        status : true, // check login status
        cookie : true, // enable cookies to allow the server to access the session
        oauth: true,
        xfbml : true
       // parse XFBML
    });
    $("#facebook").click(function () {
        FB.ui({
            method: 'feed',
            name: '2bit Creative',
            link: 'http://www.2bitcreative.com',
            picture: 'http://www.2bitcreative.com/images/logo.png',
            description: "Creativity unleashed!"
        }
            );
    });
});