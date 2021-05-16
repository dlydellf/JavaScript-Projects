// Step 141:
var globalVariable = "is"; // Variable's scope is global, throughout the main.js

function global() {
  var localVariable = "isn't"; // Variable's scope is LOCAL to this function only
  console.log(`This ${globalVariable} a global variable.`);
}
function local() {
  console.log(`This ${localVariable} a global variable`); // References a variable that's unavailable because of its local scope
}
global();
// local();

// Step 145:
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("TodayIs").innerHTML = "Yesterday has become... today.";
  } else {
    document.getElementById("TodayIs").innerHTML = "Today is turning into tomorrow.";
  }
}

// Step 146:
function myIf() {
  if (document.getElementById("Clicked?").onClick) {
    document.getElementById("Clicked?").innerHTML = "This text proves that you've clicked."; // This only displays with the ! operator
  } else {
    document.getElementById("Clicked?").innerHTML =
      "This text shouldn't be displaying; my conditional statement has a logic error."; // Didn't expect this to display; the conditional isn't false
  }
}

// Step 148:
function my2ndIf() {
  var number = document.getElementById("ChosenNumber").value; // Obtain user's input
  if (number % 2 == 0) {
    // Conditional statement
    var reply = " EVEN"; // the TRUE output
  } else {
    var reply = " ODD"; // the FALSE output
  }
  document.getElementById("TheOutput").innerHTML = `You chose <strong>${number}</strong>, an ${reply} number.`;
  // Return output
}
