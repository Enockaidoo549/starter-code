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
    let inputBoxImperial = document.querySelector('.input-box-imperial');
    let inputBox = document.querySelector('.input-box');

    if (imperialRadio.checked === true){
      inputBoxImperial.style.display = "block";
      imperialRadio.checked = true;
      metricRadio.checked = false;
      inputBox.style.display = "none";
    }
      else {
        inputBoxImperial.style.display = "none";
        inputBox.style.display = "block";
      }}
  );

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

    // Set a new timeout of 2 seconds to calculate and display the result
    window.bmiTimeout = setTimeout(function() {
      let bmi = weight / ((height / 100) * (height / 100));
      let classification = "";
      if (bmi < 18.5){
        classification = "underweight";
      } else if (bmi >= 18.5 && bmi <=24.9) {
        classification = "Healthy weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        classification = "Overweight";
      } else {
        classification = "Obese";
      }
      
      let resultMessage = document.querySelector('.result-message');
      resultMessage.textContent = `Your BMI is: ${bmi.toFixed(1)}`;
      resultMessage.style.display = 'block'; // Show the message

      let resultClassification = document.querySelector('.result-classification');
      resultClassification.textContent = `Your BMI suggests you are ${classification}`;
      resultClassification.style.display = 'block'; // Show the message

      let messageTopic = document.querySelector('.message-topic');
      let messageBody = document.querySelector('.message-body');

      messageTopic.style.display = 'none'; // Hide the message topic
      messageBody.style.display = 'none'; // Hide the message body

      // Set a timeout to show the initial messages and hide the result messages
      setTimeout(function() {
        messageTopic.style.display = 'block'; // Show the message topic
        messageBody.style.display = 'block'; // Show the message body
        
        resultMessage.style.display = 'none'; // Hide the result message
        resultClassification.style.display = 'none'; // Hide the classification message
      }, 10000); // Delay of 10 seconds

      console.log(resultMessage.textContent);
    }, 2000); // Delay of 2 seconds 
  }
}

bmi_calculator();
