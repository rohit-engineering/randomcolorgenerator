let color = ['red','blue','yellow','green','pink','orange','gold','grey','violet','magenta','grey','darkgreen','brown','skyblue'];

let colorname = document.querySelector('.color-text');
let changeclr = document.querySelector('.generator');
let mainbody = document.querySelector('.main');


changeclr.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*color.length);
    mainbody.style.backgroundColor = color[random];
    colorname.textContent = color[random];
});




