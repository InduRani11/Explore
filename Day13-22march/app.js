// const form = document.getElementById('form');
//
// const usererror = document.getElementById('usererror');
// const user = document.getElementById('name');
//
// const emailerror = document.getElementById('emailerror');
// const email = document.getElementById('email');
//
// const passerror = document.getElementById('passerror');
// const pass = document.getElementById('pass');
//
// const cpasserror = document.getElementById('cpasserror');
// const cpass = document.getElementById('cpass');
//
//
// console.log(form)
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     if (user.value === "") {
//         usererror.textContent = "Useername is required"
//     } else if (user.value.length < 5) {
//         usererror.textContent = "Useername's minimum length is 5"
//     } else if (user.value.length > 15) {
//         usererror.textContent = "Useername's maximum length is 15"
//     } else if (['admins', 'username', 'adminstration'].includes(user.value)) {
//         usererror.textContent = "Useername not correct"
//     }
//     if (!validEmail(email.value)) {
//         emailerror.textContent = "invalid email address";
//     }
//     if (!validatePassword(pass.value)) {
//         passerror.textContent = "invalid password";
//     }
//     console.log(pass.value, cpass.value)
//     if (pass.value != cpass.value) {
//         cpasserror.textContent = "not matched with password";
//     }
//     // else if(pass.value.length >8){
//     //     passerror.textContent="Minimum length of Passsword is 8"
//     // }
//     // else if(pass.value.length <24){
//     //     passerror.textContent="Maximum length of Passsword is 8"
//     // }
//     // else if(pass.value.array.forEach(e => {
//     //     return e>'a' &&e<'z'
//     // })){
//     //     passerror.textContent="special character is no included"
//     // }
//     // const isPassValid=validatePassword(pass.value)
//     // console.log("submit is hitting");
// });
// function validEmail(val) {
//     const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
//
//     return regex.test(val);
//
// }
//
// // function validPasswordRegex(val){
// //
// //     return false;
// //
// // }
//
// function validatePassword(password) {
//     let isUpperCaseIncluded = false;
//     let isLowerCaseIncluded = false;
//     let hasNumericalCharacter = false;
//
//     for (let i = 0; i < password.length; i++) {
//         const charcode = password.charCodeAt(i);
//         const char = password[i];
//         // console.log(char.toLowerCase())
//
//         if (char == char.toUpperCase()) {
//             // console.log(char.toLowerCase())
//             isUpperCaseIncluded = true;
//         }
//         if (char == char.toLowerCase()) {
//             isLowerCaseIncluded = true;
//         }
//         if (!isNaN(char)) {
//             hasNumericalCharacter = true;
//         }
//
//     }
//     console.log(isLowerCaseIncluded, isUpperCaseIncluded, hasNumericalCharacter)
//     return isLowerCaseIncluded && isUpperCaseIncluded && hasNumericalCharacter;
// }
const loc = "London,UK";
const api_key="KFBHWNPE6VGG4PAT9SZY6CZC6"
const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${api_key}`;
// let data=fetch(api);
// console.log(data);
// let data = null;
fetch(api).then((data) => {
    // console.log(data);
    // console.log(data.body);
    return data.json();
}).then((data) => {
    console.log(data);
    // console.log(data.products);
});
// console.log(data);