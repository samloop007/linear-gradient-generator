let  btn1 = document.getElementById('mybutton1');
let  btn2 = document.getElementById('mybutton2');
let copyDiv = document.querySelector('.copycode');
let rgb1 =  "#004773";
let rgb2 =  "#54d542";


const    haxecolor = () => {

    let  myhexa ="0123456789abcdef";
    let color = "#";
    for ( let i = 0; i < 6; i++){

    color =color + myhexa[Math.floor(Math.random() * 16)];
    }
    return color;
};


const handleButton1 = () => {
    rgb1 =haxecolor();

    console.log(rgb1);
    btn1.innerText = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copyDiv.innerHTML = backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
};

const handleButton2 = () => {
     rgb2 =haxecolor();

    console.log(rgb2);
    btn2.innerText = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copyDiv.innerHTML = backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
    

btn1.addEventListener('click' , handleButton1); 

btn2.addEventListener('click' , handleButton2); 
copyDiv.addEventListener('click',() =>{
    navigator.clipboard.writeText(copyDiv.innerText);   
});