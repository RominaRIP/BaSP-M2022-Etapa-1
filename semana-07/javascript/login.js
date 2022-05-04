window.onload = function () {
    var emailInput = document.getElementById('email');
    var passInput = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message-container');
    var validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var btnLogin = document.getElementsByClassName('btn-login');

    function validateEmail() {
        if (!emailInput.value.match(validEmail)) {
            messageAlert[0].classList.add('invalid-field');
            messageAlert[0].innerHTML = "Please, insert a valid e-mail address";
            return false;
        } else if (emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('invalid-field');
            messageAlert[0].classList.add('valid-field');
            messageAlert[0].innerHTML = "Valid";
            return true;
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
            return true;
        } else {
            messageAlert[1].classList.add('invalid-field');
            messageAlert[1].innerHTML = 'Not valid';
            return false;
        }
    };
    passInput.onblur = function () {
        validatePassword ();
    };
    passInput.onfocus = function() {
        messageAlert[1].classList.add('message-container');
    };

    btnLogin[0].onclick = function (showValues) {
        showValues.preventDefault();
        if (validateEmail(emailInput.value) === false) {
            alert('Your e-mail address is not correct')
        } else if (validatePassword(passInput.value) === false) {
            alert('Your password is not correct')
        } else if (validateEmail() === true && validatePassword() === true && emailInput.value == 'rose@radiumrocket.com'
        && passInput.value == 'BaSP2022') {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + emailInput.value
            + '&password=' + passInput.value)
                .then (function(response) {
                    return response.json()
                })
                .then(function (jsonResponse) {
                    if (jsonResponse.success) {
                        alert('The request was successful: '+ jsonResponse.msg + '. E-mail: ' + emailInput.value + '; '
                        + 'Password: ' + passInput.value)
                    } else {
                    throw jsonResponse
                    }
                })
                .catch(function(err) {
                    alert(err.message)
                })
        } else {
            alert('This user is not registered')
        }
    }
}