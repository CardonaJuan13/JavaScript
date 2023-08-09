let edad =parseFloat(prompt("Ingresa tu edad"))
if (edad >= 18) {
    alert("Sos mayor de edad, podes ingresar a los productos")
}else{
    alert("Debes ser mayor de 18 años para comprar en este sitio")
    alert("No puedes acceder a productos siendo menor, volveras al inicio")
    window.location.href ="../index.html"
    } 
    while(isNaN(edad) || edad<=0){
        edad=parseInt(prompt("Ingresa tu edad"));

        if(isNaN(edad) || edad <=0)
        alert("Ingresa una edad valida");
    }
  function precioTotal(nombreProducto) {
    let precio;

    switch (nombreProducto) {
        case "Producto 1":
            precio = 200;
            break;
        case "Producto 2":
            precio = 450;
            break;
        case "Producto 3":
            precio = 250;
            break;
            default:
            precio = "Producto no encontrado";
   }

   return precio;
   
  }
  const nombreProductoElegido = prompt( "Ingresa el nombre del producto (Producto 1, Producto 2, Producto 3");
  const precioProducto = precioTotal(nombreProductoElegido);

  alert("El precio de" +nombreProductoElegido+"es:" +precioProducto)