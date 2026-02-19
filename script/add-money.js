
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

        const history = document.getElementById('Transactions');
        const newHistoryChild = document.createElement('div');

        newHistoryChild.innerHTML = `
        
            <div class="card   card-xs shadow-sm p-3 w-full bg-white">
            <div class="card-body">
                <h2 class="card-title font-bold text-[16px]">Add Money</h2>
                 <p class="font-semibold text-[13px] text-primary/60">Add Money $${amount} success from ${bank} , Acc. Number ${accNUmber} , at ${new Date()} </p>
             </div>
        </div>
       
        `

        history.append(newHistoryChild);
    }
    else{
        alert("Invalid Pin")
        return;
    }
})