
// este archivo se encarga de agregar los productos al carrito
   const itemBtn = document.getElementsByClassName("btn-item");
  
   for (let i = 0; i < itemBtn.length; i++) {
       itemBtn[i].addEventListener("click", function() {
           alert("¡Producto agregado al carrito!");
              const carritoVacio = document.getElementById("carrito_vacio");
              const carritoLleno = document.getElementById("carrito_lleno");
              const contador = document.getElementById("contador");
              carritoVacio.style.display = "none"; // Oculta el contador de carrito vacío
              carritoLleno.style.display = "block"; // Muestra el contador de carrito lleno
              let cantidad = parseInt(contador.textContent);
              cantidad++;
              contador.textContent = cantidad; // Actualiza el contador de productos en el carrito
              let padre=itemBtn[i].parentNode;
              let producto = padre.id;
              let titulo = padre.querySelector(".titulo").innerHTML;
              let precio = padre.querySelector(".precio").innerHTML;
              let descripcion = padre.querySelector(".descripcion").innerHTML;
      
            


// Crear un objeto del producto y guardarlo en el LocalStorage
                let productoObj = {
                  id: producto,
                  titulo: titulo,
                  precio: precio,
                  descripcion: descripcion,
                
              };
              let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
              carrito.push(productoObj);
              localStorage.setItem("carrito", JSON.stringify(carrito)); 

              console.log("Producto agregado al carrito:", productoObj);
              
                console.log("Producto guardado en LocalStorage:", producto);
               
                console.log("Producto agregado al carrito:", producto);

       });
   }

   let productoscarrito= localStorage.getItem("carrito");
    if (productoscarrito) {
         productoscarrito = JSON.parse(productoscarrito);
    } else {
         productoscarrito = [];
    } 
    const carritoVacio = document.getElementById("carrito_vacio");
    const carritoLleno = document.getElementById("carrito_lleno");       
    // Mostrar los productos en el carrito
    cantidad_carrito = 0;
    cantidad_carrito = parseInt(productoscarrito.length);
   if (cantidad_carrito > 0) {
        carritoVacio.style.display = "none"; // Oculta el contador de carrito vacío
        carritoLleno.style.display = "block"; // Muestra el contador de carrito lleno
   }
console.log("Cantidad de productos en el carrito:", cantidad_carrito);
console.log("Productos en el carrito:", productoscarrito);
document.getElementById("contador").textContent = cantidad_carrito;



