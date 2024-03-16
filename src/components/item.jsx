const Item = ({product}) => {
    return (
        <article className='max-w-[300px] max-h-[450px] flex flex-col justify-between w-full h-full p-4 bg-white'>
            <div className='w-full h-full max-w-[270px] max-h-[270px] overflow-hidden rounded-md'>
                <img className='w-full object-cover h-full hover:scale-125 duration-300 transition-all cursor-pointer' src={product.images[0]} alt={product.name} />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <h2 className='text-sm font-light'>{product.model}</h2>
                <h2 className='text-lg cursor-pointer truncate hover:opacity-70'>{product.name}</h2>
                <div className='flex justify-between'>
                    <span className='font-bold'>${product.price}</span>
                    {product.discount && <p className='text-red-600 text-sm'>EN OFERTA</p>}
                </div>
                <button className='p-2 rounded-md border text-red-600 border-red-600 m-2 hover:bg-red-600 transition hover:text-white'>Ver Detalles</button>
            </div>
        </article>
    )
}

export default Item;