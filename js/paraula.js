//poner aqui conexion con paraules.js y sacar una pálabra random

let paraulaSecreta = "";
let paraulaVisible = [];
let vides = 6;
let temps = 0;
let interval;
let popup;
let lletresProvades = [];


function inicialitzaJoc() {
  let numero = parseInt(Math.random() * PARAULES.length);
  paraulaSecreta = PARAULES[numero];
  console.log(paraulaSecreta)
  paraulaVisible = [];

  let i = 0;
  while (i < paraulaSecreta.length) {
    paraulaVisible.push("_");
    i = i + 1;
  }

  document.getElementById("paraula").innerText = paraulaVisible.join(" ");
}






