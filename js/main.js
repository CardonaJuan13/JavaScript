let usuario = {
    nombre: prompt("Ingresa tu nombre"),
    edad: NaN
  };
  
  while (isNaN(usuario.edad) || usuario.edad <= 0) {
    usuario.edad = parseInt(prompt("Ingresa tu edad"));
  
    if (isNaN(usuario.edad) || usuario.edad <= 0) {
      alert("Ingresa una edad válida");
    }
  }
  
  if (usuario.edad >= 18) {
    alert("¡Bienvenido/a! Puedes ingresar a los productos.");
  } else {
    alert("Debes ser mayor de 18 años para comprar en este sitio.");
    alert("No puedes acceder a productos siendo menor, volverás al inicio.");
    window.location.href = "../index.html";
  }  
  const productos = [
    { nombre: "Producto 1", precio: 200 },
    { nombre: "Producto 2", precio: 450 },
    { nombre: "Producto 3", precio: 250 }
  ];
  function validarProducto(nombreProducto) {
    return productos.some(producto => producto.nombre === nombreProducto);
  }
  
  const nombreProductoElegido = prompt("Ingresa el nombre del producto (Producto 1, Producto 2, Producto 3)");
  
  if (!validarProducto(nombreProductoElegido)) {
    alert("Producto no encontrado");
  } else {
    const productoElegido = productos.find(producto => producto.nombre === nombreProductoElegido);
    const precioProducto = productoElegido.precio;
    alert(`El precio de ${nombreProductoElegido} es: ${precioProducto}`);
  }    
