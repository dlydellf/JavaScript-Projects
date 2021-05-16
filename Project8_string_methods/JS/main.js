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
  document.getElementById("PostSlice").innerHTML = string.slice(12, 20);
}
