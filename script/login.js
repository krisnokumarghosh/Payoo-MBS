
document.getElementById('login-btn').addEventListener('click', function(){
    const number = getInputValue('login-number');
    const pin = getInputValue('login-pin');

    if(number == '01929999831' && pin == '9983'){
        alert("Login Successful");

        window.location.assign('./home.html')
    }
    else{
        alert("Login Failed");
        return;
    }
})