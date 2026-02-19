
document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const coupon = getInputValue('get-bonus-coupon');
    const currentBal = getBalance('balance');
    const newBal = currentBal + 1000;
    if(coupon == 'k9983'){
        alert("congratulations!! You Got $1000 Bonus");
        setBalance(newBal);
    }
    else{
        alert("Invalid Coupon");
        return;
    }
})