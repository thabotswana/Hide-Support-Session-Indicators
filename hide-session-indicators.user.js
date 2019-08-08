// ==UserScript==
// @name         Hide Support Session indicators
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes your support session Calypso screen look normal for 10 seconds, for screenshot purposes
// @author       Senff
// @require      https://code.jquery.com/jquery-1.12.4.js
// @updateURL    https://github.com/senff/Hide-Support-Session-Indicators/raw/master/hide-session-indicators.user.js
// @match        https://wordpress.com/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

function addNormalLookButton() {
    if ($('body #wpcom > .is-support-session').length) {
        $('.environment-badge').after('<div id="support-screen-shot">S</div>');
    }
}

function removeStuff() {
    $('#wpcom > .layout').removeClass('is-support-session');
    $('body > div').each(function(d) {
        var hasClasses = $(this).attr('class');
        if (typeof hasClasses == 'undefined') {
            $(this).addClass('dontshow');
        }
    });
    $('.masterbar__quick-language-switcher, .dontshow, .environment-badge, #support-screen-shot').fadeOut(200);
    setTimeout(function () {
        $('#wpcom > .layout').addClass('is-support-session');
        $('.masterbar__quick-language-switcher, .dontshow, .environment-badge, #support-screen-shot').fadeIn(1000);
        $('.dontshow').removeAttr('class');
    }, 10000);
}

$(document).ready(function() {
    setTimeout(function() {
        addNormalLookButton();
    }, 1000);
});

$('body').on('click', '#support-screen-shot', function() {
   removeStuff();
});
