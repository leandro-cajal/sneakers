import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialFinalPrice = JSON.parse(localStorage.getItem("finalPrice")) || 0;

export const CartProvider = ({children}) => {
    const [ cart , setCart ] = useState(initialCart);
    const [ finalPrice, setFinalPrice] = useState(initialFinalPrice)

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("finalPrice", JSON.stringify(finalPrice))
    },[cart])
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            finalPrice,
            setFinalPrice}
            }>
            {children}
        </CartContext.Provider>
    )

}