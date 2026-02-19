
document.getElementById('trans-money-btn').addEventListener('click', function(){
    const userNumber = getInputValue('trans-money-num');
    if(userNumber.length !== 11){
        alert('Invalid User Number');
        return;
    }

    const currentBal = getBalance('balance');
    const amount = getInputValue('trans-money-amount');
    const newBal = currentBal - Number(amount);
    if(newBal < 0){
        alert('Invalid Amount');
        return;
    }

    const pin = getInputValue('trans-money-pin');
    if(pin == '9983'){
        alert("Tranfer Money Successful");
        setBalance(newBal);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})