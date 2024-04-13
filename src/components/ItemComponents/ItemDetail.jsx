import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetail = ({ item }) => {
    const [sizeSelected, setSizeSelected] = useState("");
    const [imageSelected, setImageSelected] = useState(0);
    const [itemStock, setItemStock] = useState(1);
    const { cart, setCart, setFinalPrice } = useContext(CartContext);

    const handleAddItem = () => {
        if (!sizeSelected) {
            toast.error("Por favor selecciona un talle para agregar el producto al carrito");
            return;
        }

        if (itemStock >= item.stock) {
            toast.error("¡Lo sentimos, ya no hay suficiente stock disponible!");
            return;
        }

        setItemStock((prevItemStock) => prevItemStock + 1);
        const addedItem = { ...item, stock: itemStock, sizes: [sizeSelected] };
        const existingItem = cart.find((prod) => prod.id === addedItem.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((prod) =>
                    prod.id === addedItem.id
                        ? { ...prod, stock: prod.stock + 1, sizes: [...prod.sizes, sizeSelected] }
                        : prod
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, addedItem]);
        }

        setFinalPrice((prevFinalPrice) => (item.discount ? prevFinalPrice + item.discountedPrice : prevFinalPrice + item.price));

        toast.success("¡Producto agregado al carrito correctamente!");
    };

    useEffect(() => {
        const itemInCart = cart.find((prod) => prod.id === item.id);
        if (itemInCart) {
            setItemStock(itemInCart.stock);
        } else {
            setItemStock(1);
        }
    }, [cart, item.id]);

    const handleImageClick = (index) => {
        setImageSelected(index);
    };



    return (
        <div className="max-w-7xl mx-auto">
            {item && (
                <div className="gap-4 flex flex-col lg:flex-row px-4 md:px-0">
                    <div className="lg:max-w-[160px] md:px-6 lg:px-0">
                        <div className="flex lg:flex-col gap-2">
                            {item.images &&
                                item.images.map((image, index) => (
                                    <div
                                        className={`lg:w-24 lg:h-20 border border-stone-300 ${index === imageSelected ? "brightness-75" : ""
                                            }`}
                                        key={index}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <img
                                            className={`w-full h-full object-cover hover:filter ${index === imageSelected ? "" : "hover:brightness-75"
                                                } cursor-pointer`}
                                            src={image}
                                            alt={item.name}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:max-w-[600px] w-full lg:max-h-[550px] h-full">
                            <div className="h-full w-full overflow-hidden md:px-6 lg:px-0">
                                {item.images && item.images.length > 0 && (
                                    <img
                                        className="w-full h-full object-cover border border-stone-300"
                                        src={item.images[imageSelected]}
                                        alt={item.name}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-xl font-semibold uppercase">{item.name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Talles Disponibles (US)</span>
                                    <span className="underline text-sm cursor-pointer hover:text-blue-600 xl:mr-[50%]">Guía de talles</span>
                                </div>

                                <div className="flex gap-2">
                                    {item.sizes &&
                                        item.sizes.map((size, index) => (
                                            <div
                                                key={index}
                                                className={`grid place-items-center h-14 w-14 transition-colors cursor-pointer ${size === sizeSelected
                                                    ? "bg-black text-white"
                                                    : "border-black border bg-stone-100 hover:bg-black hover:text-white "
                                                    }`}
                                                onClick={() => setSizeSelected(size)}
                                            >
                                                <span className="text-xs m-auto">{size}</span>
                                            </div>
                                        ))}
                                </div>
                                <div>
                                    <h4>{item.model}</h4>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 items-center w-fit">
                                    <span className="px-4 text-3xl ml-auto md:mx-auto font-bold w-fit">
                                        US${item.discount ? item.discountedPrice : item.price}.00
                                    </span>
                                    <button
                                        onClick={handleAddItem}
                                        className={`p-6 bg-black text-white hover:bg-red-600 border hover:shadow-lg hover:shadow-red-300 hover:border-red-600 border-black hover:text-white duration-300 transition-all uppercase ${itemStock === item.stock || sizeSelected === "" ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        <i className="bi bi-cart3 text-lg"></i> Añadir al Carro
                                    </button>
                                </div>
                                <div className="bg-stone-50 text-black p-6 text-xs grid grid-cols-2 w-fit lg:gap-x-28 gap-y-2 border border-stone-300 cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <i className="bi bi-check-lg text-lg"></i>
                                        <span>Distribuidor Oficial</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <i className="bi bi-clock text-lg"></i>
                                        <span>Entrega en 24/48h</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <i className="bi bi-truck text-lg"></i>
                                        <span>Envío Gratuito *</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <i className="bi bi-box-seam text-lg"></i>
                                        <span>Devolución Sencilla</span>
                                    </div>
                                </div>
                                <article className="pt-4 pb-8 border-y border-black text-xs">
                                    <h2 className="text-xs uppercase font-light text-black">Detalles</h2>
                                    <h1 className="pb-4">{item.name}</h1>
                                    <div className="flex items-center gap-1">
                                        <p className="text-black font-bold">Modelo:</p>
                                        <h1 className="text-stone-600">{item.model}.</h1>
                                    </div>
                                    <div className="flex items-top gap-1">
                                        <p className="text-black font-bold">Descripción:</p>
                                        <p className="text-stone-600">{item.description}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
