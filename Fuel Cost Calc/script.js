function calculateCost() {
    if (document.getElementById("fuelCost").value == "" || document.getElementById("distance").value == "" || document.getElementById("fuelEfficiency").value == "") {
        alert("Please fill all the fields");
        return;
    } else if (document.getElementById("fuelCost").value < 0 || document.getElementById("distance").value < 0 || document.getElementById("fuelEfficiency").value < 0) {
        alert("Please enter positive values");
        return;
    }
    var fuelcost = document.getElementById("fuelCost").value;
    var totalDistance = document.getElementById("distance").value;
    var average = document.getElementById("fuelEfficiency").value;
    var userCost = 0;
    userCost = ((totalDistance / average) * fuelcost).toFixed(2);
    document.getElementById("user-cost").innerHTML = "The cost of the trip is Rs " + userCost;
}