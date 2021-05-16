function concatenate() {
  var beginning = "This sentence ";
  var middle = "is actually 3 strings that were";
  var end = " concatenated together, onto one.";
  var result = beginning.concat(middle, end);
  document.getElementById("Concatenate").innerHTML = result;
}
