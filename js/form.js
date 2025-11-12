

function form(){
      let form=document.getElementById("lletra")
       let bloque_mensaje=document.getElementById("mensaje")


      document.getElementById("prova").addEventListener("click", () => {
     //comprobaciones iniciales
     form.value.length==1 || (bloque_mensaje.innerHTML="solo intruzca un letra") 


    })
}