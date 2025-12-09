/**
 * Función para elegir de manera aleatoria una palabra del array de palabras y
 * mostrar underscores "_" acorde el numero de carácteres de la palabra.
 * Tambien mostramos las vidas con las que comienza el usuario
 */
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
  document.getElementById("vides").innerText = vides;
}






