
let paraulaSecreta = "";
let paraulaVisible = [];
let vides = 6;
let temps = 0;
let interval;
let popup;
let lletresProvades = [];




let win = window.open("./penjat.html", "", "popup,width=500,height=500");

window.onload = () => {
    let Temporizador = new Date(0)


    inicialitzaJoc();
    eval_form()


    setInterval(() => {
        Temporizador.setSeconds(Temporizador.getSeconds()+1)
        document.getElementById("temp").innerText =  Temporizador.getMinutes() +" : " + Temporizador.getSeconds() ;
    }, 1000);

}



