function notMyFirstFunction() {
  var var1 = "Friday!!!"; // Assigning a string to a newly declared variable
  var var2 = var1.toUpperCase(); // Applying a method to the 1st variable; assigning the result to a newly declared 2nd variable
  document.getElementById("favDay").innerHTML = var2; // Search the .html file for a element w/ID == favDay, and make var2 that element's text
}

function step67() {
  var result = "This string... ";
  result += "was concatenated!"; // Similar to its use in loops, the "+=" adds what follows it (" was concatenated!") to what precedes it (result), then reassigns the new value to the old variable
  document.getElementById("step67").innerHTML = result; // performs the same duty here as on Line 4
}
