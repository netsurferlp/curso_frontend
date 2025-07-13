window.addEventListener("load", function() {
    loadCarrito();
});

// Obtener el contenedor del carrito
function loadCarrito() {

let productoscarrito= localStorage.getItem("carrito");
    if (productoscarrito) {
         productoscarrito = JSON.parse(productoscarrito);
    } else {
         productoscarrito = [];
    } 

if (productoscarrito.length === 0) {
     document.getElementById("estado").textContent = "El carrito está vacío";
}
     else
     {
         document.getElementById("estado").textContent = "El carrito tiene " + productoscarrito.length + " productos";
     }
    for (let i = 0; i < productoscarrito.length; i++) {
       let id = productoscarrito[i].id;
       let titulo = productoscarrito[i].titulo;
       let precio = productoscarrito[i].precio;
       let descripcion = productoscarrito[i].descripcion;

       console.log("Producto en el carrito:", productoscarrito[i]);
       console.log("Detalles del producto:");
       console.log("Producto ID:", id);
       console.log("Título:", titulo);
       console.log("Precio:", precio);
       console.log("Descripción:", descripcion);
       document.createElement("div");
       // Crear un elemento HTML para mostrar el producto en el carrito
       contenedorCarrito.innerHTML += `
         <div class="card-carrito">
           <div>
             <h6>Product ID ${id}</h6>
             <h6>Título: ${titulo}</h6>
             <h6>Precio: ${precio}</h6>
             <h6>Descripción: ${descripcion}</h6>
         
             <div>
               <button onclick="eliminar('${id}')" class="button" value="Eliminar"> Eliminar </button>
             </div>
           
         </div>
       `;                                                                                       
    }
contenedorCarrito.innerHTML += `

  <hr><div>
                <button onclick="eliminarTodos()" class="button" value="Eliminar Todos"> Eliminar Todos </button>   
           </div> `;  



    // Actualizar el contador de productos en el carrito
    cantidad_carrito = 0;
    cantidad_carrito = parseInt(productoscarrito.length);
 
console.log("Cantidad de productos en el carrito:", cantidad_carrito);
console.log("Productos en el carrito:", productoscarrito);
// Actualizar el contador en el HTML y el total
document.getElementById("contador_carrito").textContent = cantidad_carrito;
document.getElementById("total_carrito").textContent = calcularTotal();
   
}
//eliminar un producto del carrito
function eliminar(id) {

  let idx = id.toString();
let productoscarrito= localStorage.getItem("carrito");
    if (productoscarrito) {
        productoscarrito = JSON.parse(productoscarrito);
    } else {
        productoscarrito = [];
    }
  console.log("Eliminando producto con ID:", idx);
  const index_object = productoscarrito.find(item => item.id === idx);
productoscarrito.splice(index_object, 1);
  localStorage.clear();
    localStorage.setItem("carrito", JSON.stringify(productoscarrito));  
    // actualizar la página para reflejar los cambios
  actualizarPagina();
}


// Actualizar la página para reflejar los cambios en el carrito
function actualizarPagina() {
  contenedorCarrito.innerHTML = ""; // Limpiar el contenedor del carrito
  loadCarrito(); // Volver a cargar el carrito
}



// Eliminar todos los productos del carrito
function eliminarTodos() {
  try {
    localStorage.clear();
    loadCarrito();
    console.log("Todos los productos del carrito han sido eliminados.");
    actualizarPagina();
  } catch(error) {
    console.log("Error al eliminar todos los productos del carrito:", error);
  }
}    

// Calcular el total del carrito
function calcularTotal() {
    let productoscarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    for (let i = 0; i < productoscarrito.length; i++) {
        total += parseFloat(productoscarrito[i].precio.replace(/[$.]/g, ''));
    }
    return total;
}


// Agregar el evento al botón de enviar pedido
   const enviarBtn = document.getElementById("enviarPedido");
   enviarBtn.addEventListener("click", function() {
       enviarPedido();
   });



// Función para enviar el pedido a través de WhatsApp
function enviarPedido() {
    // Verificar si hay productos en el carrito
    let productoscarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (productoscarrito.length === 0) {
        alert("El carrito está vacío. No se puede enviar el pedido.");
        return;
    }
    let mensaje = "Hola, me gustaría comprar los siguientes productos:\n";
    for (let i = 0; i < productoscarrito.length; i++) {
        mensaje += `- ${productoscarrito[i].titulo} (${productoscarrito[i].precio})\n`;
        
    }
    mensaje += `Total: ${calcularTotal()}\n`;
    window.location.href = `https://wa.me/5492216411104?text=${encodeURIComponent(mensaje)}`;
}  


   const volverBtn = document.getElementById("volver");
   volverBtn.addEventListener("click", function() {
       volver();
   });



// volver a la página principal
function volver() {
    window.location.href = "../pages/index.html";
    console.log("Volviendo a la página principal.");
}
