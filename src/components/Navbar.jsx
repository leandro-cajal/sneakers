import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import CartWidget from './CartComponents/CartWidget.jsx';
import CartPreview from './CartComponents/CartPreview.jsx';
import { SearchBar } from './SearchBar.jsx';
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const Navbar = () => {
    const location = useLocation();
    const id = useParams().id;
    const [inputValue, setInputValue] = useState(' ');
    const [showCartPreview, setShowCartPreview] = useState(false);
    const [resultSearch, setResultSearch] = useState([]);
    const [showMenu, setShowmenu] = useState(true);

    const toggleCartPreview = () => {
        setShowCartPreview(!showCartPreview);
    };

    const handleClickMenu = () =>{
        setShowmenu(!showMenu);
    }

    useEffect(() => {
        const fetchItems = async () => {
            if (inputValue.trim() !== '') {
                const q = query(
                    collection(db, 'products')
                );
                try {
                    const querySnapshot = await getDocs(q);
                    const items = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    setResultSearch(items.filter(prod => prod.name.toLowerCase().includes(inputValue.toLowerCase())));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                setResultSearch([]); // Establecer resultSearch como un array vacío cuando inputValue está vacío
            }

        };
        fetchItems();
    }, [inputValue]);

    useEffect(() =>{
        setResultSearch([]);
    },[id])


    return (
        <>
            <header className='w-full fixed bg-white shadow-lg z-50'>
                <nav className='max-w-7xl flex items-center justify-between mx-auto flex-wrap py-4 md:py-0 p-4'>
                    <div className='flex items-center gap-2'>
                        <i onClick={handleClickMenu} className="bi bi-list text-xl text-red-600 lg:hidden"></i>
                        <NavLink to='/' className='hover:opacity-80'>
                            <img className='w-32 h-6 lg:w-60 lg:h-20 object-cover drop-shadow-lg' src='/logo/logo.png' alt='Logo - Sneakers' />
                        </NavLink>
                    </div>
                    <ul className={` flex flex-col font-semibold absolute w-full bg-white h-screen top-0 left-0 max-w-sm z-50 p-4 items gap-6 lg:static lg:bg-transparent lg:h-auto lg:flex-row lg:gap-5 lg:translate-x-0 transition-transform ${showMenu ? "-translate-x-full" : ""}`}>
                        <li>
                            <div className='flex justify-between items-center lg:hidden'>
                                <img className=' w-36 h-12  object-cover drop-shadow-lg ' src='/logo/logo.png' alt='Logo - Sneakers' />
                                <i onClick={handleClickMenu} className="bi bi-x-lg text-2xl"></i>
                            </div>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-1 lg:border-b-4 lg:py-5 ${location.pathname === '/zapatillas' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas'>ZAPATILLAS</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-1 lg:border-b-4 lg:py-5 ${location.pathname === '/zapatillas/jordan' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/jordan'>JORDAN</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-1 lg:border-b-4 lg:py-5 ${location.pathname === '/zapatillas/new' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/new'>NOVEDADES</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-1 lg:border-b-4 lg:py-5 ${location.pathname === '/zapatillas/discount' ? 'text-red-600 border-y-red-600' : ''}`} to='/zapatillas/discount'>REBAJAS</NavLink>
                        </li>
                        <li className='flex h-full pb-20 lg:hidden'>
                            <div className="flex space-x-6 text-3xl text-stone-500 mx-auto mt-auto">
                                <Link href=""><i className="bi bi-facebook text-red-600"></i></Link>
                                <Link href=""><i className="bi bi-instagram text-red-600"></i></Link>
                                <Link href=""><i className="bi bi-whatsapp text-red-600"></i></Link>
                            </div>
                        </li>
                    </ul>
                    <div className='flex gap-2 items-center sm:order-4'>
                        <span><i className='cursor-pointer text-2xl font-bolder bi bi-person hover:text-red-500 transition-colors'></i></span>
                        <CartWidget onClick={toggleCartPreview} />
                    </div>
                    <form id='input-search' className='border-b-2 p-2 flex sm:order-3 mx-auto lg:mx-0 relative'>
                        <input
                            className='focus:outline-none focus:text-red-600'
                            type='text'
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            spellCheck={false}
                        />
                        <i className='md:text-2xl text-gray-500 bi bi-search cursor-pointer hover:text-black'></i>
                        <div className='absolute -right-16 top-[65px] md:top-[48px] lg:-right-14 lg:top-[65px] mx-auto w-96 overflow-y-auto max-h-96'>
                            <SearchBar resultSearch={resultSearch} setResultSearch={setResultSearch} />
                        </div>
                    </form>
                </nav>
                <div className={`relative shadow-2xl`}>
                    <CartPreview showCartPreview={showCartPreview} />
                </div>
            </header>
        </>
    );
};

export default Navbar;
