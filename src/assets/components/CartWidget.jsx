
const CartWidget = () => {
    return(
        <div className="relative cursor-pointer">
            <i className="text-2xl font-bold bi bi-cart3 z-50"></i>
            <span className="absolute bg-gray-400 rounded-full px-1 top-0 left-4 text-sm z-0">0</span>
        </div>
    );
}

export default CartWidget