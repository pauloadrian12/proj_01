
/**
 * Envia un mensaje con el numero de vidas al popup
 * @param {Number} vidas numero de vidas actual
 * @returns vidas-1
 */
function letra_incorrecta(vidas) {
    vidas--;
    win.postMessage({ vidas }, "http://127.0.0.1:5500");
    return vidas
}


/**
 * Analiza la letra del usuario la compara con las letras de la palabra secreta y retorna 
 * si la palabra fue encontrada y el numero de vidas despues del analisis
 * @param {String} dat letra dada por el usuario
 * @param {String} pal palabra secreta
 * @param {Number} vidas cantidad actual de vidas
 *
 * @returns {String} palabra ( encontrada | no encontrada ) , ( Vidas | Vidas - 1 ) 
 */
function analizar(dat, pal, vidas) {
    console.log("analizando....")
    let enc = false
    let resultado = "Letra no encontrada"
    let i = 0;

    while (i < pal.length) {
        if (pal.charAt(i) == dat) {
            paraulaVisible[i] = dat;
            enc = true;
            resultado = "Letra encontrada!"
            document.getElementById("paraula").innerText = paraulaVisible.join(" ");
        }
        i = i + 1;
    }

    enc || (vidas = letra_incorrecta(vidas))

    vidas || (resultado = "HAS PERDIDO, " + "la palabra secreta era: " + pal)

    return [resultado, vidas]

}

/**
 * Función maestra que se encarga de hacer lo siguiente cuando el usuario
 * hace clic en el botón de probar letra:
 * 
 * - Hacer el control de carácteres que introduce el usuario como añadir
 *   carácteres ya probados, controlar que no introduzca mas de uno etc...
 * 
 * - Muestra mensajes informativos dependiendo del estado de
 *   la partida ("carácter no válido", "HAS GANADO", etc...).
 * 
 * - Controla cuando gana o pierde y habilita el botón de volver al menu
 *   y para el contador de tiempo, además llama a la funcion de guardar 
 *   para pasarle los parámetros de la partida.
 */
function eval_form() {
    let form = document.getElementById("lletra")
    let bloque_mensaje = document.getElementById("mensaje")
    const boton = document.getElementById("prova")
    let boton_tornar = document.getElementById("tornar2")
    boton_tornar.disabled = true;


    boton.addEventListener("click", () => {

        let dato_rec = form.value
        bloque_mensaje.innerHTML = "";
        let mensaje = ""

        // si dato del form es 1 letra evalua si esta esta en los carácteres
        if (dato_rec.length == 1) {
            mensaje = "Caracter no válido";
            for (let i of caracteres) {
                //si la letra si esta en los caracteres evalua si esta en la lista de letras provadas
                if (dato_rec === i) {
                    let letra_nueva = true

                    for (let letr of lletresProvades) {
                        if (dato_rec == letr) {
                            mensaje = "Caracter ya probado"

                            letra_nueva = false
                            break
                        }
                    }
                    // si es una letra nueva la agrega a las probadas y analiza
                    lletresProvades.push(dato_rec)

                    letra_nueva && ([mensaje, vides] = analizar(dato_rec, paraulaSecreta, vides));

                    if (vides <= 0) {
                        guardar(metodo_guardado, vides, tiempo, dia)
                        boton.setAttribute("disabled", true);
                        clearInterval(contador);
                        boton_tornar.disabled = false;
                        boton_tornar.onclick = () => {
                            window.location.href = './principal.html';
                            win.close();
                        };

                    }
                    else if (paraulaVisible.indexOf("_") == -1) {
                        mensaje = "HAS GANADO";
                        guardar(metodo_guardado, vides, tiempo, dia)
                        boton.setAttribute("disabled", true);
                        clearInterval(contador);
                        boton_tornar.disabled = false;
                        boton_tornar.onclick = () => {
                            window.location.href = './principal.html';
                            win.close();
                        };
                    }


                    break;


                }
            }

        } else {
            (mensaje = "Solo introduzca un letra")
        }
        form.value = ""
        bloque_mensaje.innerHTML = mensaje
        document.getElementById("vides").innerText = +vides;
    })


}