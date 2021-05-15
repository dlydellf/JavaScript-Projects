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
  document.getElementById("Test1").innerHTML = `Is "0 &#247 0" a Number, or NaN?  Answer: <strong>${0 / 0}</strong>`; // part 1
  document.getElementById("Test2").innerHTML = `"1 + two" is NaN, True or False? Answer: <strong>${isNaN(
    1 + "two",
  )}</strong>`; // part 2
  document.getElementById("Test3").innerHTML = `"1 + 2" is NaN, True or False?  Answer: <strong>${isNaN(
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
  if (1 == "one") {
    document.getElementById("doubleEqualF").innerHTML = "This sentence shouldn't display";
  } else {
    document.getElementById(
      "doubleEqualF",
    ).innerHTML = `Does the string "one" == (equal, by value) 1?  Answer: <strong>${1 == "one"}</strong>`;
  }
}
