import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';


export const Cart = () => {

  const { cart, setCart, finalPrice, setFinalPrice, shippingCost , setShippingCost, discountCode, setDiscountCode, discountApply, setDiscountApply, discountAmount, setDiscountAmount } = useContext(CartContext);
  const [products, setProducts] = useState([])
  // const [shipping, setShipping] = useState(true);
  // const [zipCode, setZipCode] = useState(0);

  const handleClickAdd = (item) => {
    const product = products.find((prod) => prod.id === item.id);
    if (product && product.stock > item.stock) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, stock: cartItem.stock + 1 } : cartItem
      );
      setCart(updatedCart);
      setFinalPrice((prevFinalPrice) => prevFinalPrice + (item.discount ? item.discountedPrice : item.price));
    } else {
      toast.error('¡No hay suficiente stock para agregar este producto al carrito!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClickDecrement = (item) => {
    if (item.stock > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.stock > 1 ? { ...cartItem, stock: cartItem.stock - 1 } : cartItem
      );
      setCart(updatedCart);
      setFinalPrice((prevFinalPrice) => prevFinalPrice - (item.discount ? item.discountedPrice : item.price));
    }
  };

  const handleRemoveItem = (productDeleted) => {
    const updatedCart = cart.filter((prod) => prod.id !== productDeleted.id);
    setCart(updatedCart);
    setFinalPrice(finalPrice - (
      (productDeleted.discount ? productDeleted.discountedPrice : productDeleted.price) * productDeleted.stock));
  };

  const handleApplyDiscount = (event) => {
    const validDiscountCode = 'leo10';
    event.preventDefault();
    discountCode === validDiscountCode ? setDiscountApply(true) : setDiscountApply(false)
  };

  const handleEmptyCart = () => {
    setCart([]);
    setFinalPrice(0);
  };

  useEffect(() => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((resp) => {
        const prods = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
        setProducts(prods);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    finalPrice > 120 ? setShippingCost(0) : setShippingCost(10);
  }, [finalPrice, cart])

  useEffect(() => {
    setDiscountAmount(finalPrice * (10 / 100))
    discountApply ? setFinalPrice(prevFinalPrice => prevFinalPrice - discountAmount) : "";

  }, [discountApply])

  return (
    <>
      <div className='max-w-7xl mx-auto py-32'>

        {cart.length < 1 ?
          (<div className='p-6 mx-4 xl:mx-0 bg-white flex flex-col gap-8 rounded'>
            <p className='text-center font-semibold text-lg'>No hay productos en el carrito, agrega tus zapatillas favoritas antes de que sea tarde!</p>
            <span className='text-center text-sm'>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</span>
            <Link className='mx-auto text-lg text-white py-3 px-10 rounded bg-red-600 hover:opacity-70 transition-colors w-fit' to="/zapatillas">Elegir Productos</Link>
          </div>) :
          (
            <div className='grid grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-6 w-full'>
              <div className='col-span-3 md:col-span-3 lg:px-0 px-4 w-full bg-white rounded overflow-hidden shadow-md'>
                <p className='text-center font-semibold py-8'>{shippingCost > 0 ? `¡Completá tu pedido y conseguí envío gratis! Te faltan $${120 - finalPrice}.00` : "Alcanzaste el envío gratis 🎁 ¡Ahora finaliza tu compra!"}</p>
              </div>
              <div className='p-4 bg-white shadow-md col-span-3 lg:col-span-2 rounded'>
                <section className="grid grid-cols-3 lg:grid-cols-4 px-4 pt-4 pb-2 items-center text-sm font-light">
                  <div className="col-span-1 lg:col-span-2 pr-4">
                    <span>Producto</span>
                  </div>
                  <div className="col-span-1 px-4">
                    <span>Cantidad</span>
                  </div>
                  <div className="col-span-1 px-4">
                    <span>Precio</span>
                  </div>
                </section>
                <ul>
                  {
                    cart.map((item) => {
                      return (
                        <li className='grid grid-cols-3 lg:grid-cols-4 border-t px-4 text-sm font-light py-4' key={item.id}>
                          <div className='col-span-1 flex items-center justify-start gap-10'>
                            <img className='w-14 h-14 object-cover' src={item.images[0]} alt={item.name} />
                          </div>
                          <div className="col-span-1 lg:col-span-2 flex space-y-2 flex-col lg:-ml-20 lg:flex-row justify-between items-center lg:pr-[27%]">
                            <p className='truncate max-w-24 sm:max-w-full'>{item.name} - Talle {item.sizes[0]}</p>
                            <div className='rounded border flex gap-3 w-fit'>
                              <button onClick={() => handleClickDecrement(item)} className='font-bold cursor-pointer p-2'>-</button><span className='my-auto'>{item.stock}</span><button onClick={() => handleClickAdd(item)} className='font-bold cursor-pointer p-2'>+</button>
                            </div>
                          </div>
                          <div className="col-span-1 px-4 my-auto flex justify-between items-center gap-2">
                            <span>${(item.discount ? item.discountedPrice : item.price) * item.stock}.00</span>
                            <button onClick={() => handleRemoveItem(item)} className='ml-auto'><i className="bi bi-x-lg text-lg"></i></button>
                          </div>
                        </li>
                      )
                    })
                  }
                  <li className='flex border-t py-6'>
                    <button className='text-lg text-white py-3 px-8 mx-auto rounded bg-red-600 hover:opacity-70 transition-colors w-fit' onClick={handleEmptyCart}><i className='bi bi-trash3 text-xl'></i> Vaciar Carrito</button>
                  </li>
                </ul>
              </div>
              {/* <div className='bg-white shadow-md col-span-3 lg:col-span-2 flex flex-col gap-4 p-6 lg:order-3'>
                <p className='py-3 text-lg'>ELEGí ENVIAR A DOMICILIO O RETIRAR EN SUCURSAL</p>
                <div className='flex gap-3 w-full'>
                  <button onClick={() => { setShipping(true) }} className={`transition duration-300 rounded border w-full py-3 ${shipping ? 'border-blue-500 text-blue-500' : 'text-stone-500'}`}>ENVIAR</button>
                  <button onClick={() => { setShipping(false) }} className={`transition duration-300 rounded border w-full py-3 ${!shipping ? 'border-blue-500 text-blue-500' : 'text-stone-500'}`}>RETIRAR</button>
                </div>
                {shipping ? (<form action="" className='flex flex-col gap-2'>
                  <label htmlFor="" className=' text-xs'>Código postal</label>
                  <div className='flex gap-2'>
                    <input className='w-fit border rounded border-red-600 py-2' type="text" />
                    <button className='border rounded border-blue-500 p-2 text-blue-500'>Calcular</button>
                  </div>
                  <a className='text-xs text-blue-500' href="">No sé mi código postal</a>
                </form>) :
                  (<div className='flex flex-col gap-2 py-2 items-center'>
                    <button className='bg-blue-500 p-2 text-white rounded w-fit'>USAR MI UBICACIÓN</button>
                    <a className='text-blue-500 text-sm' href="">BUSCAR POR UNA DIRECCION</a>
                  </div>
                  )}
              </div> */}
              <div className='col-span-3 lg:order-2 lg:col-span-1 bg-white shadow-md h-fit rounded'>
                <div className='p-4 flex flex-col gap-4'>
                  <form className='space-y-4 relative' onSubmit={handleApplyDiscount}>
                    <label className='text-sm' htmlFor="">USAR CUPÓN DE DESCUENTO</label>
                    <div className='flex w-full gap-4'>
                      <input
                        className='w-full border rounded p-2 placeholder:text-sm'
                        placeholder='Código'
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <button className='text-sm border rounded border-blue-500 p-2 text-blue-500 hover:opacity-70' type="submit">Añadir</button>
                    </div>{discountApply !== null && (
                      discountApply ? (
                        <span className="text-green-500 text-xs font-light -bottom-4 absolute">Codigo de descuento aplicado</span>
                      ) : (
                        <span className="text-red-500 text-xs font-light -bottom-4 absolute">El código de descuento es incorrecto.</span>
                      )
                    )}
                  </form>
                  <div className='text-xs font-light flex flex-col gap-2 py-4 border-y border-gray-300'>
                    <div className='flex justify-between items-center'>
                      <span>Subtotal</span>
                      <span>${discountApply ? (finalPrice+discountAmount):(finalPrice)}.00</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Gastos del envío</span>
                      <span className={shippingCost === 0 ? "text-green-500 font-semibold" : ""}>{shippingCost === 0 ? "Gratis" : `$${shippingCost}.00`}</span>
                    </div>
                    {discountApply && (
                      <div className='flex justify-between items-center'>
                        <span>Descuento Aplicado 10%</span>
                        <span>-${discountAmount}.00</span>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-lg font-semibold'>Total</span>
                      <span className='text-blue-500 text-lg font-semibold'>${finalPrice + shippingCost}.00</span>
                    </div>
                    <div>
                      <Link to="/zapatillas">
                        <button className='rounded border w-full py-4 text-xs hover:underline'>Elegir más productos</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/checkout">
                        <button className='text-lg text-white py-3 rounded bg-red-600 w-full hover:opacity-70 transition-colors uppercase'>Iniciar Pago</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  )
}

