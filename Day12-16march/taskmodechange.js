const body = document.body;
// function theme(){
//     body.classList.toggle("dark");
// }
const togglebtn=document.querySelector("#flexSwitchCheckChecked");
const divbtn=document.querySelector("#divbtn");
divbtn.addEventListener("click",()=>{if(togglebtn.checked){
    body.classList.add("dark");
}else{
    body.classList.remove("dark");
}});
console.log(togglebtn.getAttribute("unchecked"))
