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

// Step 132:
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Step 133:
function Desk(Material, Type, Color, Retailer) {
  this.Desk_Material = Material;
  this.Desk_Type = Type;
  this.Desk_Color = Color;
  this.Desk_Retailer = Retailer;
}

var A101 = new Desk("wood", "Drafting", "white", "Amazon");
var B202 = new Desk("metal", "Conference", "grey", "Office Depot");
var C303 = new Desk("glass", "Home_Office", "clear", "HSN");
var D404 = new Desk("plastic", "Children", "orange", "Walmart");
function ourDesks() {
  document.getElementById(
    "New_and_This",
  ).innerHTML = `Our all-${A101.Desk_Color}, ${A101.Desk_Type} desks made from ${A101.Desk_Material} are now available at ${A101.Desk_Retailer}!`;
}
