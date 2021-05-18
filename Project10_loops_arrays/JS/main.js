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

// Step 203:
function for_Loop() {
  var text = "";
  for (var i = 1; i < 6; i++) {
    text += `${i}.  List the #${i} instrument's owner here: ________<br>`;
    document.getElementById("List_of_Instruments").innerHTML = text;
  }
}
