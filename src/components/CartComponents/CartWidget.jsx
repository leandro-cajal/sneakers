import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({ onClick }) => {

    const { cart } = useContext(CartContext);
    return(
        <div className="relative cursor-pointer" onClick={onClick}>
            <i className="text-2xl font-bold bi bi-cart3 z-50 hover:text-red-600 transition-colors"></i>
            <span className="absolute bg-red-600 rounded-full w-5 h-5 flex justify-center items-center text-sm z-0 left-4 -top-1 font-semibold text-white">{cart.length}</span>
        </div>
    );
}

export default CartWidget 