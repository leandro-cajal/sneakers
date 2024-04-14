import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
  const { cart, setCart, finalPrice, setFinalPrice, shippingCost, setShippingCost, discountCode, setDiscountCode, discountApply, setDiscountApply, discountAmount, setDiscountAmount } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    if (formData.fullName && formData.email && formData.address && formData.phone) {
      event.preventDefault();
      const newOrder = {
        products: cart,
        clientData: formData,
        paymentOption: selectedOption,
        total: finalPrice,
        shippingCost: shippingCost
      };

      try {
        const ordersRef = collection(db, "orders");
        const doc = await addDoc(ordersRef, newOrder);
        setOrderId(doc.id);
        setCart([]);
        setFinalPrice(0);
        setFormData({
          fullName: "",
          email: "",
          address: "",
          phone: ""
        });
        setSelectedOption("");
      } catch (error) {
        console.error("Error al enviar la orden:", error);
      }
    }else{
      toast.error("Debe completar los campos del formulario para finalizar la compra", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  };

  useEffect(() => {
    if (orderId) {
      toast.success(`Compra finalizada con éxito. Tu número de pedido es: ${orderId}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [orderId]);

  const handleApplyDiscount = (event) => {
    const validDiscountCode = 'leo10';
    event.preventDefault();
    discountCode === validDiscountCode ? setDiscountApply(true) : setDiscountApply(false)
  };

  useEffect(() => {
    finalPrice > 120 ? setShippingCost(0) : setShippingCost(10);
  }, [finalPrice, cart])

  useEffect(() => {
    setDiscountAmount(finalPrice * (10 / 100));
    discountApply ? setFinalPrice(prevFinalPrice => prevFinalPrice - discountAmount) : "";
  }, [discountApply]);

  return (
    <>
      <div className='max-w-7xl mx-auto py-32'>
        {cart.length < 1 ? (
          <div className='p-6 mx-4 xl:mx-0 bg-white flex flex-col rounded gap-8'>
            <p className='text-center font-semibold text-lg'>No hay productos en el carrito, agrega tus zapatillas favoritas antes de que sea tarde!</p>
            <span className='text-center text-sm'>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</span>
            <Link className='mx-auto text-lg text-white py-3 px-10 rounded bg-red-600 hover:opacity-70 transition-colors w-fit' to="/zapatillas">Elegir Productos</Link>
          </div>
        ) : (
          <div className='grid grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-6 w-full'>
            <div className='col-span-3 md:col-span-3 lg:row-span-1 lg:px-0 px-4 w-full bg-gray-50 overflow-hidden shadow-md'>
            </div>
            <div className='p-4 bg-white shadow-md col-span-3 lg:col-span-2 rounded h-fit'>
              <section className="px-4 pt-4 pb-2 items-center text-sm font-light">
                <div className="col-span-3 lg:col-span-2 pr-4">
                  <div className='flex gap-4 items-center'>
                    <div className='bg-blue-500 h-8 w-8 flex rounded-full'>
                      <span className='m-auto text-white text-xl'>1</span>
                    </div>
                    <h4 className='text-lg font-semibold'>Completa con tus datos</h4>
                  </div>
                  <form onSubmit={handleSubmit} className='flex flex-col w-full gap-2 items-start p-4'>
                    <input className='p-3 rounded-full border-2 focus:outline-none w-full'
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nombre completo"
                      required
                    />
                    <input className='p-3 rounded-full border-2 focus:outline-none w-full'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Correo electrónico"
                      required
                    />
                    <input className='p-3 rounded-full border-2 focus:outline-none w-full'
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Número de teléfono"
                      required
                    />
                    <textarea className='p-3 rounded-full border-2 focus:outline-none w-full resize-none'
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Dirección"
                      required
                    ></textarea>
                  </form>
                </div>
              </section>
              <ul>
              </ul>
            </div>
            <div className='p-4 bg-white shadow-md lg:order-3 col-span-3 lg:col-span-2 rounded h-fit'>
              <div className='p-3'>
                <div className='flex gap-4 items-center'>
                  <div className='bg-blue-500 h-8 w-8 flex rounded-full'>
                    <span className='m-auto text-white text-xl'>2</span>
                  </div>
                  <h4 className='text-lg font-semibold'>Elige Forma de pago</h4>
                </div>
                <form onSubmit={handleSubmit} className='py-6 text-gray-500 text-sm flex flex-col gap-2'>
                  <div>
                    <label className='flex gap-4'>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={selectedOption === 'cash'}
                        onChange={handleOptionChange}
                      />
                      Pago en efectivo
                    </label>
                  </div>
                  <div>
                    <label className='flex gap-4'>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={selectedOption === 'card'}
                        onChange={handleOptionChange}
                      />
                      Pago con tarjeta
                    </label>
                  </div>
                  <div>
                    <label className='flex gap-4'>
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        checked={selectedOption === 'transfer'}
                        onChange={handleOptionChange}
                      />
                      Pago con transferencia
                    </label>
                  </div>
                </form>
              </div>
            </div>
            {/* Formulario de cupon y boton finalizar compra */}
            <div className='col-span-3 lg:order-2 lg:col-span-1 lg:row-span-3 bg-white shadow-md rounded h-fit relative'>
              <div className='p-4 flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                  <p className='text-xl font-semibold'>Resumen de la compra</p>
                  <ul>
                    {cart.length > 0 && cart.map((prod) => (
                      <li className={`py-4 flex gap-4 text-sm text-gray-400 ${cart.length > 1 && 'border-b'}`} key={prod.id}>
                        <div className='relative'>
                          <div className='absolute top-0 w-5 h-5 flex justify-between items-center rounded-full bg-red-600'>
                            <span className=' text-white m-auto'>{prod.stock}</span>
                          </div>
                          <Link to={`/item/${prod.id}`}>
                            <img className='h-14 w-14 object-cover rounded' src={prod.images[0]} alt={prod.title} />
                          </Link>
                        </div>
                        <div>
                          <p className='font-light'>{prod.name} - Talle {prod.sizes[0]}</p>
                          <span className='font-semibold'>$ {prod.discount ? prod.discountedPrice : prod.price}.00</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link className='absolute top-2 right-2 text-xs text-blue-500' to='/cart'>Volver al carrito</Link>
                </div>
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
                    <span>${discountApply ? (finalPrice + discountAmount) : (finalPrice)}.00</span>
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
                    <button className='text-lg text-white py-3 rounded bg-red-600 w-full hover:opacity-70 transition-colors uppercase' onClick={handleSubmit}>Finalizar Compra</button>
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