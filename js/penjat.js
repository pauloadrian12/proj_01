
let paraulaSecreta = "";
let paraulaVisible = [];
let vides = 6;
let temps = 0;
let interval;
let popup;
let lletresProvades = [];
//cookies o localstorage
let metodo_guardado ="Cookies"
let contador



let win = window.open("./penjat.html", "", "popup,width=500,height=500");

window.onload = () => {
    let Temporizador = new Date(0)


    contador = setInterval(() => {
        Temporizador.setSeconds(Temporizador.getSeconds()+1)
        document.getElementById("temp").innerText =  Temporizador.getMinutes() +" : " + Temporizador.getSeconds() ;
    }, 1000);
    
    inicialitzaJoc();
    eval_form()



}



