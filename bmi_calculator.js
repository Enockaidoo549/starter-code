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
    let imperialDisplay = document.querySelector('.js-result-display');

    if (imperialRadio.checked){
      calculateBmiImperial();
      inputBoxImperial.style.display = "block";
      imperialRadio.checked = true;
      metricRadio.checked = false;
      inputBox.style.display = "none";
      imperialDisplay.style.display = 'flex';
      let resultDisplayImperial = document.querySelector('.js-result-display');
      resultDisplayImperial.style.display = 'block';
      let initMessageBoard = document.querySelector('.message-board');
      initMessageBoard.style.display = 'none';
    }
      else {
        metricRadio.addEventListener('click', function() {
          metricRadio.checked = true;
          imperialRadio.checked = false;
          heightInput.placeholder = '0';
          weightInput.placeholder = '0';
          document.querySelector('.metric-height').textContent = 'cm';
          document.querySelector('.metric-weight').textContent = 'kg';
        });
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

function calculateBmiImperial(){
  let heightFeet = parseFloat(document.querySelector('.js-height-feet').value);
  let heightInch = parseFloat(document.querySelector('.js-height-inch').value);
  let weightStone = parseFloat(document.querySelector('.js-weight-stone').value);
  let weightPounds = parseFloat(document.querySelector('.js-weight-pounds').value);

  // Calculate height in inches (1 foot = 12 inches)
  let heightInInches = (heightFeet * 12) + heightInch;

  // Convert weight from stones and pounds to pounds (1 stone = 14 pounds)
  let weightInPounds = (weightStone * 14) + weightPounds;

  // Calculate BMI (BMI formula for imperial units)
  let bmi_imperial = (weightInPounds / (heightInInches * heightInInches)) * 703;
  console.log(bmi_imperial);
  console.log(heightFeet, heightInch, weightStone, weightPounds);

}

