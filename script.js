const txtInput = document.getElementById('txt');
const rangeInput = document.getElementById('range');
const displayNumberInPX = document.getElementById('range-output');
const txtOutput = document.getElementById('output');
const txtContainer = document.getElementById('txtContainer');

const onChangingInputText = () => {
  output.innerHTML = txtInput.value;
};

const fitText = (containerWidth, fontSize = 48) => {
  txtOutput.style.fontSize = fontSize + 'px';

  while (txtOutput.offsetWidth > txtContainer.offsetWidth) {
    txtOutput.style.fontSize = --containerWidth + 'px';
  }
};

const onChangingContainerWidth = () => {
  let containerWidth = rangeInput.value;

  displayNumberInPX.innerHTML = containerWidth + 'px';

  txtContainer.style.width = containerWidth + 'px';

  fitText(containerWidth);
};
