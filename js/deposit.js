
// deposite
document.getElementById("deposit-btn").addEventListener("click", function(){
    const newDepositInput = handleDepositInputById("input-deposit");
    const previousDepositTotal = getTextElementById("deposit-money");

    const newDepositTotal = newDepositInput + previousDepositTotal;

    setTextElementById("deposit-money", newDepositTotal);

    // new balance

    const previousBalance = getTextElementById("balance-money");
    const totalBalance = newDepositInput + previousBalance;

    setTextElementById("balance-money", totalBalance)

})

