function dictionary() {
  // a dictionary with several KVPs
  var Vehicle = {
    Type: "Car",
    Purchased: "Pre-Owned",
    Year: 2019,
    Make: "Audi",
    Model: "A4",
    Engine: "Hybrid",
    Engine: "Manual", // An extra "Engine" KVP, added to see what happens when 2 pairs share the same key
    Engine: "None/Missing", // Another "Engine" KVP, added to see which (if any) of these three would display
    Cyclinders: 4,
    Transmission: "Auto",
    Insured: "True",
    Interior: "Leather",
    InteriorColor: "Black",
    ExteriorColor: "Black",
    Mileage: 24000,
  };
  delete Vehicle.Engine; // Practice using the "delete" operator to... delete a KVP (returns "undefined")
  document.getElementById("Dictionary").innerHTML = Vehicle.Engine;
}
