// const navBar = document.querySelector("nav");
// const scrollHistory = [""];

const frame_img = document.querySelector("div.frame_layout div.img");
const frame_txt = document.querySelector("div.frame_layout_set div.describ_text");


// scrollHistory[0] = window.scrollY;
// console.log(scrollHistory[0]);

frame_img.style.height = frame_txt.clientHeight;

// Ajouter un élément à scrollHistory chaque une seconde puis verifier la valeur par rapport à la valeur précedente