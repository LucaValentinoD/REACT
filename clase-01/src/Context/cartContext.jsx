import { useState, createContext } from "react";
import productosRiver from '../Javascript/productos';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (nombre, precio, cantidad, id, imagen ) => {
        setCart(prevCart => {
            const yaexiste = prevCart.find(prod => prod.id === id);
            if (yaexiste) {
                const nuevaCantidad = yaexiste.cantidad + cantidad;
                const stockDisponible = productosRiver.find(prod => prod.id === id).stock;

                if (nuevaCantidad > stockDisponible) {
                    console.log(`No se puede añadir más de ${stockDisponible} unidades.`);
                    return prevCart;
                }

                return prevCart.map(prod => {
                    if (prod.id === id) {
                        return { ...prod, cantidad: nuevaCantidad };
                    } else {
                        return prod;
                    }
                });
            } else {
                const stockDisponible = productosRiver.find(prod => prod.id === id).stock;

                if (cantidad <= stockDisponible) {
                    return [...prevCart, { nombre, precio, cantidad, id, imagen }];
                } else {
                    console.log(`No se puede añadir más de ${stockDisponible} unidades.`);
                    return prevCart;
                }
            }
        });
    };

    const removeCart = (id) => {
        setCart(prevCart => {
            const productoExistente = prevCart.find(prod => prod.id === id);
            
            if (!productoExistente) {
                console.log("No puedes borrar algo que no agregaste todavía.");
                return prevCart;
            }

            console.log(`Eliminando 1 de ${productoExistente.nombre} del carrito.`);

            return prevCart.reduce((nuevoCart, prod) => {
                if (prod.id === id) {
                    const nuevaCantidad = prod.cantidad - 1;
                    if (nuevaCantidad > 0) {
                        nuevoCart.push({ ...prod, cantidad: nuevaCantidad });
                    }
                } else {
                    nuevoCart.push(prod);
                }
                return nuevoCart;
            }, []);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const handleAddToCart = (prod, cantidad) => {
        addCart(prod.nombre, prod.precio, cantidad, prod.id, prod.imagen);
    };

    return (
        <CartContext.Provider value={{ addCart, removeCart, cart, clearCart, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

