$(document).ready(function () {
    // Profile actions
    $('.profile__actions-bar').click(function () {
        $('.profile__actions').toggleClass('active__actions');
    });

    $(document).mouseup(function (e) {
        var menu2 = $(".profile__actions, .profile__actions-bar");
        if (!menu2.is(e.target)
            && menu2.has(e.target).length === 0) {
            $('.profile__actions').removeClass('active__actions');
        }
    });

    // Profile actions
    $('.menu__action a').click(function () {
        $('.menu__action-body').toggleClass('active__action');
    });

    $(document).mouseup(function (e) {
        var menu1 = $(".menu__action a, .menu__action-body, .menu__action-body ul li a");
        if (!menu1.is(e.target)
            && menu1.has(e.target).length === 0) {
            $('.menu__action-body').removeClass('active__action');
        }
    });
    // hamburger_menu
    $('.hamburger_menu').click(function(){
        $(this).toggleClass('active');
        $('.dashboard_nav').toggleClass("active");
        $('body').toggleClass('overlay');
    });
    $(document).mouseup(function (e) {
        var menu2 = $(".dashboard_nav, .hamburger_menu");
        if (!menu2.is(e.target)
            && menu2.has(e.target).length === 0) {
            $('.dashboard_nav').removeClass('active');
            $('body').removeClass('overlay');
            $('.hamburger_menu').removeClass('active');
        }
    });
    // Range Slider
    let options = {
        startAngle: -1.55,
        size: 90,
        value: 0.45,
        fill: { gradient: ['#DB4B3D', '#D03728'] }
    }
    $(".rpm").circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "");
        });

    let options1 = {
        startAngle: -1.55,
        size: 90,
        value: 0.45,
        fill: { gradient: ['#3573E7', '#1A5BD6'] }
    }
    $(".kmh").circleProgress(options1).on('circle-animation-progress',
        function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "");
        });
    let options2 = {
        startAngle: -1.55,
        size: 90,
        value: 0.25,
        fill: { gradient: ['#0BB839', '#058527'] }
    }
    $(".fule").circleProgress(options2).on('circle-animation-progress',
        function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))