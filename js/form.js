function analizar(dat, pal) {
    let resultado="letra no encontrada..."
for (let i of pal){
    if(dat===i){
       resultado="palabra encontrada!!!"
     break;
    }

}

return resultado

}




function form() {
    let form = document.getElementById("lletra")
    let bloque_mensaje = document.getElementById("mensaje")


    document.getElementById("prova").addEventListener("click", () => {
        let dato_rec = form.value

        bloque_mensaje.innerHTML = "";


        if (dato_rec.length == 1) {
            bloque_mensaje.innerHTML = "caracter no valido";
         
            for (let i of caracteres){
                if(dato_rec===i){
                    bloque_mensaje.innerHTML = analizar(dato_rec,paraulaSecreta)
                    break;
                } 
            }
      
        } else {
            (bloque_mensaje.innerHTML = "solo intruzca un letra")
        }


    })
}