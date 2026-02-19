
document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const payBillOption = getInputValue('pay-bill-select');
    if(payBillOption == 'Select an option'){
        alert("Please Select Billing Option");
        return;
    }

    const billAccNo = getInputValue('pay-bill-number');
    if(billAccNo.length !== 11){
        alert("Invalid Biller Number");
        return;
    }

    const currentBal = getBalance('balance');
    const amount = getInputValue('pay-bill-amount');
    const newBal = currentBal - Number(amount);
    if(newBal < 0){
        alert("Invalid Amount");
        return;
    }

    const pin = getInputValue('pay-bill-pin');
    if(pin == '9983'){
        alert("Pay Bill Successful");
        setBalance(newBal);
    }
    else{
        alert("Invalid Pin");
    }
})