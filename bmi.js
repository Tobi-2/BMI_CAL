function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var weightUnit = document.getElementById("weightUnit");
    var resultDiv = document.getElementById("result");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    }
  
    // Convert weight to kilograms if the unit is pounds
    if (weightUnit.value === "lbs") {
      weight = weight * 0.453592; // 1 pound = 0.453592 kilograms
    }
  
    var bmi = weight / ((height / 100) ** 2);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
  }
  
  //function calculateBMI() {
    // Get height and weight input values
    //var height = parseFloat(document.getElementById("height").value);
    //var weight = parseFloat(document.getElementById("weight").value);
    //var weightUnit = document.getElementById("weightUnit").value;

    // Convert weight to kg if it's in lbs
    //if (weightUnit === "lbs") {
      //  weight *= 0.453592; // 1 pound = 0.453592 kg
    //}

    // Calculate BMI
    //var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
 //   var resultElement = document.getElementById("result");
   // resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);
//}//
  