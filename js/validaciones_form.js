function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || apellido === "" || telefono === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Validar formato de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

   

    const telefonoRegex = /^\d{10,11}$/; // Ejemplo: 10 a 11 dígitos para un número de teléfono
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido (10 a 11 dígitos).");
        return false;
    }   

    return true;

}




const enviarBtn = document.getElementById("enviar");

enviarBtn.addEventListener("click", function(event) {
  // Obtener dimensiones del navegador
  const width = window.innerWidth;
  const height = window.innerHeight ;
const ancho = 400; // Ancho de la ventana emergente
  const alto = 300; // Alto de la ventana emergente 
  // Calcular la posición central
  const left = (width - ancho) / 2;
  const top = (height - alto) / 2;
    const url = "envio_mail.php"; // URL del archivo PHP que procesa el formulario
    const titulo = "Confirmación de Envío"; // Título de la ventana emergente

  const opciones = `width=${ancho},height=${alto},left=${left},top=${top},resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no`;
      event.preventDefault(); // Evita el envío del formulario si hay errores
    if (validarFormulario()) {
    window.open(url, titulo, opciones);

    
    }
});
