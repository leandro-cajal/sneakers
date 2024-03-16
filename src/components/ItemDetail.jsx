export const ItemDetail = ({item}) =>{

    return (
        <div className="max-w-7xl mx-auto">
            {item && ( // Verificar si item está definido
                <div className="flex gap-4">
                    <div className="w-24 flex flex-col gap-2">
                        {item.images && item.images.map((image, index) => ( // Verificar si item.images está definido
                            <div key={index}>
                                <img src={image} alt={item.name} />
                            </div>
                        ))}
                    </div>
                    <div className="max-w-4xl w-full">
                        {item.images && item.images.length > 0 && ( // Verificar si item.images está definido y tiene al menos un elemento
                            <img className="w-full object-cover" src={item.images[0]} alt={item.name} />
                        )}
                    </div>
                    <div className="flex flex-col w-full">
                        <h3>{item.name}</h3>
                        <span>Talles Disponibles</span>
                        <div className="flex gap-1">
                            {item.sizes && item.sizes.map((size, index) => ( // Verificar si item.size está definido
                                <div key={index} className="p-2 bg-black text-white">{size}</div>
                            ))}
                        </div>
                        <div className="mx-auto">
                            <h4>{item.model}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}