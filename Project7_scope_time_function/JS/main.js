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
  if (document.getElementById("MyIfStatementsOutput").onClick) {
    document.getElementById("MyIfStatementsOutput").innerHTML = "Click HERE for your own example of an if statement."; // This only displays with the ! operator
  } else {
    document.getElementById("MyIfStatementsOutput").innerHTML = "This text proves that you've clicked."; // Didn't expect this to display; the conditional is true
  }
}
