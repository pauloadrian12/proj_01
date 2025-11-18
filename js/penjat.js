
let paraulaSecreta = "";
let paraulaVisible = [];
let vides = 6;
let temps = 0;
let interval;
let popup;
let lletresProvades = [];

let win = window.open("./penjat.html", "", "popup,width=500,height=500");

window.onload = () => {

  
    inicialitzaJoc();
    eval_form(win)

   
}



