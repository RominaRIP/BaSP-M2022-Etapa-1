window.onload = function () {
    var emailInput = document.getElementById('email');
    var passInput = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message-container');
    var validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    function validateEmail() {
        if (!emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('hidden-message');
            messageAlert[0].classList.add('invalid-field');
            messageAlert[0].innerHTML = "Please, insert a valid e-mail address";
        } else if (emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('hidden-message');
            messageAlert[0].classList.remove('invalid-field');
            messageAlert[0].classList.add('valid-field');
            messageAlert[0].innerHTML = "Correct";
        }
    };
    emailInput.onblur = function () {
        validateEmail();
    };
    emailInput.onfocus = function () {
        messageAlert[0].classList.add('hidden-message');
    };

    function validPass(x) {
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var num = 0;
        var char = 0;
        for (i = 0; i < x.value.length; i++) {
            if (numbers.includes(x.value[i])) {
                num++;
            } else {
                char++;
            }
        };
        if (x.value.length >= 8 && num >= 1 && char >= 1) {
            return true;
        } else {
            return false;
        }
    };

    function validatePassword() {
        if (passInput.value.match(validPass)) {
            messageAlert[1].classList.remove('hidden-message');
            messageAlert[1].classList.remove('invalid-field');
            messageAlert[1].classList.add('valid-field');
            messageAlert[1].innerHTML = 'Correct';
        } else if (!emailInput.value.match(validEmail)) {
            messageAlert[1].classList.remove('hidden-message');
            messageAlert[1].classList.add('invalid-field');
            messageAlert[1].innerHTML = 'Error';
        }
    };
    passInput.onblur = function () {
        validatePassword ();
    };
    
    passInput.onfocus = function() {
        messageAlert[1].classList.add('hidden-message');
    };
}