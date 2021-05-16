// Step 127:
function Ride_Function() {
  // this function was provided in the instructions
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Step 128:
function oldEnough() {
  var Age = document.getElementById("Age").value;
  var Can_vote = Age >= 18 ? "Congratulations!  You are old enough" : "Sorry, but you are too young";
  document.getElementById("Vote").innerHTML = `${Can_vote} to vote!`;
}
