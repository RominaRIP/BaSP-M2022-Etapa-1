window.onload = function () {
    var emailInput = document.getElementById('email');
    var passInput = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message-container');
    var validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var form = document.getElementsByTagName('form');

    function validateEmail() {
        if (!emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('hidden-message');
            messageAlert[0].classList.add('invalid-field');
            messageAlert[0].innerHTML = "Please, insert a valid e-mail address";
        } else if (emailInput.value.match(validEmail)) {
            messageAlert[0].classList.remove('hidden-message');
            messageAlert[0].classList.remove('invalid-field');
            messageAlert[0].classList.add('valid-field');
            messageAlert[0].innerHTML = "Valid";
        }
    };
    emailInput.onblur = function () {
        validateEmail();
    };
    emailInput.onfocus = function () {
        messageAlert[0].classList.add('hidden-message');
    };

/*     function validPass(x) {
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];
        var minValue = x.value.toLowerCase();
        var num = 0;
        var char = 0;
        var special = false;
        for (i = 0; i < x.value.length; i++) {
            if (numbers.includes(x.value[i])) {
                num++;
            } else if (alph.includes(minValue[i])) {
                char++;
            } else {
                special = true;
            }
        }
        if (x.value.length >= 8 && num >= 1 && char >= 1 && special == false) {
            return true;
        } else {
            return false;
        }
    }  */   

    function validatePassword() {
        if (passInput.value.length >= 8) {
            messageAlert[1].classList.remove('hidden-message');
            messageAlert[1].classList.remove('invalid-field');
            messageAlert[1].classList.add('valid-field');
            messageAlert[1].innerHTML = 'Valid';
        } else {
            messageAlert[1].classList.remove('hidden-message');
            messageAlert[1].classList.add('invalid-field');
            messageAlert[1].innerHTML = 'Not valid';
        }
    };

    passInput.onblur = function () {
        validatePassword ();
    };
    
    passInput.onfocus = function() {
        messageAlert[1].classList.add('hidden-message');
    };

    /* function validateForm() {
        if (validateEmail(emailInput) = true && validatePassword(passInput) == true)
        alert("The form was submitted");
        
    }

    form[1].onsubmit = function (e) {
        e.preventDefault();
        if (validateEmail(emailInput) = true && validatePassword(passInput) == true) {
            validateForm[0].classList.remove('form-data');
            validateValue[0].innerHTML = emailInput.value;
            validateValue[1].innerHTML = passInput.value;
        } else {
            alert('Your data is not valid');
        }
    }; */

    function showValues () {
        if (validateEmail(emailInput) = true && validatePassword(passInput) == true) {
            validateForm[0].classList.remove('form-data');
            validateValue[0].innerHTML = emailInput.value;
            validateValue[1].innerHTML = passInput.value;
            /* var str = form.serialize();
            email.text(str);
            password.text(str); */
        } else {
            alert('Your data is not valid');
        }
    };

    form.onsubmit, function(showValues) {
        showValues.preventDefault();
        console.log( ( this ).serialize() );
    };
}