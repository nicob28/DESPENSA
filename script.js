// Definir los productos por categoría
const productos = {
    ropa: [
        { id: 1, nombre: 'Camisa', descripcion: 'Camisa de algodón', precio: '$30' },
        { id: 2, nombre: 'Pantalón', descripcion: 'Pantalón de mezclilla', precio: '$40' }
    ],
    electronicos: [
        { id: 3, nombre: 'Teléfono', descripcion: 'Teléfono inteligente', precio: '$300' },
        { id: 4, nombre: 'Tablet', descripcion: 'Tablet de 10 pulgadas', precio: '$250' }
    ],
    alimentos: [
        { id: 5, nombre: 'Pan', descripcion: 'Pan fresco', precio: '$2' },
        { id: 6, nombre: 'Leche', descripcion: 'Leche en botella', precio: '$1.5' }
    ]
};

// Obtener la categoría seleccionada de la URL
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');
const productosContainer = document.getElementById('productos');

// Mostrar productos de la categoría seleccionada
if (productos[categoria]) {
    const productosGrid = document.getElementById('productosGrid');
    productos[categoria].forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('col-md-6', 'mb-3'); // Ajusta las columnas según el tamaño deseado
        divProducto.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen || 'default.jpg'}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <label for="cantidad-${producto.id}">Cantidad:</label>
                    <input type="number" id="cantidad-${producto.id}" value="1" min="1" class="form-control mb-2">
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productosGrid.appendChild(divProducto);
    });
} else {
    productosContainer.innerHTML = '<p>No hay productos en esta categoría.</p>';
}

function agregarAlCarrito(productoId) {
    // Obtener la categoría seleccionada de la URL
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    
    // Verificar si la categoría existe
    if (productos[categoria]) {
        // Buscar el producto correspondiente por ID en la categoría seleccionada
        const producto = productos[categoria].find(p => p.id === productoId);
        
        if (producto) {
            // Obtener el carrito actual (si no existe, inicializar como arreglo vacío)
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            
            // Obtener la cantidad seleccionada del producto
            const cantidad = document.getElementById(`cantidad-${producto.id}`).value || 1;

            // Crear un objeto con el producto y la cantidad
            const productoConCantidad = { ...producto, cantidad: parseInt(cantidad) };
            
            // Agregar el producto completo al carrito
            carrito.push(productoConCantidad);
            
            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        } else {
            console.log('Producto no encontrado');
        }
    } else {
        console.log('Categoría no encontrada');
    }

}
  // Función para redirigir al inicio (index.html)
  function volverAlInicio() {
    window.location.href = 'index.html';  // Redirige a la página principal
}
