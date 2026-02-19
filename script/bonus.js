
document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const coupon = getInputValue('get-bonus-coupon');
    const currentBal = getBalance('balance');
    const newBal = currentBal + 1000;
    if(coupon == 'k9983'){
        alert("congratulations!! You Got $1000 Bonus");
        setBalance(newBal);


         const history = document.getElementById('Transactions');
        const newHistoryChild = document.createElement('div');

        newHistoryChild.innerHTML = `
        
            <div class="card   card-xs shadow-sm p-3 w-full bg-white">
            <div class="card-body">
                <h2 class="card-title font-bold text-[16px]">Bonus</h2>
                 <p class="font-semibold text-[13px] text-primary/60"> Bonus $1000 added , at ${new Date()} </p>
             </div>
        </div>
       
        `

        history.append(newHistoryChild);
    }
    else{
        alert("Invalid Coupon");
        return;
    }
})