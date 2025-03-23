const form = document.getElementById('form');

const usererror = document.getElementById('usererror');
const user = document.getElementById('name');

const emailerror = document.getElementById('emailerror');
const email = document.getElementById('email');

const passerror = document.getElementById('passerror');
const pass = document.getElementById('pass');

const cpasserror = document.getElementById('cpasserror');
const cpass = document.getElementById('cpass');


console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (user.value === "") {
        usererror.textContent = "Useername is required"
    } else if (user.value.length < 5) {
        usererror.textContent = "Useername's minimum length is 5"
    } else if (user.value.length > 15) {
        usererror.textContent = "Useername's maximum length is 15"
    } else if (['admins', 'username', 'adminstration'].includes(user.value)) {
        usererror.textContent = "Useername not correct"
    }

    if (!validEmail(email.value)) {
        emailerror.textContent = "invalid email address";
    }

    if (pass.value.length < 6) {
        passerror.textContent = "Password's minimum length is 6";
    } else if (pass.value.length > 24) {
        passerror.textContent = "Password's maximum length is 24";
    } else if (!validatePassword(pass.value)) {
        passerror.textContent = "invalid password";
    }
    if (pass.value != cpass.value) {
        cpasserror.textContent = "not matched with password";
    }
});
function validEmail(val) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    return regex.test(val);

}
// function ValidateName(name){
//
// }


function validatePassword(password) {
    let isUpperCaseIncluded = false;
    let isLowerCaseIncluded = false;
    let hasNumericalCharacter = false;

    for (let i = 0; i < password.length; i++) {
        const charcode = password.charCodeAt(i);
        const char = password[i];


        if (char == char.toUpperCase()) {

            isUpperCaseIncluded = true;
        }
        if (char == char.toLowerCase()) {
            isLowerCaseIncluded = true;
        }
        if (!isNaN(char)) {
            hasNumericalCharacter = true;
        }

    }
    console.log(isLowerCaseIncluded, isUpperCaseIncluded, hasNumericalCharacter)
    return isLowerCaseIncluded && isUpperCaseIncluded && hasNumericalCharacter;
}
