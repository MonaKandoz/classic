/*global $, alert, console*/
$(function () {
    'use strict';
    var myHeader = $('.header'),
        slider = $('.bxslider');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
        slider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });
    $('.links ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    slider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    slider.bxSlider({
        pager: false
    });
    
    //auto slider code
    
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    //trigger mixitup
    $('#Container').mixItUp();
    
    $('.shuffle li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //nice scroll
    $('html').niceScroll({
        cursorcolor: '#1abb9bb3',
        cursorborder: '1px solid #1abb9bb3'
    });
       
});

