$('.menu-button-icon').click(function() {
    $('.menu-button-icon:hover span:nth-child(1)').toggleClass('first');
    $('.menu-button-icon:hover span:nth-child(2)').toggleClass('misle');
    $('.menu-button-icon:hover span:nth-child(3)').toggleClass('last');
})