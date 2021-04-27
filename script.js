const txtInput = document.getElementById('txt')
const rangeInput = document.getElementById('range')
const displayNumber = document.getElementById('range-output')
const txtOutput = document.getElementById('output')
const txtContainer = document.getElementById('txtContainer')

const onChangingInputText = () => {
  txtOutput.innerHTML = txtInput.value
  fitText(rangeInput.value)
}

const fitText = (containerWidth, fontSize = 48) => {
  txtOutput.style.fontSize = fontSize + 'px'
  let currentContainerWidth = containerWidth

  while (txtOutput.offsetWidth > txtContainer.offsetWidth) {
    currentContainerWidth = currentContainerWidth - 1
    txtOutput.style.fontSize = currentContainerWidth + 'px'
  }
}

const onChangingContainerWidth = () => {
  let containerWidth = rangeInput.value

  displayNumber.innerHTML = containerWidth + 'px'

  txtContainer.style.width = containerWidth + 'px'

  fitText(containerWidth)
}
