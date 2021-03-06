// Step 104:
document.write(typeof "Douglas"); // Practice using the "typeof" operator to display the data types of varilables of my choosing
document.write(typeof 2021);
document.write(typeof true);
document.write(typeof null);
document.write(typeof NaN);

// Step 105:
document.write(1 + 1);
document.write("1" + 1);
document.write("one" + 1);
document.write("one" + "one");

// Step 108:
function NaNChallenge() {
  document.getElementById("Test1").innerHTML = `Part 1: Is "0 &#247 0" a Number, or NaN?  Answer: <strong>${
    0 / 0
  }</strong>`; // part 1
  document.getElementById("Test2").innerHTML = `Part 2: "1 + two" is NaN, True or False? Answer: <strong>${isNaN(
    1 + "two",
  )}</strong>`; // part 2
  document.getElementById("Test3").innerHTML = `Part 3: "1 + 2" is NaN, True or False?  Answer: <strong>${isNaN(
    1 + 2,
  )}</strong>`; // part 3
}

// Step 111:
function Infin() {
  document.getElementById("Infin").innerHTML = 888e888;
}
function Infini() {
  document.getElementById("Infini").innerHTML = -888e888;
}

// Step 113:
function greaterThan() {
  if (2 > 1) {
    document.getElementById("Greater").innerHTML = `Is 2 > 1?  Answer: <strong>${2 > 1}</strong>`;
  }
}
function lessThan() {
  if (1 < 2) {
    document.getElementById("Less").innerHTML = `Is one < two?  Answer: <strong>${1 < 2}</strong>`;
  }
}

// Step 115:
let index = 0;
while (index < 11) {
  console.log(`Step 115: ${index}`);
  index++;
}

// Step 116:
let a;
if (a == a) {
  console.log(`Step 116: ${1 != 1}`);
}

// Step 118:
var that;
var somethingElse;
var This = that;
that = somethingElse;
function doubleEqualT() {
  if (This == somethingElse) {
    document.getElementById("doubleEqualT").innerHTML = `Does the string "1" == (equal, by value) 1?  Answer: <strong>${
      This == somethingElse
    }</strong>`;
  }
}
function doubleEqualF() {
  if ("one" == 1) {
    document.getElementById("doubleEqualF").innerHTML = "This sentence shouldn't display"; // ...because the condition's logic isn't true!
  } else {
    document.getElementById(
      "doubleEqualF",
    ).innerHTML = `Does the string "one" == (equal, by value) 1?  Answer: <strong>${"one" == 1}</strong>`;
  }
}

// Step 120:
function tripleEqual() {
  document.getElementById(
    "PartA",
  ).innerHTML = `Part A: Does 2 === (10 &#247 5) in both data type AND value?  Answer: <strong>${
    2 === 10 / 5
  }</strong>`;
  document.getElementById(
    "PartB",
  ).innerHTML = `Part B: Does 2 (value: 2, dataType: number) === Twenty-one (value:21, dataType: string)?  Answer: <strong>${
    2 === "Twenty-one"
  }</strong>`;
  document.getElementById(
    "PartC",
  ).innerHTML = `Part C: Does 2 (value: 2, dataType: number)=== "Two" (value: 2, dataType: string)?  Answer: <strong>${
    2 === "Two"
  }</strong>`;
  document.getElementById(
    "PartD",
  ).innerHTML = `Part D: Does "Money" (dataType: string, value:"Money") === "Happiness" (dataType: string, value: "Happiness")?  Answer: <strong>${
    "Money" === "Happiness"
  }</strong>`;
}

// Step 122:
function and() {
  document.getElementById(
    "andT",
  ).innerHTML = `For AND: Is (1 less than 2 && 2 greater than 1) True or False?  Answer: <strong>${
    1 < 2 && 2 > 1
  }</strong>`;
  document.getElementById(
    "andF",
  ).innerHTML = `For AND: Is (1 less than 2 && 2 less than 1) True or False?  Answer: <strong>${
    1 < 2 && 2 < 1
  }</strong>`;
}
function or() {
  document.getElementById(
    "orT",
  ).innerHTML = `For OR: True or False:  (1 is less than 2 || 2 is less than 1)?  Answer: <strong>${
    1 < 2 || 2 < 1
  }</strong>`;
  document.getElementById(
    "orF",
  ).innerHTML = `For OR: True or False: (2 is less than 1 || 1 is greater than 1)?  Answer: <strong>${
    2 < 1 || 1 > 21
  }</strong>`;
}

// Step 124:
function notT() {
  document.getElementById("NotT").innerHTML = `True or False: Is "!(10 < 1)" (10 NOT less than 1)?  Answer: <strong>${!(
    10 < 1
  )}</strong>`;
}
function notF() {
  document.getElementById(
    "NotF",
  ).innerHTML = `True or False: Is "!(10 > 1)" (10 NOT greater than 1)?  Answer: <strong>${!(10 > 1)}</strong>`;
}
