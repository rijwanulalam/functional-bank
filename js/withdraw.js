// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function(){
    const newWithdrawInput = handleDepositInputById("input-withdraw");
    const withdrawTotal = getTextElementById("withdraw-money");
    const newWithdrawTotal = newWithdrawInput + withdrawTotal;

    setTextElementById("withdraw-money", newWithdrawTotal);

    // balance
    const currentBalance = getTextElementById("balance-money");
    const newTotalBalance = currentBalance - newWithdrawInput;
    setTextElementById("balance-money", newTotalBalance);
})