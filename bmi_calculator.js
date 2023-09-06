 let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');
  let metricRadio = document.getElementById('metric');
  let imperialRadio = document.getElementById('imperial');
  metricRadio.checked = true;

  //bmi calculator for metric unit
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
  });

  function bmi_metric() {
    
  }

