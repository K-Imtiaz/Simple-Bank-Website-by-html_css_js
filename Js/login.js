//step: 1 - add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    //step-2: get the email address inside the input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    //step-3: get password
    //3.a.set  id on the html element
    //3.b.get the element
    //3.c get the value from elemn

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email);
    console.log(password);
    //Danger : Do not verify email password on the client site
    //step:4- verify email and password and check whether user valid user or not
    if (email === 'shishir501103@gmail.com' && password === 'Shishir@959') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }
})












// user-password