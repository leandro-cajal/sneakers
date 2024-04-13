import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SearchBar = ({ resultSearch, setResultSearch, resetWords }) => {
    const { id } = useParams();

    const handleLinkClick = () => {
        resetWords();
    };

    useEffect(() => {
        if (resultSearch.length > 0 && id) {
            setResultSearch([]);
        }
    }, [id, resultSearch, setResultSearch]);

    return (
        <>
            <div className='bg-white flex flex-col'>
                {resultSearch.length > 0 && 
                    resultSearch.map(prod => 
                        <Link key={prod.id} to={`/item/${prod.id}`} onClick={handleLinkClick} className='p-2 flex items-center gap-4 justify-between border-b'>
                            <div className=' w-16 h-16'>
                                <img className='object-cover' src={prod.images[0]} alt={prod.name} />
                            </div>
                            <h3 className='truncate max-w-72 w-full'>{prod.name}</h3>
                        </Link>
                    )
                }
            </div>
        </>
    );
};
