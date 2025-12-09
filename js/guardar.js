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
    else if (metodo_guardado == "localstorage") {
   
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





