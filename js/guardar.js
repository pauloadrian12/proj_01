/**
 * Función que dependiendo el tipo de guardado especificado, ejecuta el
 * guardado usando uno o otro usando los parametros pasados.
 * 
 * @param {string} metodo_guardado metodo de guardado que se selecciona en la variable
 * @param {number} vides vidas que tiene el usuario al momento de llamar a la funcion
 * @param {string} tiempo tiempo transcurrido de la partida en el momento que se llama a la función
 * @param {string} dia fecha en formato dd/mm/aaaa en el momento en que se llama a la función
 */

function guardar(metodo_guardado, vides, tiempo, dia) {

 let resultat = ""
        if (vides === 0) {
            resultat = "Derrota"
        }
        else {
            resultat = "Victoria"
        }


    if (metodo_guardado == "Cookies") {
        
        
        let guardar = JSON.stringify({resultat: resultat, vidas: vides, tiempo: tiempo, data: dia});
        let cookie_array = ""

        document.cookie && (cookie_array = (document.cookie.split("=")[1]+","))

        cookie_array+= guardar 


        //nueva_cookies
        document.cookie ="stats=" + cookie_array + " ; max-age=" + 60 * 60 * 24 * 30;


        console.log(document.cookie)






    }
    else if (metodo_guardado == "Localstorage") {
   
        let partida = {
            resultat: resultat,
            vidas: vides,
            tiempo: tiempo,
            data: dia
        };

        let stats = JSON.parse(localStorage.getItem("stats")) || [];

        stats.push(partida);

        localStorage.setItem("stats", JSON.stringify(stats));
    }

    else if (metodo_guardado == "localstorage") {
        let resultat = ""
        if (vides === 0) {
            resultat = "Derrota"
        }
        else {
            resultat = "Victoria"
        }

        let partida = {
            resultat: resultat,
            vidas: vides,
            tiempo: tiempo,
            data: dia
        };

        let stats = JSON.parse(localStorage.getItem("stats")) || [];

        stats.push(partida);

        localStorage.setItem("stats", JSON.stringify(stats));
    }
}





