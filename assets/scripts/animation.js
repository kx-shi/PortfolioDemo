// Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);

// Event handler that listens for the 'scroll'-, and 'resize'-event
$window.on('scroll resize', check_in_view);

$window.trigger('scroll'); // detect elements in view first time page is loaded

// Scroll position detection
function check_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() { // check all animated elements
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_posiiton = $element.offset().top;
        var element_bottom_position = (element_top_posiiton + element_height);

        // check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_posiiton <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
    })
}