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
 
      event.preventDefault(); // Evita el envío del formulario si hay errores
    if (validarFormulario()) {
     window.location.href = "../pages/envio_mail.php"; // Redirige a la página de envío

    
    }

 


});
