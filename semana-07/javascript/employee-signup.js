window.onload = function () {
    var nameInput = document.getElementById('name');
    var lastNameInput = document.getElementById('last-name');
    var dniInput = document.getElementById('dni');
    var dob = document.getElementById('dob');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var cityInput = document.getElementById('city');
    var zip = document.getElementById('zipcode');
    var emailInput = document.getElementById('email');
    var passInput = document.getElementById('password');
    var passInput2 = document.getElementById('password2');
    var messageAlert = document.getElementsByClassName('message-container');
    var validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var btnSignUp = document.getElementsByClassName('btn-signup');
    var validateForm = document.getElementsByClassName('hidden-info');
    var validateValue = document.getElementsByClassName('inner-span');

    function onlyAlpha (alphaInput) {
        var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var num = 0;
        var char = 0;
        for (i=0; alphaInput.value.length > i; i++) {
            if (nums.includes(alphaInput.value[i])) {
                num++;
            } else {
                char++;
            }
        }
        if (char > 1 && num == 0) {
            return true;
        } else {
            return false;
        }
    };

    function validateName() {
        if (nameInput.value.length >= 3 && onlyAlpha(nameInput) == true) {
            messageAlert[0].classList.remove('invalid-field');
            messageAlert[0].classList.add('valid-field');
            messageAlert[0].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[0].classList.add('invalid-field');
            messageAlert[0].innerHTML = "Please, insert a valid name";
            return false;
        }
    };
    nameInput.onblur = function () {
        validateName();
    };
    nameInput.onfocus = function () {
        messageAlert[0].classList.add('message-container');
    };

    function validateLastName() {
        if (lastNameInput.value.length >= 3 && onlyAlpha(lastNameInput)) {
            messageAlert[1].classList.remove('invalid-field');
            messageAlert[1].classList.add('valid-field');
            messageAlert[1].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[1].classList.add('invalid-field');
            messageAlert[1].innerHTML = "Please, insert a valid last name";
            return false;
        }
    };
    lastNameInput.onblur = function () {
        validateLastName();
    };
    lastNameInput.onfocus = function () {
        messageAlert[1].classList.add('message-container');
    };

    function onlyNum (numInput) {
        var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var num = 0;
        var char = 0;
        for (i=0; numInput.value.length > i; i++) {
            if (nums.includes(numInput.value[i])) {
                num++;
            } else {
                char++;
            }
        }
        if (char == 0 && num > 1) {
            return true;
        } else {
            return false;
        }
    };

    function validateDni() {
        if (dniInput.value.length >= 7 && onlyNum(dniInput) == true) {
            messageAlert[2].classList.remove('invalid-field');
            messageAlert[2].classList.add('valid-field');
            messageAlert[2].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[2].classList.add('invalid-field');
            messageAlert[2].innerHTML = "Please, insert a valid DNI";
            return false;
        }
    };
    dniInput.onblur = function () {
        validateDni();
    };
    dniInput.onfocus = function () {
        messageAlert[2].classList.add('message-container');
    };

    function validatePhone() {
        if (phoneInput.value.length >= 10 && onlyNum(phoneInput) == true) {
            messageAlert[4].classList.remove('invalid-field');
            messageAlert[4].classList.add('valid-field');
            messageAlert[4].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[4].classList.add('invalid-field');
            messageAlert[4].innerHTML = "Please, insert a valid phone number";
            return false;
        }
    };
    phoneInput.onblur = function () {
        validatePhone();
    };
    phoneInput.onfocus = function () {
        messageAlert[4].classList.add('message-container');
    };

    function validateAddress() {
        var space = ' ';
        var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        num = 0;
        char = 0;
        for (i=0; addressInput.value.length > i; i++) {
            if (nums.includes(addressInput.value[i])) {
                num++;
            } else if (space.includes(addressInput.value[i])) {
                space++;
            } else {
                char++;
            }
        }
        if (addressInput.value.length >= 5 && num > 1 && space == 1) {
            messageAlert[5].classList.remove('invalid-field');
            messageAlert[5].classList.add('valid-field');
            messageAlert[5].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[5].classList.add('invalid-field');
            messageAlert[5].innerHTML = "Please, insert a valid address";
            return false;
        }
    };
    addressInput.onblur = function () {
        validateAddress();
    };
    addressInput.onfocus = function () {
        messageAlert[5].classList.add('message-container');
    };

    function validateCity() {
        if (cityInput.value.length >= 5 && onlyAlpha(cityInput)) {
            messageAlert[6].classList.remove('invalid-field');
            messageAlert[6].classList.add('valid-field');
            messageAlert[6].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[6].classList.add('invalid-field');
            messageAlert[6].innerHTML = "Please, insert a valid city";
            return false;
        }
    };
    cityInput.onblur = function () {
        validateCity();
    };
    cityInput.onfocus = function () {
        messageAlert[6].classList.add('message-container');
    };

    function validateZip() {
        if (zip.value.length >= 4 && zip.value.length <= 5 && onlyNum(zip) == true) {
            messageAlert[7].classList.remove('invalid-field');
            messageAlert[7].classList.add('valid-field');
            messageAlert[7].innerHTML = "Valid";
            return true;
        } else {
            messageAlert[7].classList.add('invalid-field');
            messageAlert[7].innerHTML = "Please, insert a valid zip code";
            return false;
        }
    };
    zip.onblur = function () {
        validateZip();
    };
    zip.onfocus = function () {
        messageAlert[7].classList.add('message-container');
    };

    function validateEmail() {
        if (!emailInput.value.match(validEmail)) {
            messageAlert[8].classList.add('invalid-field');
            messageAlert[8].innerHTML = "Please, insert a valid e-mail";
            return false;
        } else if (emailInput.value.match(validEmail)) {
            messageAlert[8].classList.remove('invalid-field');
            messageAlert[8].classList.add('valid-field');
            messageAlert[8].innerHTML = "Valid";
            return true;
        }
    };
    emailInput.onblur = function () {
        validateEmail();
    };
    emailInput.onfocus = function () {
        messageAlert[8].classList.add('message-container');
    };

    function validatePassword() {
        if (passInput.value.length >= 8) {
            messageAlert[9].classList.remove('invalid-field');
            messageAlert[9].classList.add('valid-field');
            messageAlert[9].innerHTML = 'Valid';
            return true;
        } else {
            messageAlert[9].classList.add('invalid-field');
            messageAlert[9].innerHTML = 'Not valid';
            return false;
        }
    };
    passInput.onblur = function () {
        validatePassword ();
    };
    passInput.onfocus = function() {
        messageAlert[9].classList.add('message-container');
    };

    function validatePassword2() {
        if (passInput2.value !== passInput.value) {
            messageAlert[10].classList.add('invalid-field');
            messageAlert[10].innerHTML = 'The passwords do not match';
            return false;
        } else {
            messageAlert[10].classList.remove('invalid-field');
            messageAlert[10].classList.add('valid-field');
            messageAlert[10].innerHTML = 'Valid';
            return true;
        }
    };
    passInput2.onblur = function () {
        validatePassword2 ();
    };
    passInput2.onfocus = function() {
        messageAlert[10].classList.add('message-container');
    };

/*     function showValuesSignUp () {
        if (validateName() == true && 
            validateSurname() == true && 
            validateDni() == true && 
            validatePhone() == true && 
            validateAddress() == true && 
            validateCity() == true && 
            validateZip() == true && 
            validateEmail() == true && 
            validatePassword() == true && 
            validatePassword2() == true
            ) {
            validateForm[0].classList.remove('hidden-info');
            validateValue[0].innerHTML = nameInput.value;
            validateValue[1].innerHTML = surnameInput.value;
            validateValue[2].innerHTML = dniInput.value;
            validateValue[3].innerHTML = birthdayInput.value;
            validateValue[4].innerHTML = phoneInput.value;
            validateValue[5].innerHTML = addressInput.value;
            validateValue[6].innerHTML = cityInput.value;
            validateValue[7].innerHTML = zipInput.value;
            validateValue[8].innerHTML = emailInput.value;
            validateValue[9].innerHTML = passInput.value;
            validateValue[10].innerHTML = passInput2.value;
        } else {
            alert('error');
        }
    };
    btnSignUp[0].onclick = function (e) {
        e.preventDefault();
        showValuesSignUp();
    }; */

    btnSignUp[0].onclick = function (showValuesSignUp) {
        showValuesSignUp.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' + '?name=' + nameInput.value +
        '&lastname=' + lastNameInput.value + '&dni=' + dniInput.value + '&dob=' + dob.value +
        '&phone=' + phoneInput.value + '&address=' + addressInput.value + '&city=' + cityInput.value +
        '&zipcode=' + zip.value + '&email=' + emailInput.value + '&password=' + passInput.value +
        '&password2=' + passInput2.value;
        if (validateName(nameInput.value) == false) {
            alert('Insert a valid name')
        } else if (validateLastName(lastNameInput.value) == false) {
            alert('Insert a valid last name')
        } else if (validateDni(dniInput.value) == false) {
            alert('Insert a valid DNI')
        } else if (validatePhone(phoneInput.value) == false) {
            alert('Insert a valid phone number')
        } else if (validateAddress(addressInput.value) == false) {
            alert('Insert a valid address')
        } else if (validateCity(cityInput.value) == false) {
            alert('Insert a valid city')
        } else if (validateZip(zip.value) == false) {
            alert('Insert a valid zip code')
        } else if (validateEmail(emailInput.value) == false) {
            alert('Insert a valid e-mail')
        } else if (validatePassword(passInput.value) == false) {
            alert('Insert a valid password')
        } else if (validatePassword2(passInput2.value) == false) {
            alert('Passwords do not match')
        } else if (validateName(nameInput.value) == true && 
            validateLastName(lastNameInput.value) == true && 
            validateDni(dniInput.value) == true && 
            validatePhone(phoneInput.value) == true && 
            validateAddress(addressInput.value) == true && 
            validateCity(cityInput.value) == true && 
            validateZip(zip.value) == true && 
            validateEmail(emailInput.value) == true && 
            validatePassword(passInput.value) == true && 
            validatePassword2(passInput2.value) == true
            ) { 
                fetch (url)
                .then (function(response) {
                    return response.json()
                })
                .then(function (jsonResponse) {
                    if (jsonResponse.success) {
                        alert('The request was successful: '+ jsonResponse.msg)
                    } else {
                    throw jsonResponse
                    }
                })
                .catch(function(err) {
                    alert(err.message)
                })


                    /* validateForm[0].classList.remove('hidden-info');
                    validateValue[0].innerHTML = nameInput.value;
                    validateValue[1].innerHTML = surnameInput.value;
                    validateValue[2].innerHTML = dniInput.value;
                    validateValue[3].innerHTML = birthdayInput.value;
                    validateValue[4].innerHTML = phoneInput.value;
                    validateValue[5].innerHTML = addressInput.value;
                    validateValue[6].innerHTML = cityInput.value;
                    validateValue[7].innerHTML = zipInput.value;
                    validateValue[8].innerHTML = emailInput.value;
                    validateValue[9].innerHTML = passInput.value;
                    validateValue[10].innerHTML = passInput2.value; */
        } else {
            alert('Error');
        }
    };
}