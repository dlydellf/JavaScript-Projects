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

// Step 215 (3, a-c):
const Earth = { order_from_Sun: "3rd", moons: 1, nominal_gravational_acceleration: 9.807, lifeforms: "various" };
const Jupiter = { order_from_Sun: "5th", moons: 79, nominal_gravational_acceleration: 24.79, lifeforms: "none" };
// (5,a-d):
Earth.lifeforms = "numerous";
Earth.habitable = "True";
Jupiter.habitable = "False";

function constant_function() {
  document.getElementById(
    "Constant",
  ).innerHTML = `The <u>${Earth.order_from_Sun}</u> planet from the Sun has <u>${Earth.moons}</u> moon, yet contains <u>${Earth.lifeforms}</u> forms of life; its habitability-rating is therefore <u>${Earth.habitable}</u>, while the <u>${Jupiter.order_from_Sun}</u> planet from the Sun has <u>${Jupiter.moons}</u> moons, yet contains <u>${Jupiter.lifeforms}</u> forms of life; its habitability-rating is therefore <u>${Jupiter.habitable}</u>.`;
}

// Step 217:
function example() {
  var a = "1";
  console.log(`This VAR has functional scope, so its value ("a=${a}") gets logged.`);
  {
    let a = "2";
    console.log(`This LET has block scope, so its value ("a=${a}") gets logged only here, not below.`);
  }
  console.log(
    `This console.log is outside the above LET's code block, so only the functionally scoped VAR's value ("a=${a}") gets logged.`,
  );
}
example();

// Step 220:
function theReturnStatement() {
  let letters = "ABCDEFG";
  let response = letters.toLowerCase();
  console.log(`Being prior to the RETURN statement, only this: "${response}" gets logged.`);
  return;
  let reply = response.toUpperCase();
  console.log(`Coming after the RETURN statement, this: ${reply} will not be logged.`);
}
theReturnStatement();
