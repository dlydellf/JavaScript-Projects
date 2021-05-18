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

// Step 207:
function array_Function() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var text = "";
  for (var i = 0; i < days.length - 1; i++) {
    text += `If today is ${days[i]}, then tomorrow <em>will be</em> ${
      days[i + 1]
    }.  Over and over.  This never stops...<br>`;
    document.getElementById("Array").innerHTML = text;
  }
}

// Step 215:
const Earth = { order_from_Sun: "3rd", moons: 1, nominal_gravational_acceleration: 9.807, lifeforms: "various" };
const Jupiter = { order_from_Sun: "5th", moons: 79, nominal_gravational_acceleration: 24.79, lifeforms: "none" };

function constant_function() {
  document.getElementById(
    "Constant",
  ).innerHTML = `The <u>${Earth.order_from_Sun}</u> planet from the Sun contains <u>${Earth.lifeforms}</u> forms of life, while the <u>${Jupiter.order_from_Sun}</u> planet from the Sun contains <u>${Jupiter.lifeforms}</u> forms of life.`;
}
