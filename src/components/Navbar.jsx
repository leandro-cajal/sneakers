import { NavLink, Link, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <header className="w-full fixed bg-white shadow-lg z-50">
                <nav className="max-w-7xl flex items-center justify-between mx-auto flex-wrap py-4 md:py-0 p-4">
                    <Link to="/" className="hover:opacity-80">
                        <img className="w-32 h-6 lg:w-60 lg:h-20 object-cover drop-shadow-lg" src="../public/logo/logo.png" alt="Logo - Sneakers" />
                    </Link>
                    <ul className="hidden lg:flex gap-5 ">
                        <li>
                            {/* Agregamos una clase activa si la ruta actual coincide */}
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas' ? 'text-red-600 border-red-600' : ''}`} to="/zapatillas">ZAPATILLAS</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/jordan' ? 'text-red-600 border-red-600' : ''}`} to="/zapatillas/jordan">JORDAN</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/new' ? 'text-red-600 border-red-600' : ''}`} to="/zapatillas/new">NOVEDADES</NavLink>
                        </li>
                        <li>
                            <NavLink className={`hover:text-red-600 border-transparent border-b-2 transition-colors duration-200 py-5 ${location.pathname === '/zapatillas/discount' ? 'text-red-600 border-red-600' : ''}`} to="/zapatillas/discount">REBAJAS</NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-2 items-center sm:order-4">
                        <span><i className="cursor-pointer text-2xl font-bolder bi bi-person hover:text-red-500 transition-colors"></i></span>
                        <CartWidget />
                    </div>
                    <form id="input-search" className="border-b-2 p-2 flex sm:order-3 just mx-auto lg:mx-0" action="">
                        <input className="focus:outline-none focus:text-red-600" type="text"></input>
                        <i className="text-2xl text-gray-500 bi bi-search cursor-pointer hover:text-black"></i>
                    </form>        
                </nav>
            </header>
        </>
    );
}

export default Navbar