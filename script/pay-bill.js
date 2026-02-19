
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


         const history = document.getElementById('Transactions');
        const newHistoryChild = document.createElement('div');

        newHistoryChild.innerHTML = `
        
            <div class="card   card-xs shadow-sm p-3 w-full bg-white">
            <div class="card-body">
                <h2 class="card-title font-bold text-[16px]">Pay Bill</h2>
                 <p class="font-semibold text-[13px] text-primary/60"> ${payBillOption} $${amount} success , Biller NUmber ${billAccNo} , at ${new Date()} </p>
             </div>
        </div>
       
        `

        history.append(newHistoryChild);
    }
    else{
        alert("Invalid Pin");
    }
})