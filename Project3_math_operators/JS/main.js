function randomNumb() {
  var num1 = Math.random();
  var num2 = Math.random();
  var result = ((num1 + num2) * num1) / num2;
  document.getElementById("Math").innerHTML = result;
}

function subtraction() {
  var numA = Math.floor(Math.random() * 11) + 1; // Random integer between 1 & 10
  var numB = Math.floor(Math.random() * 3) + 1; // Random integer between 1 & 2
  var difference = numA - numB; // subtracts 1st numb from 2nd num
  document.getElementById("Subtraction").innerHTML = difference; // Places the result in the DOM
}
