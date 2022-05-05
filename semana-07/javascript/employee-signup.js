window.onload = function () {
    var nameInput = document.getElementById('name');
    var lastName = document.getElementById('last-name');
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
        if (lastName.value.length >= 3 && onlyAlpha(lastName)) {
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
    lastName.onblur = function () {
        validateLastName();
    };
    lastName.onfocus = function () {
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

    function validateDob() {
        var day = Number(dob.value.split('-')[2]);
        var month = Number(dob.value.split('-')[1]);
        var year = Number(dob.value.split('-')[0]);
        if (year < 1900 || year > 2004) {
            messageAlert[3].classList.add('invalid-field');
            messageAlert[3].innerHTML = "Please, insert a valid year";
            return false;
        } else if (month > 12 || month < 1) {
            messageAlert[3].classList.add('invalid-field');
            messageAlert[3].innerHTML = "Please, insert a valid month";
            return false;
        } else if (day > 31 || day < 1) {
            messageAlert[3].classList.add('invalid-field');
            messageAlert[3].innerHTML = "Please, insert a valid day";
            return false;
        } else {
            messageAlert[3].classList.remove('invalid-field');
            messageAlert[3].classList.add('valid-field');
            messageAlert[3].innerHTML = "Valid";
            return true;
        }
    };
    dob.onblur = function () {
        validateDob();
    };
    dob.onfocus = function () {
        messageAlert[3].classList.add('message-container');
    };
    console.log(dob.value)

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

    btnSignUp[0].onclick = function (showValuesSignUp) {
        showValuesSignUp.preventDefault();
        var formatDate = dob.value.split('-');
        var newFormatDate = formatDate.slice(1, 2) + '/' + formatDate.slice(2) + '/' + formatDate.slice(0, 1);
        console.log(newFormatDate)
        if (validateName() == false) {
            alert('Insert a valid name')
        } else if (validateLastName() == false) {
            alert('Insert a valid last name')
        } else if (validateDni() == false) {
            alert('Insert a valid DNI')
        } else if (validateDob() == false) {
            alert('Insert a valid birth date')
        } else if (validatePhone() == false) {
            alert('Insert a valid phone number')
        } else if (validateAddress() == false) {
            alert('Insert a valid address')
        } else if (validateCity() == false) {
            alert('Insert a valid city')
        } else if (validateZip() == false) {
            alert('Insert a valid zip code')
        } else if (validateEmail() == false) {
            alert('Insert a valid e-mail')
        } else if (validatePassword() == false) {
            alert('Insert a valid password')
        } else if (validatePassword2() == false) {
            alert('Passwords do not match')
        } else if (validateName() == true && 
            validateLastName() == true && 
            validateDni() == true && 
            validateDob() == true &&
            validatePhone() == true && 
            validateAddress() == true && 
            validateCity() == true && 
            validateZip() == true && 
            validateEmail() == true && 
            validatePassword() == true && 
            validatePassword2() == true
            ) {
                var urlData = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' +
                '?name=' + nameInput.value +
                '&lastName=' + lastName.value +
                '&dni=' + dniInput.value +
                '&dob=' + newFormatDate +
                '&phone=' + phoneInput.value +
                '&address=' + addressInput.value +
                '&city=' + cityInput.value +
                '&zip=' + zip.value +
                '&email=' + emailInput.value +
                '&password=' + passInput.value +
                '&password2=' + passInput2.value;
                fetch (urlData)
                .then (function(response) {
                    return response.json()
                })
                .then(function (jsonResponse) {
                    if (jsonResponse.success) {
                        alert('The request was successful: employee logged. ' + 
                        'Name: ' + nameInput.value +
                        '; Last name: ' + lastName.value + 
                        '; DNI: ' + dniInput.value + 
                        '; Birth date: ' + newFormatDate + 
                        '; Phone: ' + phoneInput.value + 
                        '; Address: ' + addressInput.value +
                        '; City: ' + cityInput.value + 
                        '; Zip code: ' + zip.value + 
                        '; E-mail: ' + emailInput.value +
                        '; Password: ' + passInput.value + 
                        '; Password 2: ' + passInput2.value)
                        localStorage.setItem("name", nameInput.value);
                        localStorage.setItem("last-name", lastName.value);
                        localStorage.setItem("dni", dniInput.value);
                        localStorage.setItem("dob", dob.value);
                        localStorage.setItem("phone", phoneInput.value);
                        localStorage.setItem("address", addressInput.value);
                        localStorage.setItem("city", cityInput.value);
                        localStorage.setItem("zip", zip.value);
                        localStorage.setItem("email", emailInput.value);
                        localStorage.setItem("password", passInput.value);
                        localStorage.setItem("password2", passInput2.value);
                    } else {
                    throw alert('The request failed: '+ jsonResponse)
                    }
                })
                .catch(function(error) {
                    alert(error.message)
                })
        } else {
            alert('Error');
        }
    };
}