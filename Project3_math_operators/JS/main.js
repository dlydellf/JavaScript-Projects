function randomNumb() {
  var num1 = Math.random();
  var num2 = Math.random();
  var result = ((num1 + num2) * num1) / num2;
  document.getElementById("Math").innerHTML = result;
}
