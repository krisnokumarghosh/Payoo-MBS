
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


         const history = document.getElementById('Transactions');
        const newHistoryChild = document.createElement('div');

        newHistoryChild.innerHTML = `
        
            <div class="card   card-xs shadow-sm p-3 w-full bg-white">
            <div class="card-body">
                <h2 class="card-title font-bold text-[16px]">Cash Out Money</h2>
                 <p class="font-semibold text-[13px] text-primary/60">Cash Out $${amount} success , agent number ${agentNum} , at ${new Date()} </p>
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