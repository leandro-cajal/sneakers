import Item from "./item";

const ItemList = ({products}) =>{
    return(
        <div className='w-full'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:justify-center justify-items-center'>
                        {products.length > 0 &&
                            products.map((product) => {
                                return (
                                    <Item key={product.id} product={product}/>
                                );
                            })}
                    </div>
                </div>
            </div>
    )
}

export default ItemList;