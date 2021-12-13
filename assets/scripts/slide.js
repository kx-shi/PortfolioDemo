var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("project-item");
  if (n > slides.length) { // slide forward to position 1 >>
      slidePosition = 1
    }
  if (n < 1) { // slide back to last position <<
      slidePosition = slides.length
    }
  for (i = 0; i < slides.length; i++) { // slide forward
      slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
}

// (!window.matchMedia("(max-width: 699px)")