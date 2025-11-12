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
    
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");
    let form=document.getElementById("lletra")
    


    document.getElementById("prova").addEventListener("click", () => {
       console.log(form.value)
        
    })

}



