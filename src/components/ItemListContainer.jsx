import { useState, useEffect } from 'react';
import { FetchData } from '../FetchData';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        FetchData()
            .then((resp) => {
                setProducts(resp)

            })
    }, [])

    return (
        <>
            <ItemList products={products}/>
        </>
    )

}

export default ItemListContainer;