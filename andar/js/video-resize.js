$(function() {
    var widthRatio = 0.59;
    var heightRatio = 0.50;
    $(window).resize(function() {
        $('#video-container').css({width: $(window).width() * widthRatio});
        $('#video-container').css({height: $(window).width() * widthRatio * heightRatio});
    });
    $(window).ready(function() {
        $('#video-container').css({width: $(window).width() * widthRatio});
        $('#video-container').css({height: $(window).width() * widthRatio * heightRatio});
    });
});