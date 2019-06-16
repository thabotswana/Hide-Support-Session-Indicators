// ==UserScript==
// @name         Hide Support Session indicators
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes your support session Calypso screen look normal for 10 seconds, for screenshot purposes
// @author       Senff
// @require      https://code.jquery.com/jquery-1.12.4.js
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
    $('.masterbar__quick-language-switcher, body > div:last-of-type, .environment-badge, #support-screen-shot').fadeOut(200);
    setTimeout(function () {
        $('#wpcom > .layout').addClass('is-support-session');
        $('.masterbar__quick-language-switcher, body > div:last-of-type, .environment-badge, #support-screen-shot').fadeIn(1000);
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
