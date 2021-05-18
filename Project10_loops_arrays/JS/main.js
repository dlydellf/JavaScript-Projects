// Step 199:
function Call_Loop() {
  var digit = "";
  var timer = 10;
  while (timer > 0) {
    digit += `<br> ${timer}...`;
    timer--;
  }
  document.getElementById("Loop").innerHTML = `T-minus ${digit} until launch`;
}

// Step 200:
function String_Length() {
  var string = "I bet you're reading this sentence";
  document.getElementById(
    "Length",
  ).innerHTML = `The length of the string "${string}" is:<br><u><strong>${string.length}</strong></u> characters.`;
}
