
document.getElementById('cashout-btn').addEventListener('click', function(){
    const agentNum = getInputValue('cashout-number');
    if(agentNum.length !== 11){
        alert("Invalid Agent Number");
        return;
    }

    const amount = getInputValue('cashout-amount');
    const currentBal = getBalance('balance')
    const newBal = currentBal - Number(amount);
     console.log(newBal);
    if(newBal < 0){
        alert("Invalid Amount");
        return;
    }

    const pin = getInputValue('cashout-pin');
    if(pin == '9983'){
        alert("Cashout Successful");
        setBalance(newBal);
       
    }
    else{
        alert("Invalid Pin");
        return;
    }
})