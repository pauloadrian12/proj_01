//poner aqui conexion con paraules.js y sacar una pálabra random
let palabras = ["uno","dos","tres"]
window.onload = () => {
    
    let input = document.getElementById("cuadro");
     for (let i of palabras[2]){
        input.innerHTML+=  '<div> <input type="text" maxlength="1" style="width: 30px; text-align: center;">    </input>   </div>   '
     }
   
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");


    document.getElementById("c").addEventListener("", () => {

        win.postMessage(input.value, "http://127.0.0.1:5500");

    })

}

<<<<<<< HEAD

=======
>>>>>>> 3aec5ade64aae278d7b0eb7a9c69b64de174b0a5
