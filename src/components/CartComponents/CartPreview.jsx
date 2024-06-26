import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function CartPreview({ showCartPreview }) {
    const { cart, setCart, finalPrice, setFinalPrice } = useContext(CartContext);
    const [ shippingCost,setShippingCost ] = useState(10)

    const handleRemoveItem = (productDeleted) => {
        const updatedCart = cart.filter((prod) => prod.id !== productDeleted.id);
        setCart(updatedCart);
        setFinalPrice(finalPrice - (
            (productDeleted.discount ? productDeleted.discountedPrice : productDeleted.price) * productDeleted.stock));
    };

    useEffect(() => {
        finalPrice > 120 ? setShippingCost(0) : setShippingCost(10)
      }, [finalPrice])

    return (
        <div className={`absolute transform transition-transform duration-300 ease-out shadow-2xl overflow-y-auto bg-white max-w-md w-full h-screen top-0 right-0 border-t ${showCartPreview ? "" : "translate-x-full"}`}>
            <div className=''>
                <p className='border-b text-lg p-4 font-bold'>MI COMPRA</p>
            </div>
            {cart.length > 0 ? (
                <>
                    <ul className=''>
                        {cart.map((prod) => (
                            <li key={prod.id} className='border-b'>
                                <div className='flex items-center gap-3 p-4'>
                                    <div className='w-20 h-20'>
                                        {prod.images && prod.images.length > 0 && (
                                            <img className='w-full h-full object-cover' src={prod.images[0]} alt={prod.name} />
                                        )}
                                    </div>                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-1 truncate'><span>{prod.stock} x</span><h3>{prod.name}</h3></div>

                                        <div className='flex items-center gap-4'>
                                            <span className='font-semibold text-lg'>US${prod.discount ? prod.discountedPrice : prod.price }.00</span>
                                            <i className="text-red-600 text-lg bi bi-trash cursor-pointer" onClick={() => handleRemoveItem(prod)}></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className=' pt-4'>
                        <div className='flex justify-between item-center p-4'>
                            <p className='font-bold text-lg'>Precio Final</p>
                            <span className='font-bold text-lg'>US${finalPrice}.00</span>
                        </div>
                        <div className='flex justify-between item-center p-4'>
                            <span className='text-lg'>Transporte</span>
                            <span className={`text-lg ${shippingCost === 0 ? "text-green-500":""}`}>{shippingCost === 0 ? "Gratis" : `$${shippingCost}.00`}</span>
                        </div>
                    </div>
                    <Link to="/cart" onClick={showCartPreview} className='p-4 grid place-items-center pb-36'>
                        <button  className='text-lg text-white py-3 rounded bg-red-600 w-full hover:opacity-70 transition-colors'>Ver Carrito</button>
                    </Link>
                </>
            ) : (
                <div className='w-full h-[80%] grid place-items-center'>
                    <div className='flex flex-col text-stone-500 items-center'>
                        <i className="bi bi-cart3 text-[50px]"></i>
                        <p className="text-xl p-4 text-center">Tu carrito está vacío...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPreview;
