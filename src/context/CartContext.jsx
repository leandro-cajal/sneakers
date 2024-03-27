import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [ cart , setCart ] = useState(initialCart);
    const [ finalPrice, setFinalPrice] = useState(0)

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
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