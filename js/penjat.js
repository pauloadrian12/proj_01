//poner aqui conexion con paraules.js y sacar una pálabra random
let palabras = ["uno","dos","tres"]
window.onload = () => {
    
    let input = document.getElementById("cuadro-2");
     for (let i of palabras[2]){
        input.innerHTML+=  '<div> <input type="text" maxlength="1" style="width: 30px; text-align: center;">    </input>   </div>   '
     }
   
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");


    document.getElementById("c").addEventListener("", () => {

        win.postMessage(input.value, "http://127.0.0.1:5500");

    })

}

