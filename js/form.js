function cambiar_img(cambiar){

popup.postMessage({vides}, "http://127.0.0.1:5500");


}

/**
 * 
 * @param {String} dat palabra dada por el usuario
 * @param {String} pal palabra secreta
 * @returns {String} palabra ( encontrada | no encontrada )
 */
function analizar(dat, pal) {
    console.log("analizando....")
       
    let resultado = "palabra no encontrada"


 // vidas - 1 o algo asi
    for (let i of pal) {
        if (dat === i) {
            resultado = "palabra encontrada!!!"
            break;
        }

    }

    //agregar funcion de contaco con cmabiar img
    return resultado 

}




function eval_form() {
    let form = document.getElementById("lletra")
 let bloque_mensaje = document.getElementById("mensaje")




    document.getElementById("prova").addEventListener("click", () => {
        let dato_rec = form.value

        bloque_mensaje.innerHTML = "";

        // si dato del form es 1 letra evalua si esta esta en los caracteres
        if (dato_rec.length == 1) {
            bloque_mensaje.innerHTML = "caracter no valido";

            for (let i of caracteres) {
                //si la letra si esta en los caracteres evalua si esta en la lista de letras provadas
                if (dato_rec === i) {
                    let letra_nueva =true

                    for (let letr of lletresProvades) {
                        if (dato_rec == letr) {
                        letra_nueva = false
                            break
                        }
                    }
                    // si es una letra nueva la agrega a las probadas y analiza
                    lletresProvades.push(dato_rec)
                     console.log(letra_nueva)
                    letra_nueva &&  (bloque_mensaje.innerHTML = analizar(dato_rec, paraulaSecreta) )
                    break;
                }
            }

        } else {
            (bloque_mensaje.innerHTML = "solo intruzca un letra")
        }


    })



}