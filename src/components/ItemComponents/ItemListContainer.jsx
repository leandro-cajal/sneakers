import React, { useState, useEffect } from 'react';
import { FetchData } from '../../FetchData';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        FetchData()
            .then((resp) => {

                if (category) {

                    if (category === "jordan"){

                        setProducts(resp.filter((prod) => prod.model.toLowerCase().includes(category.toLowerCase())))

                    }else if (category === "new"){
                        setProducts(resp.filter((prod) => prod.new))
                    }else if (category === "discount"){
                        setProducts(resp.filter((prod) => prod.discount))
                    }
                    
                }
                else{
                    setProducts(resp);
                }
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                
            });
    }, [category]); 

    return (
        <>
            <div className='flex'>
                <ItemList products={products} />
            </div>
        </>
    );
}

export default ItemListContainer;