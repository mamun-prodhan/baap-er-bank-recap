document.getElementById('btn-deposit').addEventListener('click', function(){
    // get the deposit input field value
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    depositField.value = ''; 

    // get previous deposit amount
    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(previousDepositElement.innerText);
    
    // set new deposit total
    const newDepositTotal = previousDepositTotal + depositAmount;
    previousDepositElement.innerText = newDepositTotal;

    // update balance
    const previousTotalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);
    const newTotalBalance = previousTotalBalance + depositAmount;
    previousTotalBalanceElement.innerText = newTotalBalance;
    
})