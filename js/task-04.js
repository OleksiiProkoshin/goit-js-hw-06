const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

function updateCounter () {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', function() {
    counterValue--;
    updateCounter();
  });

incrementButton.addEventListener('click', function() {
    counterValue++;
    updateCounter();
  });

updateCounter();