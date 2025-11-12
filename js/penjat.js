//poner aqui conexion con paraules.js y sacar una pálabra random

function inicialitzaJoc() {
  let numero = parseInt(Math.random() * PARAULES.length);
  paraulaSecreta = PARAULES[numero];
  paraulaVisible = [];

  let i = 0;
  while (i < paraulaSecreta.length) {
    paraulaVisible.push("_");
    i = i + 1;
  }

  document.getElementById("paraula").innerText = paraulaVisible.join(" ");
}



let palabras = ["uno","dos","tres"]
window.onload = () => {
    inicialitzaJoc();
    
    let input = document.getElementById("cuadro-2");
     for (let i of palabras[2]){
        input.innerHTML+=  '<div> <input type="text" maxlength="1" style="width: 30px; text-align: center;">    </input>   </div>   '
     }
   
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");


    document.getElementById("c").addEventListener("", () => {

        win.postMessage(input.value, "http://127.0.0.1:5500");

    })

}



