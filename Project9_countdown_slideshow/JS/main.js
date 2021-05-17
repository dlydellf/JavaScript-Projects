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
}
