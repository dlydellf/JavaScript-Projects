// Step 159:
function concatenate() {
  var beginning = "This sentence ";
  var middle = "is actually 3 strings that were";
  var end = " concatenated together, into one.";
  var result = beginning.concat(middle, end); // The concate method, combining all three strings into one
  document.getElementById("Concatenate").innerHTML = result;
}
// Step 161:
function slice() {
  var string = document.getElementById("PreSlice").innerHTML;
  document.getElementById("PostSlice").innerHTML = string.slice(12, 20); // The slice method, beginning at index 12 and slicing until index 19
}

// Step 162:
// Learned you can't assign "document.getElementById(id's name).innerHTML or just "document.getElementById(id's name)" to a variable
function toUpperCase() {
  var string = document.getElementById("RegularCase").innerHTML;
  document.getElementById("UpperCase").innerHTML = string.toUpperCase(); // string's letters are converted into upper case
}
function search() {
  var findThis = document.getElementById("ChosenWord").value.toUpperCase(); // the word being searched for is converted into upper case
  var itsIndex = document.getElementById("RegularCase").innerHTML.toUpperCase().search(findThis); // Since #UpperCase may be empty, go to its source (#RegularCase) and capitalize IT instead, then perform the search; assigning result to a variable
  if (itsIndex == -1) {
    document.getElementById("Position").innerHTML = "<strong>What you typed wasn't found!</strong>";
  } else {
    document.getElementById("Position").innerHTML = itsIndex;
  }
}

// Step 164:
function toAString() {
  var startingText = document.getElementById("ChosenNumber164").value;
  var startingNumber = parseInt(startingText); // User's text converted into type==number
  console.log(startingNumber);
  if (isNaN(startingNumber)) {
    // Is User's input something other than 0-9 and is returning -1?!?
    document.getElementById("NumberToString").innerHTML =
      "<strong>Please do not enter text, or leave blank; use digits (0-9) only</strong>";
  } else {
    document.getElementById("NumberToString").innerHTML = startingNumber.toString();
  }
}

// Step 166:
function toRandomNumr() {
  var chosenNumr = document.getElementById("ChosenNumber").value; // User's input;
  if (chosenNumr > 58) {
    // ERROR - they chose too high
    document.getElementById("RandomNumber").innerHTML = "Absolutely not.  Please keep your number choices below 59";
  } else if (chosenNumr <= 2) {
    // ERROR - they chose too low
    document.getElementById(
      "RandomNumber",
    ).innerHTML = `This works best if you choose a number <strong>greater than 2</strong>.`;
  } else {
    var Exp = chosenNumr * 3; // Max chosenNumr is 58, so max exponent is 174, < Infinity's 1e+308
    var randomNumr = Math.pow(chosenNumr, Exp); // What the toPrecision() method will be applied to
    document.getElementById(
      "RandomNumber",
    ).innerHTML = `The random number <strong>${randomNumr}</strong> has been reformatted to only show <strong>${chosenNumr}</strong> digits, becoming...`;
    /*
    document.getElementById("Button166").onClick = precision(chosenNumr, randomNumr); // Failed attempt at reassigning the "precision" function when Button166 was clicked a 2nd time; (side-effect: passed parameters outside their local scope)
    }
  }
function precision(chosenNumr, randomNumr) { */
    var preciseNumr = randomNumr.toPrecision(chosenNumr); // What really matters...
    document.getElementById("PreciseNumber").innerHTML = `<strong>${preciseNumr}</strong>`;
    document.getElementById("Button167").onClick = toFixed_Method(chosenNumr, randomNumr); // Using Button167 to pass on next function's arguments (instead of repeating the "random number" code); clicking Button167 breaks this chain
  }
}

// Step 167:
function toFixed_Method(chosenNumr, randomNumr) {
  var fixedNumr = randomNumr.toFixed(chosenNumr); // What really matters...
  document.getElementById(
    "FixedNumber",
  ).innerHTML = `Here, your random number (from above - <strong>${randomNumr}</strong>), has been rounded to a "fixed" number of decimals (<strong>${chosenNumr}</strong>), becoming...: <br> <strong>${fixedNumr}</strong>`;
}
function valueOf_Method() {
  var RandomNumber = 123456789;
  document.getElementById(
    "ValueOfText",
  ).innerHTML = `All of these numbers were assigned to their own <em>variable</em>, giving each variable a specific <em>value</em>.<br>Displaying any of those values can be done with the "valueOf" method, for example:<br><br> if (RandomNumber = "123,456,789"), then<br> {RandomNumber.<strong>valueOf()</strong> = ${RandomNumber.valueOf()}}`;
}
