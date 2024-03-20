import { useEffect, useState } from "react"



export const ItemDetail = ({ item }) => {

    const [sizeSelected, setSizeSelected] = useState("");
    const [imageSelected, setImageSelected] = useState(0);

    const handleImageClick = (index) => {
        setImageSelected(index);
    };

    return (
        <div className="max-w-7xl mx-auto">
            {item && (
                <div className="gap-4 flex flex-col lg:flex-row px-4 md:px-0">
                    <div className=" lg:max-w-[160px]">
                        <div className="flex lg:flex-col gap-2">
                        {item.images && item.images.map((image, index) => (
                                <div className={`lg:w-24 lg:h-20 border border-stone-300 ${index === imageSelected ? 'brightness-75' : ''}`} key={index} onClick={() => handleImageClick(index)}>
                                    <img className={`w-full h-full object-cover hover:filter ${index === imageSelected ? '' : 'hover:brightness-75'} cursor-pointer`} src={image} alt={item.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="max-w-[896px] w-full">
                            <div className="h-full w-full">
                                {item.images && item.images.length > 0 && (<img className="max-w-[680px] max-h-[550px] w-full h-full object-cover border border-stone-300" src={item.images[imageSelected]} alt={item.name}/>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-xl uppercase">{item.name}</h3>
                                <span className="text-sm">Talles Disponibles</span>
                                <div className="flex gap-2">
                                    {item.sizes && item.sizes.map((size, index) => (
                                        <div key={index} className={`grid place-items-center h-14 w-14 transition-colors cursor-pointer ${size === sizeSelected ? "bg-black text-white" : "border-black border bg-stone-100 hover:bg-black hover:text-white "}`}onClick={() => setSizeSelected(size)}>
                                            <span className="text-xs m-auto">{size}</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4>{item.model}</h4>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 items-center w-fit">
                                    <span className="px-4 text-3xl ml-auto md:mx-auto font-bold w-fit">US${item.price}.00</span>
                                    <button className=" p-6 bg-black text-white hover:bg-stone-100 border border-black hover:text-black duration-300 transition-colors uppercase">
                                        <i className="bi bi-cart3 text-lg"></i> Añadir al Carro
                                    </button>
                                </div>
                                <div className="bg-stone-50 text-black p-6 text-xs grid grid-cols-2 w-fit gap-x-28 gap-y-2 border border-stone-300 cursor-pointer">
                                    <div className="flex gap-2 items-center"><i className="bi bi-check-lg text-lg"></i><span>Distribuidor Oficial</span></div>
                                    <div className="flex gap-2 items-center"><i className="bi bi-clock text-lg"></i><span>Entrega en 24/48h</span></div>
                                    <div className="flex gap-2 items-center"><i className="bi bi-truck text-lg"></i><span>Envío Gratuito *</span></div>
                                    <div className="flex gap-2 items-center"><i className="bi bi-box-seam text-lg"></i><span>Devolución Sencilla</span></div>
                                </div>
                                <article className="pt-4 pb-8 border-y border-black text-xs">
                                    <h2 className="text-xs uppercase font-light text-black">Detalles</h2>
                                    <h1 className="pb-4">{item.name}</h1>
                                    <div className="flex items-center gap-1"><p className="text-black font-bold">Modelo:</p><h1 className="text-stone-600">{item.model}.</h1></div>
                                    <div className="flex items-top gap-1"><p className="text-black font-bold">Descripción:</p><p className="text-stone-600">{item.description}</p></div>
                                </article>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}