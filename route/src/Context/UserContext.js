import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };
     const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <UserContext.Provider value={{ 
            username, 
            setUsername, 
            cart, 
            addToCart, 
            removeFromCart 
        }}>
            {children}
        </UserContext.Provider>
    );
};
