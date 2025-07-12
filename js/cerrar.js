   // Este archivo redirige al usuario a la página principal al hacer clic en el botón "Cerrar"
   
   
   const cerrarBtn = document.getElementById("cerrar");
   cerrarBtn.addEventListener("click", function() {
       window.location.href = "../pages/index.html"; // Redirige a la página principal
   });