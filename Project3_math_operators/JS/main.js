// Steps 78 & 92
function randomNum() {
  var randNumA = Math.floor(Math.random() * 11); //  Random integer between 0 & 10
  var randNumB = randNumA + 2; //  Random integer between 0 & 12
  var result = ((randNumA + randNumB) / randNumA) * randNumB; // The basic mathematical operations, further randomizing the output
  document.getElementById(
    "Math",
  ).innerHTML = `[(${randNumA} + ${randNumB}) &#247 ${randNumA}] x ${randNumB} = <strong>${result}<strong>`; // Places the result in the DOM
}

// Steps 80 & 92
function subtraction() {
  var numB = Math.floor(Math.random() * 21) + 1; // Random integer between 1 & 20
  var numA = numB * 2 + 3; // Random integer
  var difference = numA - numB; // subtracts 1st num from 2nd num
  document.getElementById("Subtraction").innerHTML = `${numA} - ${numB} = <strong>${difference}<strong>`; // Places the result in the DOM
}

// Steps 82 & 92
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

// Steps 84, 86 & 92
function firstHelper(result) {
  if (result % 2 == 0) {
    var result2 = result / 2;
    return `(${result} is <em>EVEN</em>, so "${result} &#247 2" = <strong>${result2}</strong>, ${lastHelper(result2)})`;
  } else {
    var result2 = result * 3 + 1;
    return `(${result} is <em>ODD</em>, so "${result} x 3" is ${
      result * 3
    }, and + 1 = <strong>${result2}</strong>, ${lastHelper(result2)})`;
  }
}
function lastHelper(result2) {
  if (result2 % 2 == 0) {
    return `...which is <em>EVEN</em>, so again, "${result2} &#247 2" = <strong>${result2 / 2}</strong>...`;
  } else {
    return `...which is <em>ODD</em>, so again we do "${result2} x 3", getting ${
      result2 * 3
    }, and adding 1 again = <strong>${result2 * 3 + 1}</strong>...`;
  }
}

function allAtOnce() {
  var randNumb = Math.floor(Math.random() * 51) + 2; // Random integer between 2 & 50
  document.getElementById(
    "RandNumb",
  ).innerHTML = `<li>A number between 2 and 50 was randomly chosen: <br><strong>${randNumb}</strong></li><ul id="Evens"></ul><ul id="Odds"></ul><br><li id="Results"></li>`; // >>>>> DOM is updated with the chosen random number & prepped to display function's next output.
  var result = randNumb; // Declare & assign a 2nd variable equal to the random number
  while (result != 1) {
    // As long as the 2nd variable is NOT 1...
    if (result % 2 == 0) {
      // ...check if the 2nd variable is even.
      var result = randNumb / 2; // If the random number IS even, halve it & reassign the result to the 2nd variable.
      document.getElementById("Evens").innerHTML = `<li>If even, &#247 2:<br>${result}</li>`; // >>>>> Update DOM with previous line's result.
      document.getElementById("Odds").innerHTML = `<li><s>If odd, x3 and then +1:</s></li>`; // User needs to see this to follow function's purpose/logic!
    } else {
      var result = randNumb * 3 + 1; // If 2nd variable is ODD, multiply by 3 and add 1
      document.getElementById("Odds").innerHTML = `<li>If odd, x 3 and then +1:<br>${result}</li>`; // >>>>> Update DOM with previous line's result.
      document.getElementById("Evens").innerHTML = `<li><s>If even, &#247 2:</s></li>`; // User needs to see this to follow function's purpose/logic!
    }
    document.getElementById(
      "Results",
    ).innerHTML = `Keep repeating these steps with the results from above:<br>${firstHelper(
      result,
    )}<br><br>...and you'll eventually reach the number "1"!<br>(This math gem works regardless of <em>HOW LARGE</em> your starting number is!)`; // >>>>> GOTO while loop's entrance
    result = 1; // Thanks to Ben, was added to END WHILE LOOP!
  }
} // Function doesn't continuously calculate down to 1, yet.

// Steps 88 & 92:
function negation() {
  var operand = Math.floor(Math.random() * 101) + 1; //  Random integer between 1 & 100
  document.getElementById("negation").innerHTML = `The value: ${operand}... <br>`; // >>> DOM is updated with the chosen random number
  document.getElementById("Negation").innerHTML = `...becomes <strong>${-operand}<strong>!`;
}
// Steps 90 & 92
function increment() {
  var randNum = Math.floor(Math.random() * 101) + 1; // Random integer between 1 & 100
  var newRandNum = randNum; // "++" was DECREASING randNum by 1 & "--" is INCREASED it, so operator moved to seperate line
  newRandNum++;
  document.getElementById(
    "Increment",
  ).innerHTML = `The value ${randNum} was <em>incremented</em> (by one) to <strong>${newRandNum}</strong>.`;
}
function decrement() {
  var randNumb = Math.floor(Math.random() * 101) + 1; // Random integer between 1 & 100
  var newRandNumb = randNumb; // Same as above; "--" INCREASED randNumb by 1, while "++" DECREASED it; same solution
  newRandNumb--;
  document.getElementById(
    "Decrement",
  ).innerHTML = `The value ${randNumb} has been <em>decremented</em> (by one) to <strong>${newRandNumb}</strong>.`;
}

// Step 93
function mathObjectMethod() {
  var randBase = Math.floor(Math.random() * 16) + 1; // Random integer (for the base) between 1 & 15
  var randExp = Math.floor(Math.random() * 4) + 1; // Random integer (for the exponent) between 1 & 3
  document.getElementById(
    "MathObjectMethod",
  ).innerHTML = `A base of <u>${randBase}</u>, raised to the power of <u>${randExp}</u>, equals <strong>${Math.pow(
    randBase,
    randExp,
  )}</strong>.`;
}
