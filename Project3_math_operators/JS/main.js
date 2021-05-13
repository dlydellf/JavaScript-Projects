// Step 78
function randomNum() {
  var randNumA = Math.floor(Math.random() * 11); //  Random integer between 0 & 10
  var randNumB = randNumA + 2; //  Random integer between 0 & 12
  var result = ((randNumA + randNumB) / randNumA) * randNumB; // The basic mathematical operations, further randomizing the output
  document.getElementById(
    "Math",
  ).innerHTML = `[(${randNumA} + ${randNumB}) &#247 ${randNumA}] x ${randNumB} = <strong>${result}<strong>`; // Places the result in the DOM
}

// Step 80
function subtraction() {
  var numB = Math.floor(Math.random() * 20) + 1; // Random integer between 1 & 20
  var numA = numB * 2 + 3; // Random integer
  var difference = numA - numB; // subtracts 1st num from 2nd num
  document.getElementById("Subtraction").innerHTML = `${numA} - ${numB} = <strong>${difference}<strong>`; // Places the result in the DOM
}

// Step 82
function multiplication() {
  var numA = Math.floor(Math.random() * 11); //  Random integer between 0 & 10
  var numB = numA + 2;
  const product = numA * numB;
  document.getElementById("Multiplication").innerHTML = `${numA} x ${numB} = <strong>${product}<strong>`;
}
function division() {
  var dividend = Math.floor(Math.random() * 100) + 1; // Random integer between 1 & 100
  var divisor = Math.floor(Math.random() * 6) + 1; // Random integer between 1 & 5
  const quotient = dividend / divisor;
  document.getElementById("Division").innerHTML = `${dividend} &#247 ${divisor} = ${quotient}`;
}
