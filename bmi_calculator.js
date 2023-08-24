function bmi_calculator() {
  let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');
  let metricRadio = document.querySelector('.metric');
  let imperialRadio = document.querySelector('.imperial');

  heightInput.addEventListener('input', calculateBMI);
  weightInput.addEventListener('input', calculateBMI);

  imperialRadio.addEventListener('click', function() {
    metricRadio.disabled = true;
  });

  metricRadio.addEventListener('click', function() {
    imperialRadio.disabled = true;
  });
}

function calculateBMI() {
  let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    console.log("Invalid input values");
    return;
  }

  let bmi = weight / (height * height);

  console.log("Height:", height);
  console.log("Weight:", weight);
  console.log("BMI:", bmi);
}
function calculateBMIWithDelay() {
  let height = parseFloat(document.querySelector('.height-input').value);
  let weight = parseFloat(document.querySelector('.weight-input').value);

  // Check if both height and weight have been entered
  if (!isNaN(height) && !isNaN(weight)) {
    // Clear any previous timeout to prevent overlapping
    clearTimeout(window.bmiTimeout);

    // Set a new timeout of 10 seconds to calculate and display the result
    window.bmiTimeout = setTimeout(function() {
      let bmi = weight / ((height / 100) * (height / 100));
      let message = `Your BMI is: ${bmi.toFixed(2)}`;
      console.log(message);
    }, 10000); // Delay of 10 seconds (10000 milliseconds)
  }
}


bmi_calculator();
