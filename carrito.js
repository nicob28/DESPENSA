// Obtener los productos del carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const productosCarrito = document.getElementById('productosCarrito');

// Cargar los productos en el carrito
carrito.forEach(productoId => {
    const producto = obtenerProductoPorId(productoId);
    const divProducto = document.createElement('div');
    divProducto.classList.add('producto');
    divProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
    `;
    productosCarrito.appendChild(divProducto);
});

// Función para obtener los productos por su ID
function obtenerProductoPorId(id) {
    const productos = {
        1: { nombre: 'Camisa', descripcion: 'Camisa de algodón', precio: '$30' },
        2: { nombre: 'Pantalón', descripcion: 'Pantalón de mezclilla', precio: '$40' },
        3: { nombre: 'Teléfono', descripcion: 'Teléfono inteligente', precio: '$300' },
        4: { nombre: 'Tablet', descripcion: 'Tablet de 10 pulgadas', precio: '$250' },
        5: { nombre: 'Pan', descripcion: 'Pan fresco', precio: '$2' },
        6: { nombre: 'Leche', descripcion: 'Leche en botella', precio: '$1.5' }
    };
    return productos[id];
}
// Función para redirigir al inicio (index.html)
function volverAlInicio() {
    window.location.href = 'index.html';  // Redirige a la página principal
}