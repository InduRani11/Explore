let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
const arr = {
    light: {
        bgColor: ["#FFFFFF", "#F8F9FA", "#E9ECEF", "#DEE2E6", "#CED4DA"],
        //color: ["#212529", "#343A40", "#495057", "#6C757D", "#000000"]
    },
    dark: {
        bgColor: ["#121212", "#1E1E1E", "#252525", "#333333", "#3A3A3A"],
        //color: ["#FFFFFF", "#F8F9FA", "#EAEAEA", "#CCCCCC", "#B0B0B0"]

    },
    blue: {
        bgColor: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"],
        color: ["#0D47A1", "#1565C0", "#1976D2", "#1E88E5", "#FFFFFF"]

    },
    green: {
        bgColor: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A"],
        //color: ["#1B5E20", "#2E7D32", "#FFFFFF", "#004D40", "#212121"]

    },
    red: {
        bgColor: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350"],
        //color: ["#B71C1C", "#C62828", "#FFFFFF", "#F44336", "#212121"]
    },
    yellow: {
        bgColor: ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58"],
        //color: ["#F57F17", "#F9A825", "#FFFFFF", "#212121", "#795548"]
    }
}
let theme="none";
function themechange(theme) {
    //let theme=theme;
    for (let i = 0; i < 4; i++) {
        boxes[i].style.backgroundColor = arr[theme].bgColor[i];
        container.style.backgroundColor = arr[theme].bgColor[4];
    }
}
// const btn1=document.querySelector('#btn1');
// console.log(btn1)
// btn1.addEventListener("click",themechange('light'));
// const btn2=document.querySelector('#btn2');
// console.log(btn2)
// btn2.addEventListener("click",themechange('dark'));
// const btn3=document.querySelector('#btn3');
// console.log(btn3)
// btn3.addEventListener("click",themechange('yellow'));
// const btn4=document.querySelector('#btn4');
// console.log(btn4)
// btn4.addEventListener("click",themechange('red'));
// const btn5=document.querySelector('#btn5');
// console.log(btn5)
// btn5.addEventListener("click",themechange('green'));