window.onload = function() {

    let statsElement = document.getElementById("stats");
    let stats = JSON.parse(localStorage.getItem("stats"));
    let stats_cookies = JSON.parse("["+document.cookie.split("=").slice(1).toString()+"]");

    stats= stats.concat(stats_cookies);
    if (stats && stats.length > 0) {
        let files = "";
        for (let i = 0; i < stats.length; i++) {
            let partida = stats[i];
            files += "<tr>" +
                        "<td>" + partida.resultat + "</td>" +
                        "<td>" + partida.vidas + "</td>" +
                        "<td>" + partida.tiempo + "</td>" +
                        "<td>" + partida.data + "</td>" +
                    "</tr>";
        }

        let tabla = "<table class='table table-striped-columns'>" +
                        "<thead>" +
                            "<tr>" +
                                "<th scope='col'>Resultado</th>" +
                                "<th scope='col'>Vidas restantes</th>" +
                                "<th scope='col'>Tiempo</th>" +
                                "<th scope='col'>Fecha</th>" +
                            "</tr>" +
                        "</thead>" +
                        "<tbody>" +
                            files +
                        "</tbody>" +
                    "</table>";

        statsElement.innerHTML = tabla;
    } else {
statsElement.innerHTML = "<div style='border:1px solid #000000ff; padding:5px; width:200px;'>No hay estadísticas disponibles.</div>";
    }
};
