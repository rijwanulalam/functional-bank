function handleDepositInputById(inputId) {
  const inputField = document.getElementById(inputId);
  const newMoney = parseFloat(inputField.value);
  inputField.value = "";
  return newMoney;
}

function getTextElementById(elementId) {
  const previousMoneyValue = document.getElementById(elementId);
  const previousMoney = parseFloat(previousMoneyValue.innerText);
  return previousMoney;
}

function setTextElementById(elementId, totalMoney) {
  const setTotalDeposit = document.getElementById(elementId);
  setTotalDeposit.innerText = totalMoney;
}
