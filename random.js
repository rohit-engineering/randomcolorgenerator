let colorarray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

let colorname = document.querySelector('.color-text');
let changeclr = document.querySelector('.generator');
let mainbody = document.querySelector('.main');


changeclr.addEventListener('click',()=>{
   let hex = '#';
   for(let i=0; i<6; i++){
    hex+=colorarray[randomcolor()];
   }
   colorname.textContent=hex;
mainbody.style.backgroundColor=hex;
});
function randomcolor(){
return Math.floor(Math.random()*colorarray.length);
}
