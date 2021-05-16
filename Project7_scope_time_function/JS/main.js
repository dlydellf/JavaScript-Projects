// Step 141:
var globalVariable = "is"; // Variable's scope is GLOBAL, throughout the main.js

function global() {
  var localVariable = "isn't"; // Variable's scope is LOCAL to this function only
  console.log(`This ${globalVariable} a global variable.`);
}
function local() {
  // This is the INTENTIONALLY BUGGED function
  console.log(`This ${localVariable} a global variable`); // Console.log shows function references a variable that's unavailable (because of its local scope)
}
global();
//local(); // Uncomment this function call to display the error in the console

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
  console.log(number);
  if (number == "") {
    document.getElementById("TheOutput").innerHTML = "Please, chose a number"; // I can't get this text to display; if the input box is left empty, Line 37's console.log shows "", but the text won't display.
  } else if (number % 2 == 0) {
    // 2nd Conditional statement
    var reply = " EVEN"; // the TRUE output
  } else {
    var reply = " ODD"; // the FALSE output
  }
  document.getElementById("TheOutput").innerHTML = `You chose <strong>${number}</strong>, an ${reply} number.`;
  // Return output
}

// Steps 149 & 150:
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
