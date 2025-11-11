window.onload = () => {
    
    let input = document.getElementById("");
   
    let win = window.open("./penjat.html", "", "popup,width=500,height=500");


    document.getElementById("button").addEventListener("", () => {

        win.postMessage(input.value, "http://127.0.0.1:5500");

    })

}

