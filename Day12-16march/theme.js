// const body = document.body;
// function theme(){
//     body.classList.toggle("dark");
// }

const colors = ["#FFFFFF",  /* White (Background) */
    "#F8F9FA",  /* Very Light Gray */
    "#F0F0F0",  /* Soft Gray */
    "#DDDDDD",  /* Light Gray (Borders) */
    "#CCCCCC",  /* Medium Gray */
    /*"#333333", */ /* Dark Gray (Text) */
    "#007BFF",  /* Primary Blue */
    "#6C757D",  /* Secondary Gray */
    "#17A2B8",  /* Info Cyan */
    "#28A745",  /* Success Green */
    "#FFC107",  /* Warning Yellow */
    "#DC3545",  /* Danger Red */
    "#E9ECEF",  /* Muted Light Gray */
    "#FAFAFA",  /* Off White */
    "#B0BEC5"  /* Cool Gray */];
function randomNo(limit) {
    // const val = Math.floor((Math.random() * 100) % 15);
    const val = Math.floor(Math.random() * limit);
    return val;
}
const btn=document.querySelector("#themeChangerBtn");
console.log(btn)
function changeTheme() {
    const body = document.body;
    const index=randomNo(colors.length)
    const color=colors[index];
    body.style.backgroundColor = color;
    // btn.removeEventListener("click",changeTheme)

}
changeTheme();
btn.addEventListener("click",changeTheme);
// console.log(Event)
// btn.removeEventListener("click",changeTheme)

// document.body.addEventListener("click",changeTheme);

