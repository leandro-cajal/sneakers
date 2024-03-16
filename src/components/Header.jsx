import CartWidget from "./CartWidget.jsx";

const Header = () => {
    return (
        <>
            <header className="w-full bg-white">
                <nav className="max-w-7xl flex items-center justify-between mx-auto flex-wrap p-4">
                    <a className="hover:opacity-80" href="./index.html">
                        <img className="w-32 h-6 lg:w-60 lg:h-20 object-cover drop-shadow-lg" src="./logo/logo_765x625.png" alt="Logo - Sneakers" />
                    </a>
                    <ul className="hidden lg:flex gap-5 ">
                        <li className="hover:text-red-600 hover:border-b-red-600 border-transparent border-b-2 transition-colors duration-200 py-5"><a href="">ZAPATILLAS</a></li>
                        <li className="hover:text-red-600 hover:border-b-red-600 border-transparent border-b-2 transition-colors duration-200 py-5"><a href="">MARCAS</a></li>
                        <li className="hover:text-red-600 hover:border-b-red-600 border-transparent border-b-2 transition-colors duration-200 py-5"><a href="">NOVEDADES</a></li>
                        <li className="text-red-600 hover:border-b-red-600 border-transparent border-b-2 transition-colors duration-3200 py-5"><a href="">REBAJAS</a></li>
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

export default Header