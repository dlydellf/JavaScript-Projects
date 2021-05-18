// Step 199:
function Call_Loop() {
  var digit = "";
  var timer = 10;
  while (timer > 0) {
    digit += `<br> ${timer}...`;
    timer--; // Decrements by 1, so it's a countdown timer
  }
  document.getElementById("Loop").innerHTML = `T-minus ${digit} until launch`; // See above...
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
    text += `${i}.  List the #${i} instrument's owner here: ________<br>`; // Used the <p>'s given id; avoided creating an array of instruments
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
    }.  Over and over.  This never stops...<br>`; // ...except once i == 6
    document.getElementById("Array").innerHTML = text;
  }
}

// Step 215 (step 3, parts a-c):
const Earth = { order_from_Sun: "3rd", moons: 1, nominal_gravational_acceleration: 9.807, lifeforms: "various" }; // Learned to NOT include stuff like "9.807 m/s^2" in a property's value
const Jupiter = { order_from_Sun: "5th", moons: 79, nominal_gravational_acceleration: 24.79, lifeforms: "no" };
// (step 5, parts a-d):
Earth.lifeforms = "numerous";
Earth.habitable = "True";
Jupiter.habitable = "False";

function constant_function() {
  document.getElementById(
    "Constant",
  ).innerHTML = `The <u>${Earth.order_from_Sun}</u> planet from the Sun has <u>${Earth.moons}</u> moon, yet contains <u>${Earth.lifeforms}</u> forms of life; its habitability-rating is  <u>${Earth.habitable}</u>. <br> The <u>${Jupiter.order_from_Sun}</u> planet from the Sun has <u>${Jupiter.moons}</u> moons, yet contains <u>${Jupiter.lifeforms}</u> forms of life; its habitability-rating is therefore <u>${Jupiter.habitable}</u>.`;
}

// Step 217:
function example() {
  var a = "1";
  console.log(`Step 217 (Start): This VAR has functional scope, so its value ("a=${a}") gets logged.`);
  {
    let a = "2";
    console.log(
      `Step 217 (Middle): This LET has block scope, so its value ("a=${a}") gets logged too, but only here, not below.`,
    );
  }
  console.log(
    `Step 217 (End): This console.log is outside the above LET's code block, so only the functionally scoped VAR's value ("a=${a}") gets logged.`,
  );
}
example();

// Step 220:
function theReturnStatement() {
  let letters = "ABCDEFG";
  let response = letters.toLowerCase();
  console.log(`Step 220: Being prior to the RETURN statement, only this: "${response}" gets logged.`);
  return;
  let reply = response.toUpperCase(); // this line will not be executed
  console.log(`Coming after the RETURN statement, this: ${reply} will not be logged.`); // Self-explanatory
}
theReturnStatement();

// Step 223:
function objectAssignment() {
  // I needed to link the button's onClick to something executable here, besides room.description()
  let room = {
    walls: "4",
    windows: "5",
    doors: "6",
    description: function () {
      return `This room has ${room.walls} walls, ${room.windows} windows, and ${room.doors} doors.`;
    },
  };
  document.getElementById("Step223").innerHTML = room.description();
}

// Step 224:
function breakStatement() {
  let text = "";
  let i = 1;
  while (i > 0) {
    // BIG no-no
    text += `${[i]}. `;
    document.getElementById("Break").innerHTML = `Let's count to a trillion! Ready?<br>${text} `;
    i++;
    if (i == 4) {
      text = "Ok, that's far enough.";
      document.getElementById("Break").innerHTML += text;
      break;
    }
  }
}

function continueStatement() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      // Easily shows the skipped parts of the loop
      continue;
    }
    text += `${[i]} <br>`;
  }
  document.getElementById("Continue").innerHTML = text;
}
