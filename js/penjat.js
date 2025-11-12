//poner aqui conexion con paraules.js y sacar una pálabra random
let palabras = ["uno","dos","tres"]



window.onload = () => {
    
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");
    let form=document.getElementById("lletra")
    


    document.getElementById("prova").addEventListener("click", () => {
       console.log(form.value)
        
    })

}

