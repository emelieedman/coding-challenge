const txtInput = document.getElementById('txt');
const rangeInput = document.getElementById('range');
const output = document.getElementById('output');

const onChangingInputText = () => {
  output.innerHTML = txtInput.value;
};
