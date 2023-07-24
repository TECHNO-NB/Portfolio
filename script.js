const icon=document.getElementById("icon");
const ul=document.querySelector("ul");
const a=document.querySelectorAll("ul li a");
let active=true;


const showMenu=()=>{
    ul.classList.add('show');
    icon.classList.replace("bx-menu-alt-right",'bx-x');
    active=false;
}
const hideMenu=()=>{
    ul.classList.remove('show');
    icon.classList.replace("bx-x",'bx-menu-alt-right');
    active=true;
}

a.forEach(i =>{
 i.onclick=()=>{
    ul.classList.remove('show');
icon.classList.replace("bx-x",'bx-menu-alt-right');
active=true;
 }
})



icon.addEventListener('click',()=>{
 active? showMenu() : hideMenu();
})