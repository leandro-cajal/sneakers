import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { cart, setCart, finalPrice, setFinalPrice } = useContext(CartContext);

  return (
    <>
      <div className='max-w-7xl mx-auto py-24'>
        <div className='grid lg:grid-cols-3 gap-6'>
          <div className='p-4 bg-white col-span-2'>
            {cart.length > 0 ? (
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
            ) :
              (
                <div className='p-4'>
                  <p className='text-center font-semibold text-lg'>No hay productos en el carrito, agrega tus zapatillas favoritas antes de que sea tarde!</p>
                </div>
              )}
            <ul>
              {cart.length > 0 && (
                cart.map((item) => {
                  return (
                    <li className='grid grid-cols-3 lg:grid-cols-4 border-t px-4 text-sm font-light py-4'>
                      <div className='col-span-1 flex items-center justify-start gap-10'>
                        <img className='w-14 h-14 object-cover' src={item.images[0]} alt={item.name} />
                      </div>
                      <div className="col-span-1 lg:col-span-2 flex space-y-2 flex-col lg:-ml-20 lg:flex-row justify-between my-auto lg:pr-[27%]">
                        <p className='truncate'>{item.name}</p>
                        <div className='rounded border flex gap-3 w-fit'>
                          <button className='font-bold cursor-pointer p-2'>-</button><span className='my-auto'>{item.stock}</span><button className='font-bold cursor-pointer p-2'>+</button>
                        </div>
                      </div>
                      <div className="col-span-1 px-4 my-auto flex justify-between items-center gap-2">
                        <span>${item.discount ? item.discountedPrice : item.price}.00</span>
                        <button className='ml-auto'><i class="bi bi-x-lg text-lg"></i></button>
                      </div>
                    </li>
                  )
                })
              )}
            </ul>
          </div>
          <div className='bg-white col-span-2 flex flex-col gap-4 p-6 lg:order-3'>
            <p className='py-3 text-lg'>ELEGí ENVIAR A DOMICILIOO RETIRAR EN SUCURSAL</p>
            <div className='flex gap-3 w-full'>
              <button className='rounded border w-full py-3 active:border-blue-500 active:text-blue-500 text-stone-500'>ENVIAR</button>
              <button className='rounded border w-full py-3 active:border-blue-500 active:text-blue-500 text-stone-500'>RETIRAR</button>
            </div>
            <form action="" className='flex flex-col'>
              <label htmlFor="" className=' text-xs'>Código postal</label>
              <div className='flex gap-2'>
                <input className='w-fit border rounded border-red-600 py-2' type="text" />
                <button className='border rounded border-blue-500 p-2 text-blue-500'>Calcular</button>
                
              </div>
              <a className='text-xs text-blue-500' href="">No sé mi código postal</a>
            </form>
            <div className='flex flex-col gap-2 items-center'>
              <button className='bg-blue-500 p-2 text-white rounded w-fit'>USAR MI UBICACIÓN</button>
              <a className='text-blue-500 text-sm' href="">BUSCAR POR UNA DIRECCION</a>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 lg:order-2 bg-white h-fit '>
            <div className='p-4 flex flex-col gap-4'>
              <form className='space-y-4' action="">
                <label className='text-sm ' htmlFor="">USAR CUPÓN DE DESCUENTO</label>
                <div className='flex w-full gap-4'>
                  <input className='w-full border rounded p-2 placeholder:text-sm' placeholder='Código' type="text" />
                  <button className='text-sm border rounded border-blue-500 p-2 text-blue-500 hover:opacity-70'>Añadir</button>
                </div>
              </form>
              <div className='text-xs font-light flex flex-col gap-2 py-4 border-y border-gray-300'>
                <div className='flex justify-between items-center'>
                  <span>Subtotal</span>
                  <span>{finalPrice}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span>Gastos del envío</span>
                  <span>Gratis</span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-lg font-semibold'>Total</span>
                  <span className='text-blue-500 text-lg font-semibold'>${finalPrice}.00</span>
                </div>
                <div>
                  <button className='rounded border w-full py-4 text-xs hover:underline'>Elegir más productos</button>
                </div>
                <div>
                  <button className='text-lg text-white py-3 rounded bg-red-600 w-full hover:opacity-70'>Finalizar Compra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
