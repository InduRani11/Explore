// alert("Hello everyone");
// let inp=prompt("enter your name");
// var a=confirm("are you sure") //return boolean type
// console.log(inp,a);

// alert("Welcome to this site");
// var a = confirm("Do you want to continue");
// if (a == true) {
//     var name = prompt("What is your name?");
//     alert("hello " + name);
// }else{
//     alert("ok, byeee !!")
// }
// var name = prompt("What is your name?");
// alert("hello " + name);
// console.error("this is an error");
// console.log("hello log");
// console.warn("vjhdghgx")
// console.info("this is an info")
// var x=prompt("enter an integer");
// var n=parseInt(x);
// if(isNaN(n)){
//     if(x===''){
//         alert("Nothing entered");
//     }else{
//         alert("Its not an integer");
//     }
//
// }else{
//     if(n%2==0){
//         alert(n + " is an even number");
//     }else{
//         alert(n + " is a odd number");
//     }
// }

var a = confirm("Do you want to continue ?");
if(a==true){
    var inp=prompt("Enter you grade : ");
    var number=parseFloat(inp);
    console.log("input ",inp);
    console.log("number ",number);
    if(inp==null){
        alert("you cancel the prompt");
        console.log("you cancel the prompt");
    }
    if(inp==''){
        alert("you didn't enter anything..");
        console.log("you didn't enter anything..");
    }else if(isNaN(number)){
        alert("It's not a number");
        console.log("It's not a number");
    }else if(number>100||number<0){
        alert("Grade are invalid");
        console.log("Grades are invalid");
    }
    else if(number>80&&number<=100){
        alert("Grade is A");
        console.log("Grades is A");
    }
    else if(number>60&&number<=80){
        alert("Grade is B");
        console.log("Grades is B");
    }
    else if(number>40&&number<=60){
        alert("Grade is C");
        console.log("Grades is C");
    }
    else if(number>30&&number<=40){
        alert("Grade is D");
        console.log("Grades is D");
    }
    else if(number>=0&&number<=30){
        alert("Failed! and Grade is E");
        console.log("Failed! and Grades is E");
    }
}