
/**
 * Envia un mensaje con el numero de vidas al popup
 * @param {Number} vidas numero de vidas actual
 * @returns vidas-1
 */
function letra_incorrecta(vidas) {
    vidas--;
    win.postMessage({ vidas }, "http://127.0.0.1:5500");
    console.log(XMLDocument.vidas)

    return vidas
}




/**
 * Analiza la letra del usuario la compara con las letras de la palabra secreta y retorna 
 * si la palabra fue encontrada y el numero de vidas despues del analisis
 * @param {String} dat letra dada por el usuario
 * @param {String} pal palabra secreta
 * @param {Number} vidas cantidad actual de vidas
 * @returns {String} palabra ( encontrada | no encontrada ) , ( Vidas | Vidas - 1 ) 
 */
function analizar(dat, pal, vidas) {
    console.log("analizando....")
    let enc = false
    let resultado = "letra no encontrada"
    let i = 0;

    while (i < pal.length) {
        if (pal.charAt(i) == dat) {
            paraulaVisible[i] = dat;
            enc = true;
            resultado = "letras encontrada!!!"
            document.getElementById("paraula").innerText = paraulaVisible.join(" ");
        }
        i = i + 1;
    }

    enc || (vidas = letra_incorrecta(vidas))

    return [resultado, vidas]

}




function eval_form() {
    let form = document.getElementById("lletra")
    let bloque_mensaje = document.getElementById("mensaje")




    document.getElementById("prova").addEventListener("click", () => {
        let dato_rec = form.value
        bloque_mensaje.innerHTML = "";
        let mensaje = ""

        // si dato del form es 1 letra evalua si esta esta en los caracteres
        if (dato_rec.length == 1) {
            mensaje = "caracter no valido";
            for (let i of caracteres) {
                //si la letra si esta en los caracteres evalua si esta en la lista de letras provadas
                if (dato_rec === i) {
                    let letra_nueva = true

                    for (let letr of lletresProvades) {
                        if (dato_rec == letr) {
                            mensaje = "caracter ya probado"
                            letra_nueva = false
                            break
                        }
                    }
                    // si es una letra nueva la agrega a las probadas y analiza
                    lletresProvades.push(dato_rec)
                    console.log(letra_nueva)
                    if (letra_nueva) { [mensaje, vides] = analizar(dato_rec, paraulaSecreta, vides) }
                    break;


                }
            }

        } else {
            (mensaje = "solo introduzca un letra")
        }
        bloque_mensaje.innerHTML = mensaje

    })



}