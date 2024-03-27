import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import CartWidget from './CartComponents/CartWidget.jsx';
import CartPreview from './CartComponents/CartPreview.jsx';
import { SearchBar } from './SearchBar.jsx';
import { GetItemsByName } from '../FetchData.js';

const Navbar = () => {
    const location = useLocation();
    const id = useParams().id
    const [inputValue, setInputValue] = useState('');
    const [words, setWords] = useState('');
    const [showCartPreview, setShowCartPreview] = useState(false);
    const [resultSearch , setResultSearch] = useState([])

    const toggleCartPreview = () => {
        setShowCartPreview(!showCartPreview);
    };

    const handleKeyDown = (event) => {
        if (event.key === ' ') {
            setWords(prevWords => prevWords + " ");
        } else if (event.key === 'Backspace') {
            setWords(prevWords => prevWords.slice(0, -1));
        } else {
            setWords(prevWords => prevWords + event.key);
        }
    };
    useEffect(() => {
        GetItemsByName(words.toLowerCase())
            .then((res)=>setResultSearch(res))
    }, [words,id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setWords(prevWords => prevWords + ' ' + inputValue.trim());
            setInputValue(''); // Limpiar el input después de enviar el formulario
        }
    };

    return (
        <>
            <header className='w-full fixed bg-white shadow-lg z-50'>
                <nav className='max-w-7xl flex items-center justify-between mx-auto flex-wrap py-4 md:py-0 p-4'>
                    <Link to='/' className='hover:opacity-80'>
                        <img className='w-32 h-6 lg:w-60 lg:h-20 object-cover drop-shadow-lg' src='../public/logo/logo.png' alt='Logo - Sneakers' />
                    </Link>
                    <ul className='hidden lg:flex gap-5 '>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas'>ZAPATILLAS</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/jordan' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/jordan'>JORDAN</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/new' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/new'>NOVEDADES</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/discount' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/discount'>REBAJAS</NavLink>
                        </li>
                    </ul>
                    <div className='flex gap-2 items-center sm:order-4'>
                        <span><i className='cursor-pointer text-2xl font-bolder bi bi-person hover:text-red-500 transition-colors'></i></span>
                        <CartWidget onClick={toggleCartPreview} />
                    </div>
                    <form id='input-search' className='border-b-2 p-2 flex sm:order-3 mx-auto lg:mx-0 relative' onSubmit={handleSubmit}>
                        <input
                            className='focus:outline-none focus:text-red-600'
                            type='text'
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            onKeyUp={handleKeyDown}
                        />
                        <i className='text-2xl text-gray-500 bi bi-search cursor-pointer hover:text-black'></i>
                        <div className='absolute -right-14 top-[65px] mx-auto w-96 overflow-y-auto max-h-96'>
                            <SearchBar resultSearch={resultSearch} />   
                        </div>
                        
                    </form>
                </nav>
                <div className={`relative`}>
                    <CartPreview showCartPreview={showCartPreview}/> {/* Aquí se muestra el CartPreview si showCartPreview es true */}
                </div>
            </header>
        </>
    );
};

export default Navbar;
