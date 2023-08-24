function bmi_calculator() {
  let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');
  let metricRadio = document.getElementById('metric');
  let imperialRadio = document.getElementById('imperial');

  metricRadio.checked = true;

  heightInput.addEventListener('input', calculateBMIWithDelay);
  weightInput.addEventListener('input', calculateBMIWithDelay);

  metricRadio.addEventListener('click', function() {
    metricRadio.checked = true;
    imperialRadio.checked = false;
    heightInput.placeholder = '0';
    weightInput.placeholder = '0';
    document.querySelector('.metric-height').textContent = 'cm';
    document.querySelector('.metric-weight').textContent = 'kg';
  });

  imperialRadio.addEventListener('click', function() {
    imperialRadio.checked = true;
    metricRadio.checked = false;
    heightInput.placeholder = '0';
    weightInput.placeholder = '0';
    document.querySelector('.metric-height').textContent = 'in';
    document.querySelector('.metric-weight').textContent = 'lbs';
  });

  heightInput.addEventListener('input', calculateBMIWithDelay);
  weightInput.addEventListener('input', calculateBMIWithDelay);
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
      let classification = " ";
      if (bmi < 18.5){
        classification="underweight";
      } else if (bmi >= 18.5 && bmi <=24.9) {
        classification = "Healthy weight";
      }
      let message = `Your BMI is: ${bmi.toFixed(2)}`;
      document.querySelector('.message-topic').textContent = message;
      console.log(message);
    }, 10000); // Delay of 10 seconds (10000 milliseconds)


  }
}

bmi_calculator();
