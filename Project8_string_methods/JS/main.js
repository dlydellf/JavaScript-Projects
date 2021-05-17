// Step 156:
function concatenate() {
  var beginning = "This sentence ";
  var middle = "is actually 3 strings that were";
  var end = " concatenated together, into one.";
  var result = beginning.concat(middle, end); // The concate method, combining all three strings into one
  document.getElementById("Concatenate").innerHTML = result;
}
// Step 158:
function slice() {
  var string = document.getElementById("PreSlice").innerHTML;
  document.getElementById("PostSlice").innerHTML = string.slice(12, 20); // The slice method, beginning at index 12 and slicing until index 19
}

// Step 159:
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

// Step 161:
function toAString() {
  var startingText = document.getElementById("ChosenNumber").value;
  var startingNumber = parseInt(startingText); // User's text converted into type==number
  console.log(startingNumber);
  if (isNaN(startingNumber)) {
    // Is User's input something other than 0-9 and is returning -1?!?
    document.getElementById("NumberToString").innerHTML =
      "<strong>Please do not enter text; digits (0-9) only</strong>";
  } else {
    document.getElementById("NumberToString").innerHTML = startingNumber.toString();
  }
}

// Step 163:
function toRandomNumr() {
  var Base = document.getElementById("SingleNumr").value; // User's input
  if (Base > 58) {
    // MAX workable numbr is 58!!
    document.getElementById("OriginalRandomNumr").innerHTML =
      "Absolutely not.  Please keep your number choices below 59";
  } else {
    var Exp = Base * 3; // Max Base is 58, so max exponent is 174, < Infinity's 1e+308
    var randomNumr = Math.pow(Base, Exp); // What will get the toPrecision() method
    document.getElementById(
      "OriginalRandomNumr",
    ).innerHTML = `The random number <strong>${randomNumr}</strong> has been reformatted to only show <strong>${Base}</strong> digits...`;

    document.getElementById("TheButton").onClick = precision(Base, randomNumr); // One click for 2 functions; passing parameters outside local scope
  }
}
function precision(Base, randomNumr) {
  var result = randomNumr.toPrecision(Base); // What really matters...
  document.getElementById("NewRandomNumr").innerHTML = `...<strong>${result}</strong>`;
}
