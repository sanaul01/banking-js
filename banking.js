// function getInputValue(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputAmountText = inputField.value;
//     const amountValue = parseFloat(inputAmountText);
//     // clear the deposit input field 
//     inputField.value = '';
//     return amountValue;
// }

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // clear the deposit input field 
    depositInput.value = '';
    return newDepositAmount;
}



document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount diposit 


    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);


    // console.log(depositAmount);
    const newDepositAmount = getInputValue();

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(priviousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field 
    // depositInput.value = '';

    
})

// withdraw money from balance 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log(newWithdrawAmountText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = totalWithdraw;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(priviousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    withdrawInput.value = '';
})