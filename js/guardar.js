function guardar(metodo_guardado, vides, tiempo, dia) {


    if (metodo_guardado == "Cookies") {
        document.cookie = "username=Dieg0  id=75    ; max-age=" + 60 * 60 * 24 * 30;
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