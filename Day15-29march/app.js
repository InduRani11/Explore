//promise

// function resolve(data){
//     console.log("resolved to",data)
//     return "jfgd";
// }
//
// function resolve2(data){
//     console.log("transaction completed",data)
// }
//
// function reject(data){
//     console.error("resolved to",data)
// }
//
// let myPromise=new Promise(function xyz (resolve, reject) {
//     let finalVal= 4%2===0;
//     if(finalVal){
//         resolve("payment done");
//     }else{
//         reject("payment reject");
//     }
// });
//
// myPromise.then(resolve).then(resolve2).catch(reject);


//async await

// fetch("https://dummyjson.com/product")

async function printData(){
    var response = await fetch("https://dummyjson.com/product");
    var data= await response.json();
    console.log(response );
    console.log(data.products);
    return "hello"
}
printData();
console.log("jhsgdchgs");
console.log("jhsgdchgs");
console.log("jhsgdchgs");