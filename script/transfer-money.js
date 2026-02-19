
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


         const history = document.getElementById('Transactions');
        const newHistoryChild = document.createElement('div');

        newHistoryChild.innerHTML = `
        
            <div class="card   card-xs shadow-sm p-3 w-full bg-white">
            <div class="card-body">
                <h2 class="card-title font-bold text-[16px]">Transfer Money</h2>
                 <p class="font-semibold text-[13px] text-primary/60">Money Transfer $${amount} success , Acc. number ${userNumber} , at ${new Date()} </p>
             </div>
        </div>
       
        `

        history.append(newHistoryChild);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})