const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', function() {
    const expectedLength = parseInt(validationInput.dataset.length, 10);
    const enteredValue = validationInput.value.trim();
    const isValid = enteredValue.length === expectedLength;

    if (isValid) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  });