

var numero = 1;

function adelante() {
    numero++;
    if(numero > 7) 
        numero = 1;
        var foto = document.getElementById("foto");
        foto.src = "imgFile/semita-" + numero + ".jpg";
    
}

function atras() {
    numero--;
    if(numero < 1) 
        numero = 7;
        var foto = document.getElementById("foto");
        foto.src = "imgFile/semita-" + numero + ".jpg";
    
}
document.getElementById("page_ref").onclick = function() {
    // Abrir la página en una nueva pestaña del navegador
    window.open("https://www.sanjuan.tur.ar/");
  }