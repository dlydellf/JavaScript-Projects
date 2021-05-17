/*
function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    if (seconds == 0) {
      alert("Time's up!");
    } else {
      seconds = seconds - 1;
      timer.innerHTML = seconds;
      setTimeout(tick, 1000);
    }
  }
  tick();
}*/
// Code above is for the COUNTDOWN; code below is for the SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    slides[i].getElementsByClassName.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].getElementsByClassName.display = "block";
  dots[slideIndex - 1].className += " active";
}
