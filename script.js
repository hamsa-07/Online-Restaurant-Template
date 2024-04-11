$(document).ready(function() {
    var slideWidth = $('.menu-item').outerWidth(true);
    var totalSlides = $('.menu-item').length;
    var visibleSlides = Math.floor($('.menu-slider').width() / slideWidth);
    var currentSlide = 0;

    $('.prev-btn').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    $('.next-btn').click(function() {
        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
            updateSlider();
        }
    });

    function updateSlider() {
        var translateValue = -currentSlide * slideWidth;
        $('.menu-container').css('transform', 'translateX(' + translateValue + 'px)');
    }
});
