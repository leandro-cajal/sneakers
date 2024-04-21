import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        const productsRef = collection(db, "products");
        getDocs(productsRef)
            .then((resp) => {
                const prods = resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                });
                if (category) {
                    category === "jordan" && setProducts(prods.filter((prod) => prod.model.toLowerCase().includes(category.toLowerCase())));
                    category === "new" && setProducts(prods.filter((prod) => prod.new));
                    category === "discount" && setProducts(prods.filter((prod) => prod.discount));
                } else {
                    setProducts(prods);
                }
                setLoading(false); // Cambiar el estado de carga a falso una vez que se obtienen los datos
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Asegurarse de cambiar el estado de carga a falso en caso de error
            });
    }, [category]);

    // Función para generar tarjetas de carga ficticias con datos ficticios y una imagen borrosa
    const generateLoadingCards = () => {
        const loadingCards = [];
        for (let i = 0; i < 4; i++) {
            loadingCards.push(
                <div key={i} className="max-w-[300px] max-h-[450px] w-full p-4 bg-white rounded">
                    <div className='w-full h-full max-w-[270px] max-h-[270px] overflow-hidden rounded-md'>
                        <img className='w-full object-cover h-full blur-md' src="https://nikearprod.vtexassets.com/arquivos/ids/785911-1200-1200?width=1200&height=1200&aspect=true" alt="Placeholder" />
                    </div>
                    <div className='flex flex-col p-2 gap-2'>
                        <h3 className='text-sm font-light blur-sm'>SB Dunk</h3>
                        <h2 className='text-lg cursor-pointer truncate hover:opacity-70 blur-sm'>NIKE SB DUNK LOW</h2>
                        <div className=''>
                            <span className='font-bold text-lg blur-sm'>$100.00</span>
                        </div>
                    </div>
                </div>
            );
        }
        return (
                <div className='max-w-7xl mx-auto py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:justify-center justify-items-center px-4 xl:px-0'>
                    {loadingCards}
                </div>
        );
    };


    return (
        <div className='flex'>
            {/* Mostrar las tarjetas de carga mientras se cargan los datos */}
            {loading ? generateLoadingCards() : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
