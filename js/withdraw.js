document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the input field value
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';

    // get withdraw value
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(previousWithdrawElement.innerText);
    
    // set withdraw value
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    previousWithdrawElement.innerText = newWithdrawAmount;

    // get balance
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(previousBalanceElement.innerText);
    
    // set balance
    const newBalanceAmount = previousBalanceAmount - withdrawAmount;
    previousBalanceElement.innerText = newBalanceAmount;
    
})