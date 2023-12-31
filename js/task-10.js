function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const controlsDiv = document.getElementById('controls');
  const input = controlsDiv.querySelector('input');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = Number(input.value);
    const boxes = [];

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxes.push(box);
    }

    boxesDiv.append(...boxes);
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }

