
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input field 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElemant = document.getElementById(totalFieldId);
    const totalText = totalElemant.innerText;
    const previousAmount = parseFloat(totalText);
    totalElemant.innerText = previousAmount + amount;

}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(priviousBalanceText);
    return previousBalanceAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const priviousBalanceText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(priviousBalanceText);
    const previousBalanceAmount =getCurrentBalance()
   if(isAdd == true){
    balanceTotal.innerText = previousBalanceAmount + amount;
   }
   else{
    balanceTotal.innerText = previousBalanceAmount - amount;
   }
    
}



document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount diposit 

    /*
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    */

    // console.log(depositAmount);
    
    // update deposit total 
   /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + newDepositAmount;
    */

    // update account balance

    /*
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(priviousBalanceText);
    balanceTotal.innerText = previousBalanceAmount + newDepositAmount;*/

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    
    
    // clear the deposit input field 
    // depositInput.value = '';
})

// withdraw money from balance 

document.getElementById('withdraw-button').addEventListener('click', function(){

    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    */

    // console.log(newWithdrawAmountText);

    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    withdrawTotal.innerText = previousWithdrawAmount + newWithdrawAmount; */
    
    // update account balance
    /*
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(priviousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    */

   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
   }
   if(withdrawAmount > currentBalance){
       console.log('you can not withdraw if you have less then current money');
   }
})