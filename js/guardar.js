function guardar(metodo_guardado, vides, tiempo, dia) {






    if (metodo_guardado == "Cookies") {


        let guardar = JSON.stringify({ vides: vides, tiempo: tiempo, dia: dia });

        let num_partida = "partida_1"

        let cookie_array = document.cookie.split("=")

        if (cookie_array.length > 1) { (num_partida = ("partida_" + (parseInt((cookie_array[cookie_array.length - 2]).slice(-1)) + 1))) }


        //nueva_cookies
        document.cookie = num_partida + "=" + guardar + " ; max-age=" + 60 * 60 * 24 * 30;


        console.log(document.cookie)






    }




}