
// let ax=10;
// var ay=50;
// abc();
//
// function abc(){
//     var g=55;
//     var h=40;
//
//     function x(){
//         console.log("X executed")
//         const arrw=()=>{
//             console.log("arrow fn");
//         }
//         arrw();
//     }
//     function y(){
//         console.log("Y executed")
//     }
//     x();
//     y();
//
// }

// hoisting


// //closures
// function getCreateCounter(){
//     var x=3;
//     var y=7;
//     return function createCounter(){
//         var curr=0;
//         function count(){
//             curr++;
//             console.log(curr,x);
//         }
//         return count;
//     }
//
// const createCounter=getCreateCounter();
// const cont=createCounter();
// cont();
// cont();
// cont();
// cont();
// cont();
// var x=10;
// function executeThis(){
//     console.log("1234",10)
// }
// setTimeout(executeThis,5000)
function getFun(){
    var x=10;
    return function executeThis(){
        console.log("1234",10)
    }
}
setTimeout(getFun(),5000)