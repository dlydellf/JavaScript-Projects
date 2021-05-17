// Step 156:
function concatenate() {
  var beginning = "This sentence ";
  var middle = "is actually 3 strings that were";
  var end = " concatenated together, onto one.";
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
    document.getElementById("Position").innerHTML = "What you typed wasn't found";
  } else {
    document.getElementById("Position").innerHTML = itsIndex;
  }
}
