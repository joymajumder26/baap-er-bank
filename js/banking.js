function getInputValue(inputId){
    const inputField= document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue=parseFloat(inputAmountText);
         // clear the deposit value
         inputField.value='';
    return amountValue;
}
function updateTotalField (totalFieldId,Amount){
    const TotalElement= document.getElementById(totalFieldId);
    const totalText = TotalElement.innerText;
    const previousTotal= parseFloat(totalText);
  
    TotalElement.innerText =previousTotal + Amount;
}
function getCurrentBalance(){
    const balanceTotal= document.getElementById('balance-total');
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount= parseFloat(BalanceTotalText);
    return previousBalanceAmount;
}

function updateBalance(Amount,isadd){
    
    const balanceTotal= document.getElementById('balance-total');
/*
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount= parseFloat(BalanceTotalText);
*/
const previousBalanceAmount=getCurrentBalance();
    if(isadd == true){
        balanceTotal.innerText=previousBalanceAmount+Amount;
    }
    else{
        balanceTotal.innerText=previousBalanceAmount-Amount;
    }
}


// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    /*
    const depositInput= document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount=parseFloat(newDepositText);
    */
   
    // console.log(newDepositText)
    // update deposit total
   /*
    const depositTotal= document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount= parseFloat(previousDepositAmountText);


    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText =newDepositTotal;
*/



    // update account balance
    /*
    const balanceTotal= document.getElementById('balance-total');
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount= parseFloat(BalanceTotalText);
    // console.log(BalanceTotalText)

    const newBalanceTotal=previousBalanceAmount+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;
    
*/
const newDepositAmount=getInputValue("deposit-input");
if(newDepositAmount>0){
    updateTotalField("deposit-total",newDepositAmount);
updateBalance(newDepositAmount,true);
}
if(newDepositAmount<0){
    alert("not taken negative value")
}

    
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    */
 
    // console.log(newWithdrawAmount);
// set withdraw total
/*
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount= parseFloat(previousWithdrawAmountText);


    // console.log(previousWithdrawAmount)


    const newWithdrawTotal= previousWithdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal; 
    */
  

     // clear the deposit value
     

     // update balance
 /*    
const balanceTotal=document.getElementById("balance-total");
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal=parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal -newWithdrawAmount;
balanceTotal.innerText=newBalanceTotal;

*/
const newWithdrawAmount=getInputValue("withdraw-input");
const CurrentBalance=getCurrentBalance();
if(newWithdrawAmount>0 && newWithdrawAmount<CurrentBalance){
    updateTotalField("withdraw-total",newWithdrawAmount);
updateBalance(newWithdrawAmount,false);
}
if (newWithdrawAmount>CurrentBalance){
    alert("Not have money for withdraw")
}
})



