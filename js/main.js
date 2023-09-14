//carrito//
let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
}

function eliminarDelCarrito(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
}

function calcularTotal() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    return total;
}

const productos = [
    { nombre: "Medialunas", precio: 250 },
    { nombre: "Facturas", precio: 450 },
    { nombre: "Pan", precio: 200 }
];

const contenedorProductos = document.querySelector("#productos");
const contenedorCarrito = document.querySelector("#carrito");
const botonVaciarCarrito = document.querySelector("#boton-vaciar");

function renderizarProductos() {
    for (const producto of productos) {
        const botonAgregar = document.createElement("button");
        botonAgregar.innerText = "Agregar al carrito";
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto);
            renderizarCarrito();
        });

        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `<h3>${producto.nombre}</h3><p>${producto.precio} pesos</p>`;
        divProducto.appendChild(botonAgregar);

        contenedorProductos.appendChild(divProducto);
    }
}
function renderizarCarrito() {
    contenedorCarrito.innerHTML = "";

    for (const producto of carrito) {
        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar del carrito";
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(producto);
            renderizarCarrito();
        });

        const divProducto = document.createElement("div");
        divProducto.classList.add("producto-carrito");
        divProducto.innerHTML = `<h3>${producto.nombre}</h3><p>${producto.precio} pesos</p>`;
        divProducto.appendChild(botonEliminar);

        contenedorCarrito.appendChild(divProducto);
    }

    const total = calcularTotal();
    const parrafoTotal = document.createElement("p");
    parrafoTotal.innerText = `Total: ${total} pesos`;

    contenedorCarrito.appendChild(parrafoTotal);
}

botonVaciarCarrito.addEventListener("click", () => {
    carrito = [];
    renderizarCarrito();
});
renderizarProductos();