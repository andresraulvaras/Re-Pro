

var numero = 1;

function adelante() {
    numero++;
    if(numero > 7) 
        numero = 1;
        var foto = document.getElementById("foto");
        foto.src = "semitas-imagen/semita-" + numero + ".jpg";
    
}

function atras() {
    numero--;
    if(numero < 1) 
        numero = 7;
        var foto = document.getElementById("foto");
        foto.src = "semitas-imagen/semita-" + numero + ".jpg";
    
}
