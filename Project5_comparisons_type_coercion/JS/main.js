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
  document.getElementById("Test1").innerHTML = `Is "0 &#247 0" a Number, or NaN?  Answer: ${0 / 0}`; // part 1
  document.getElementById("Test2").innerHTML = `"1 + two" is NaN, True or False? Answer: ${isNaN(1 + "two")}`; // part 2
  document.getElementById("Test3").innerHTML = `"1 + 2" is NaN, True or False?  Answer: ${isNaN(1 + 2)}`; // part 3
}

// Step 111:
function Infin() {
  document.getElementById("Infin").innerHTML = 888e888;
}
function Infini() {
  document.getElementById("Infini").innerHTML = -888e888;
}
