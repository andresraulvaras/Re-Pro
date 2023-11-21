const textoarea = document.querySelector(".textoarea");
const imagendos = document.querySelector(".imagendos");


function suerte(texto){

    texto = texto.toLowerCase();

    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("u", "ufat")
    console.log(texto);
    //document.write(texto);
    return texto;
}

function cifrar(){
    const resultado = suerte(textoarea.value)
    imagendos.value = resultado;
    imagendos.style.backgroundImage = "none"
    textoarea.value = "";
}

function malasuerte(texto){
    
    texto = texto.toLowerCase();

    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ufat", "u")

    console.log(texto);
   // document.write(texto);
    return texto;
}

function descifrar(){
    const resultado = malasuerte(textoarea.value)
    imagendos.value = resultado;
    imagendos.style.backgroundImage = "none"
}

function hacerCopia(){
    imagendos.select();
    navigator.clipboard.writeText(imagendos.value);
    imagendos.value = "";
    alert("Texto Copiado");

}



