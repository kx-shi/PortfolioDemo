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

$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })