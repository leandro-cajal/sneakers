import CartWidget from "./CartWidget.jsx";

const Header = () => {
    return (
        <>
            <header className="w-full bg-white">
                <nav className="max-w-7xl flex items-center justify-between mx-auto flex-wrap">
                    <a href="./index.html">
                        <img className="w-80 h-20 object-cover" src="./src/assets/img/logo/logo_765x625.png" alt="Logo - Sneakers" />
                    </a>
                    <ul className="hidden lg:flex gap-5">
                        <li className="hover:text-red-600 hover:border-b-stone-800 border-transparent border-b-2 transition-colors duration-300 py-5"><a href="">ZAPATILLAS</a></li>
                        <li className="hover:text-red-600 hover:border-b-stone-800 border-transparent border-b-2 transition-colors duration-300 py-5"><a href="">MARCAS</a></li>
                        <li className="hover:text-red-600 hover:border-b-stone-800 border-transparent border-b-2 transition-colors duration-300 py-5"><a href="">NOVEDADES</a></li>
                        <li className="text-red-600 hover:border-b-stone-800 border-transparent border-b-2 transition-colors duration-300 py-5"><a href="">REBAJAS</a></li>
                    </ul>
                    <form id="input-search" className="border-b-2 p-2 flex " action="">
                        <input className="focus:outline-none focus:text-red-600" type="text"></input>
                        <i className="text-2xl text-gray-500 bi bi-search cursor-pointer hover:text-black"></i>
                    </form>
                    <div className="flex gap-2 items-center">
                        <span><i className="cursor-pointer text-2xl font-bolder bi bi-person"></i></span>
                        <CartWidget />
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header