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
  var numB = Math.floor(Math.random() * 21) + 1; // Random integer between 1 & 20
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
  var dividend = Math.floor(Math.random() * 101) + 1; // Random integer between 1 & 100
  var divisor = Math.floor(Math.random() * 6) + 1; // Random integer between 1 & 5
  const quotient = dividend / divisor;
  document.getElementById("Division").innerHTML = `${dividend} &#247 ${divisor} = <strong>${quotient}<strong>`;
}

// Steps 84 & 86
function allAtOnce() {
  var randNumb = Math.floor(Math.random() * 4) + 1; // Random integer between 1 & 3
  document.getElementById("RandNumb").innerHTML = `<strong>${randNumb}<strong>`; // >>>>> DOM is updated with the chosen random number
  var result = randNumb; // Declare & assign a 2nd variable equal to the random number
  while (result != 1) {
    // While the 2nd variable is NOT 1...
    if (result % 2 == 0) {
      // Check if the 2nd variable is even
      var result = randNumb / 2; // Halve random number & reassign to the 2nd variable
      document.getElementById("Evens").innerHTML = `${result}`; // >>>>> DOM is updated with result from Line 40, GOTO to Line 38
    } else {
      var result = randNumb * 3 + 1; // If 2nd variable is ODD, multiply by 3 and add 1
      document.getElementById("Odds").innerHTML = `${result}`; // >>>>> DOM is updated with result from Line 43, GOTO Line 38
    }
    document.getElementById("Results").innerHTML = `<strong>${result}<strong>`; // >>>>> Once 2nd variable == 1, update DOM & END WHILE LOOP!!
    result = 1;
  }
}

// Step 88:
function negation() {
  var operand = Math.floor(Math.random() * 101) + 1; //  Random integer between 1 & 100
  document.getElementById("negation").innerHTML = `The value: ${operand}... `; // >>> DOM is updated with the chosen random number
  document.getElementById("Negation").innerHTML = `...becomes <strong>${-operand}<strong>!`;
}