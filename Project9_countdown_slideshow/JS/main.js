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
