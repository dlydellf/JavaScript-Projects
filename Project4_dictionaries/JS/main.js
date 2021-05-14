function dictionary() {
  var Vehicle = {
    Type: "Car",
    Purchased: "Pre-Owned",
    Year: 2019,
    Make: "Audi",
    Model: "A4",
    Engine: "Hybrid",
    Cyclinders: 4,
    Transmission: "Auto",
    Insured: "True",
    Interior: "Leather",
    InteriorColor: "Black",
    ExteriorColor: "Black",
    Mileage: 24000,
  };
  document.getElementById("Dictionary").innerHTML = Vehicle.Engine;
}
