import { useState } from "react";


function App() {

  const [color,setcolor]=useState("red");
  const colors = [
    "#D3D3D3", // Light Gray
    "#B0E0E6", // Powder Blue
    "#F0E68C", // Khaki
    "#FFB6C1", // Light Pink
    "#ADD8E6", // Light Blue
    "#FFDAB9", // Peach Puff
    "#98FB98", // Pale Green
    "#FFC0CB", // Pink
    "#87CEEB", // Sky Blue
    "#FFE4B5", // Moccasin
    "#AFEEEE", // Pale Turquoise
    "#FFDEAD", // Navajo White
    "#B0C4DE", // Light Steel Blue
    "#F4A460", // Sandy Brown
    "#DDA0DD", // Plum
  ];
  // const [color,setcolor]=useState("red");

  function randomNo(limit) {
    // const val = Math.floor((Math.random() * 100) % 15);
    const val = Math.floor(Math.random() * limit);
    console.log(val);
    return val;
  }
  function changeTheme() {
    const val=colors[randomNo(colors.length)];
    console.log(val);

    return val;
  }

  function theme(){
    setcolor(changeTheme());
  }
  return(
  <div style={{backgroundColor:color}} className="body" >
    <div className="header div">
        <h1 id="heading">Theme randomrizer</h1>
         <button onClick={theme} > Randomize Theme</button>
    </div>
    <div className="div">
        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse sapiente voluptas? Enim deserunt optio temporibus illum dicta iure dolorum numquam? Atque quaerat est laborum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nesciunt reiciendis neque tempora voluptatem ipsa error sequi maiores officia! Nisi magni odio laudantium libero ad sapiente nobis possimus. Mollitia, voluptates.natus facere minus itaque. Illum. sit amet consectetur adipisicing elit. Fuga deleniti, maiores quis minus est sunt culpa, non ducimus consequuntur tenetur magnam, porro dignissimos nam itaque cum facilis sapiente nulla illum.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" alt=""></img>
    </div>
  </div>

  )

}

export default App
