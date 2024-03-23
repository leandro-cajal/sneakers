import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartPreview({ showCartPreview }) {
    const { cart, setCart, finalPrice, setFinalPrice } = useContext(CartContext);

    // Manejador de evento para eliminar un producto del carrito
    const handleRemoveItem = (productDeleted) => {
        // Filtra los productos del carrito para mantener solo aquellos que no coinciden con el ID del producto seleccionado
        const updatedCart = cart.filter((prod) => prod.id !== productDeleted.id);

        // Actualiza el carrito y el precio final
        setCart(updatedCart);
        setFinalPrice(finalPrice - (productDeleted.price * productDeleted.stock));
    };

    return (
        <div className={`absolute transform transition-transform overflow-y-auto bg-white max-w-md w-full h-screen top-0 right-0 border-t ${showCartPreview ? "" : "translate-x-full"}`}>
            <div className=''>
                <p className='border-b text-lg p-4 font-bold'>MI COMPRA</p>
            </div>
            {cart.length > 0 ? (
                <>
                    <ul className=''>
                        {cart.map((prod) => (
                            <li key={prod.id} className='border-b'>
                                <div className='flex items-center gap-3 p-4'>
                                    <div className='w-20 h-20'><img className='w-full h-full object-cover' src={prod.images[0]} alt={prod.name} /></div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-1 truncate'><span>{prod.stock} x</span><h3>{prod.name}</h3></div>
        
                                        <div className='flex items-center gap-4'>
                                            <span className='font-semibold text-lg'>${prod.price}.00</span>
                                            <i className="text-red-600 text-lg bi bi-trash cursor-pointer" onClick={() => handleRemoveItem(prod)}></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='border-t pt-4'>
                        <div className='flex justify-between item-center p-4'>
                            <p className='font-bold text-lg'>Precio Final</p>
                            <span className='font-bold text-lg'>${finalPrice}.00</span>
                        </div>
                        <div className='flex justify-between item-center p-4'>
                            <span className='text-lg'>Transporte</span>
                            <span className='text-lg text-green-400'>Gratis</span>
                        </div>
                    </div>
                    <div className='p-4 grid place-items-center pb-36'>
                        <button className='px-8 py-4 text-lg bg-black text-white text-center font-bold lg:hover:bg-red-600 duration-300 transition-colors'>Ver Carrito</button>
                    </div>
                </>
            ) : (
                <div className='w-full h-full grid place-items-center'>
                    <div className='flex flex-col items-center'>
                        <i className="bi bi-cart text-[50px]"></i>
                        <p className="font-bold text-xl p-4 text-center">Tu carrito está vacío...</p>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export default CartPreview;
