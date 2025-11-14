
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






