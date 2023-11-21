


function cifrar() {
    let campoOriginal = document.getElementById("campoOriginal");
    let campoEncriptado = document.getElementById("campoEncriptado");
  
    campoEncriptado.value = btoa(campoOriginal.value);
    campoOriginal.value = "";  // Limpiar el campo original
}

function descifrar() {
  let campoOriginal = document.getElementById("campoOriginal");
  let campoEncriptado = document.getElementById("campoEncriptado");

  campoOriginal.value = atob(campoEncriptado.value);
  campoEncriptado.value = "";  // Limpiar el campo encriptado//
}

function copiar(){
  campoEncriptado.select();
  navigator.clipboard.writeText(campoEncriptado.value);
  campoEncriptado.value = "";
  alert("Texto Copiado");

}