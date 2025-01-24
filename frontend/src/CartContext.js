import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.product];
    } else if (action.type === 'REMOVE_FROM_CART') {
        return state.filter((item) => item._id !== action.productId);
    } else if (action.type === 'ADJUST_QUANTITY') {
        return state.map((item) =>
            item._id === action.productId
                ? { ...item, quantity: action.quantity }
                : item
        );
    } else {
        return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
