//Selects the <body> tag and immediately sets its background color to red
const body= document.getElementsByTagName("body")[0];
body.style.backgroundColor="red";

//function that sets the background color to the given color string
function setColor(name){
    body.style.backgroundColor=name;
}

//function that sets the background color to a random color
function randomColor(){
    
    //generate a random number between 0 and 255 for each color channel
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);

    //back ticks(next to 1 on keyboard)
    const color= `rgb(${red},${green},${blue})`
    body.style.backgroundColor=color;
}