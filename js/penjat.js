
let paraulaSecreta = "";
let paraulaVisible = [];
let vides = 6;
let temps = 0;
let interval;
let popup;
let lletresProvades = [];
//cookies o localstorage
let metodo_guardado ="localstorage"
let contador
let dia = new Date().toLocaleDateString()




let win = window.open("./penjat.html", "", "popup,width=500,height=500");

window.onload = () => {
    let Temporizador = new Date(0)


    contador = setInterval(() => {
        Temporizador.setSeconds(Temporizador.getSeconds()+1)
         tiempo= Temporizador.getMinutes() +" : " + Temporizador.getSeconds()
        document.getElementById("temp").innerText =  tiempo;
    }, 1000);
    
    inicialitzaJoc();
    eval_form()


}



