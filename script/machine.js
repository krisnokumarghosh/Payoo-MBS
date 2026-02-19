
function getInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id , value);
    return value;
}

function getBalance (id){
    const balanceElem = document.getElementById(id);
    const balance = balanceElem.innerText;
    console.log('current bal = ', balance);
    return Number(balance);
}

function setBalance (value){
    const balanceElem = document.getElementById('balance');
    balanceElem.innerText = value;
    
}

function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const info = document.getElementById('info');
    const transMoney = document.getElementById('transfer-money');
    const getBonus = document.getElementById('get-bonus');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    info.classList.add('hidden');
    transMoney.classList.add('hidden');
    getBonus.classList.add('hidden')

    const selectedId = document.getElementById(id);
    selectedId.classList.remove('hidden');
}

// function pinVerify (){
//     const allInput = document.getElementById('trans-money-pin' , 'cashout-pin' , 'add-money-pin');

//     for(const input of allInput){
//         const value = input.value;
//         if(value !== )
//     }
// }