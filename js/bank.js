document.getElementById('login-submit').addEventListener('click',function(){
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   console.log(userEmail);
//    get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

// check email or password

    if (userEmail=="joy@gmail.com" && userPassword=='11223'){
        
        window.location.href='banking.html';
    }
})
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    console.log("dfhsjkfhjk")
})
