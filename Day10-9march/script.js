// // const abc=987654;
// // if(true){
// //     const abc="hello";
// //     console.log(abc);
// // }
// //
// // console.log(abc);
//
// // const sym1 = Symbol();
// // const sym2 = Symbol("foo");
// // const sym3 = Symbol("foo");
// // console.log(sym1);
// // console.log(sym3);
// // console.log(sym2);
//
// let a="gffg";
// let b=a;
// console.log(a==b);
//
// a=a+"jhdgs";
// console.log(a);
// // named fn
// function abc(a,b,d ,e=0){
//     console.log(a,b,d,e)
//     console.log(typeof(a),typeof(b),typeof(d),typeof(e))
// }
// abc(2, 5);
// console.log(abc);
// // anonyms fn
// // var x=function (){console.log("i am anonymus! ")};
// var nabc=function (a,b,d ,e=0){
//     console.log(a,b,d,e)
//     console.log(typeof(a),typeof(b),typeof(d),typeof(e));
//     a();
//     // console.log(x);
//     x();
// }
// nabc(function (){console.log("i am anonymus! ")}, 5);
// function x(){console.log("i am anonymus! ")};
// // let x=function (){console.log("i am anonymus! ")};
// // Arrow function
//
// // function add(a,b){
// //     return a+b;
// // }
// const addArrow=(a,b) => a+b;
// // IIFE-Imediately Invoked function Expression
//  (function(){
//     console.log("hello everyone")
//  })();
// console.log(Boolean());
// let arr=["a",'b','c','d','e'];

// rest
// function abc(...c){
//     const sum=c.reduce((a,b)=>a+b,0);
//     console.log(sum/c.length)
// }
// abc(1,2,2,4,50,6,6);
//
// function myMap(a,b,c,d){
//     // a is val  b is index  c=arr and other parameters are undefined
//     console.log("within my callback function",a,b,c,d);
//     return a+3;
// }
// let arr=[1,2,3,4];
// arr.push(5);
// arr.pop();
// //imp
// let x=arr.map(myMap);
// console.log(arr);
// console.log(x);
// console.log(arr.length);
function myMap(a,b){
    if(b%2==0){
        return a*a;
    }else{
        return a*a*a;
    }
}
let arr=[1,2,3,4,5];
//imp

let x=arr.map(myMap);
// let x=arr.map((a,b)=> b%2==0?a*a:a*a*a);
console.log(arr);
console.log(x);
// console.log(arr.length);