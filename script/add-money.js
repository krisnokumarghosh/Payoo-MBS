
document.getElementById('add-money-btn').addEventListener('click', function(){
    const bank = getInputValue('add-money-bank');
    if(bank == 'Select Bank'){
        alert("Please select a Bank");
        return;
    }

    const accNUmber = getInputValue('add-money-number');
    if(accNUmber.length !== 11){
        alert("Invalid Acc. Number")
        return;
    }

    const currentBal = getBalance('balance');
    const amount = getInputValue('add-money-amount');
    const newBal = currentBal + Number(amount);

    const pin = getInputValue('add-money-pin');
    if(pin == '9983'){
        alert("Add Money Successful");
        setBalance(newBal);
    }
    else{
        alert("Invalid Pin")
        return;
    }
})