window.onload = function () {
    var emailInput = document.getElementById('email');
    var passInput = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message-container');
    var validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var btnLogin = document.getElementsByClassName('btn-login');
    var finalMessage = document.getElementsByClassName('form-data');

    function validateEmail() {
        if (!emailInput.value.match(validEmail)) {
            messageAlert[0].classList.add('invalid-field');
            messageAlert[0].innerHTML = "Please, insert a valid e-mail address";
        } else if (emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('invalid-field');
            messageAlert[0].classList.add('valid-field');
            messageAlert[0].innerHTML = "Valid";
        }
    };
    emailInput.onblur = function () {
        validateEmail();
    };
    emailInput.onfocus = function () {
        messageAlert[0].classList.add('message-container');
    };

    function validatePassword() {
        if (passInput.value.length >= 8) {
            messageAlert[1].classList.remove('invalid-field');
            messageAlert[1].classList.add('valid-field');
            messageAlert[1].innerHTML = 'Valid';
        } else {
            messageAlert[1].classList.add('invalid-field');
            messageAlert[1].innerHTML = 'Not valid';
        }
    };
    passInput.onblur = function () {
        validatePassword ();
    };
    passInput.onfocus = function() {
        messageAlert[1].classList.add('message-container');
    };

    function showValues () {
        if (emailInput.value.match(validEmail) && passInput.value.length >= 8) {
            finalMessage[0].classList.remove('form-data');
            finalMessage[0].innerHTML +=  
            `<li>Password: ${passInput.value}</li>` +
            `<li>Email: ${emailInput.value}</li>`;
        } else {
            alert('Your data is not valid');
        }
    };

    btnLogin[0].onclick = function (e) {
        showValues();
        e.preventDefault();
    };
}