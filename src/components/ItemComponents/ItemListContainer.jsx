import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {

        const productsRef = collection(db, "products");

        // const q = category ?  query(productsRef,where("model","==","jordan")) : productsRef ;

        getDocs(productsRef)
            .then((resp) => {
                const prods = resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })


                if (category) {

                    category === "jordan" && setProducts(prods.filter((prod) => prod.model.toLowerCase().includes(category.toLowerCase())))

                    category === "new" && setProducts(prods.filter((prod) => prod.new))

                    category === "discount" && setProducts(prods.filter((prod) => prod.discount))
                }
                else {
                    setProducts(prods);
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