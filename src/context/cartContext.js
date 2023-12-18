import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const anadirCarrito = (producto, cantidad) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === producto.id);
      if (existingProductIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingProductIndex].cantidad += cantidad;
        newCart[existingProductIndex].totalPrecio = newCart[existingProductIndex].cantidad * newCart[existingProductIndex].precio;
        return newCart;
      } else {
        return [...prevCart, { ...producto, cantidad, totalPrecio: cantidad * producto.precio }];
      }
    });
  };

  const removerCarrito = (productoId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return; /* Evita cantidades negativas o cero*/
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productoId) {
          return { ...item, cantidad: nuevaCantidad, totalPrecio: nuevaCantidad * item.precio };
        }
        return item;
      });
    });
  };

  return React.createElement(CartContext.Provider, { value: { cart, anadirCarrito, removerCarrito, actualizarCantidad }}, children);
};