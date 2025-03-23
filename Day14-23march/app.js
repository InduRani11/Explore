
var ax=10;
var ay=50;
abc();

function abc(){
    var g=55;
    var h=40;

    function x(){
        console.log("X executed")
        const arrw=()=>{
            console.log("arrow fn");
        }
        arrw();
    }
    function y(){
        console.log("Y executed")
    }
    x();
    y();

}
