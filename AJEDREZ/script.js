
    function toggleContenidoAdicional(elementId) {
      var contenidoAdicional = document.getElementById(elementId);
      contenidoAdicional.style.display = (contenidoAdicional.style.display === 'none' || contenidoAdicional.style.display === '') ? 'block' : 'none';
    }
  
    
    function showFullSize(image) {
      window.open(image, '_blank');
  }

      var images = ["imgAjedrez/as1.jpg", "imgAjedrez/as2.jpg", "imgAjedrez/as3.jpg", "imgAjedrez/as4.jpg", "imgAjedrez/as5.jpg"];
      var currentImageIndex = 0; // Índice de la imagen actual

    function changeImage() {
      var image = document.getElementById("image");
      currentImageIndex = (currentImageIndex + 1) % images.length; // Avanzar al siguiente índice, y volver al principio si llega al final
      image.src = images[currentImageIndex]; // Cambiar la imagen
    }

    // Cambiar la imagen cada 3 segundos (3000 milisegundos)
    setInterval(changeImage, 3000);

    
    document.addEventListener("DOMContentLoaded", function() {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
      // Mostrar el botón cuando se haya hecho scroll
      window.addEventListener("scroll", function() {
          // Mostrar el botón cuando se haya hecho scroll 400px o más
          if (window.pageYOffset > 400) {
              scrollToTopBtn.style.display = "block";
          } else {
              scrollToTopBtn.style.display = "none";
          }
      });
  
      // Animar el scroll al inicio de la página cuando se haga clic en el botón
      scrollToTopBtn.addEventListener("click", function() {
          window.scrollTo({
              top: 0,
              behavior: "smooth" // Hacer el desplazamiento suave
          });
      });
  });
  