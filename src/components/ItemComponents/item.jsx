import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <Link to={`/item/${product.id}`} className='max-w-[300px] max-h-[450px] flex flex-col justify-between w-full hover:shadow-2xl duration-500 transition-all h-full p-4 bg-white relative rounded'>
            <div className='w-full h-full max-w-[270px] max-h-[270px] overflow-hidden rounded-md'>
                <img className='w-full object-cover h-full hover:scale-125 duration-500 transition-all cursor-pointer' src={product.images[0]} alt={product.name} />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <h3 className='text-sm font-light'>{product.model}</h3>
                <h2 className='text-lg cursor-pointer truncate hover:opacity-70'>{product.name}</h2>
                <div className='flex justify-between'>
                    <span className='font-bold'>${product.price}</span>
                    {product.discount && <p className='text-white p-2 text-xs absolute top-0 right-0 shadow-lg shadow-red-400 bg-red-600 rounded-tr'>EN OFERTA</p>}
                    {product.new && <p className='text-white p-2 text-xs absolute top-0 left-0 shadow-lg shadow-stone-400 bg-black rounded-tl'>NOVEDAD</p>}
                </div>
            </div>
        </Link>
    )
}

export default Item;