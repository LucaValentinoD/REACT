import React, { useContext } from 'react';
import { CartContext } from '../Context/cartContext';
import "./carrito.css";

function Carrito() {
    const { cart, removeCart, handleAddToCart, clearCart } = useContext(CartContext);
    
    const handleRemoveItem = (id) => {
        removeCart(id);
    };

    const agregarAlCarrito = (producto) => {
        const cantidad = 1;
        console.log(`Cantidad seleccionada: ${cantidad}`);

        if (cantidad > producto.stock) {
            console.log(`No hay suficiente stock. Solo hay ${producto.stock} unidades disponibles.`);
            return;
        }

        console.log(`Agregando ${cantidad} de ${producto.nombre} al carrito.`);
        handleAddToCart(producto, cantidad);
    };

    const totalAmount = cart.reduce((total, prod) => total + (prod.precio * prod.cantidad), 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
    };

    return (
        <div className='boddy'>
            {cart.length === 0 ? (
                <div className='container2'>      
                    <img src='.\src\assets\carrito-de-compras.png' alt="Logo" className='logo' />
                    <div className='vacio'>Tu Carrito está vacío.</div>
                </div>
            ) : (
                <div className='container2'>  
                    <div>
                    {cart.map(prod => {
    console.log(prod.img);
    return (
        <div key={prod.id}>
            <img className='img' src={prod.imagen} alt={prod.nombre} />
            <div>{prod.nombre}</div>
            <div>Precio: ${prod.precio}</div>
            <div>Cantidad: {prod.cantidad}</div>
            <div>Total: ${prod.precio * prod.cantidad}</div>
            <button onClick={() => agregarAlCarrito(prod)}>Añadir</button>
            <button onClick={() => handleRemoveItem(prod.id)}>Eliminar</button>
        </div>
    );
})}

                    </div>
                    <div className='Total'>
                    <h3>Su compra tiene un total de: ${totalAmount}</h3>
                    
                    <h3>Finalizar Compra</h3>
                    <form onSubmit={handleSubmit}>
                        <button type="submit">Confirmar Compra</button>
                    </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrito;
