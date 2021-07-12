import React from 'react'


function sumaGauss() {
    document.getElementById("outputsumagauss").innerHTML = "";
    var limita1 = parseInt(document.getElementById("limita1").value);
    var limita2 = parseInt(document.getElementById("limita2").value);
    var i;
    var rezultat = (limita2 * (limita2 + 1) / 2) - ((limita1 - 1) * limita1 / 2);
    if ((limita2 - limita1) < 1000) {
        document.getElementById("outputsumagauss").innerHTML += "Vom face adunarea: " + limita1;
        for (i = limita1 + 1; i <= limita2; i++) {
            document.getElementById("outputsumagauss").innerHTML += " + " + i;
        }
    }
    document.getElementById("outputsumagauss").innerHTML += "<br>Suma Gauss este " + rezultat;

}

const SumaGauss = () => {
    return (
    <div className="container">
        <div className="calculator">
    <h2>Sumă Gauss</h2>
    <p> Introduceți partea de început și de final pentru suma Gauss </p>
    <input id="limita1" placeholder="Numar pozitiv"></input><br></br>
    <input id="limita2" placeholder="Numar pozitiv"></input>
    <button onclick="sumaGauss()" id="calculeazasumagauss">Calculează</button>
    <b id="outputsumagauss"></b>
    </div>
    </div>

    )
}

export default SumaGauss