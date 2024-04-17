import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="bg-black w-full text-white">
                <div className="max-w-7xl mx-auto">
                    <section className="flex flex-col wrap space-y-10 px-6 lg:items-start lg:flex-row pt-10 pb-20 lg:gap-10 lg:justify-between">
                        <div className="w-40 h-24">
                            <img className="w-full h-full object-cover filter brightness-50 grayscale invert" src="/logo/logo.png" alt="Sneakers Logo" />
                        </div>
                        <div className="text-sm space-y-2">
                            <p className=" font-extrabold cursor-pointer">AYUDA</p>
                            <ul className="text-stone-500 space-y-2 text-xs ">
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Envios y entregas</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Devoluciones</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Cambios</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Opciones de pago</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Contactate</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Defensa al consumidor</Link>
                                </li>
                                <li className="text-white font-bold cursor-pointer underline">
                                    <Link>Botón de arrepentimiento</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm space-y-2">
                            <p className="font-extrabold cursor-pointer">ACERCA DE SNEAKERS</p>
                            <ul className="text-xs text-stone-500 space-y-2">
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Noticias</Link>
                                </li>
                                <li className="hover:text-stone-300 cursor-pointer">
                                    <Link>Sobre Nosotros</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm space-y-2">
                            <p className="font-extrabold cursor-pointer">NOVEDADES SNEAKERS</p>
                            <ul className="text-xs text-stone-500 space-y-2">
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">Inversionistas</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">Sustentabilidad</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">NOVEDADES SNEAKERS</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">Encontrá tu calzado</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">¿Como elegir tu talle?</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">Tips saludables</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">Promociones</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-stone-300 cursor-pointer">¿Cómo sigo mi pedido?</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex lg:flex-col justify-end items-center lg:items-start gap-2">
                            <div className=" h-10 w-28 cursor-pointer"><img className=" w-full h-full" src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.77/logos/Renaper-logo___2cfbcdca6b0b070808af1c579ff76dd9.png" alt="Renaper Link" /></div>
                            <div className=" h-20 w-16 cursor-pointer lg:h-12 lg:w-8"><img className=" w-full h-full" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/3b08c03e-be05-49c1-9579-193190c40b2e___d5b5ce1ab2c443765cd3beb7183e1cae.jpg" alt="Data Fiscal Link" /></div>
                        </div>
                        <div className="flex space-x-6 text-3xl text-stone-500 mx-auto">
                            <Link href=""><i className="bi bi-facebook hover:text-white transition-colors duration-300"></i></Link>
                            <Link href=""><i className="bi bi-instagram hover:text-white transition-colors duration-300"></i></Link>
                            <Link href=""><i className="bi bi-whatsapp hover:text-white transition-colors duration-300"></i></Link>
                        </div>
                    </section>
                </div>
                <div className=" w-full border-t border-stone-800">
                    <div className=" max-w-7xl flex flex-col md:flex-row space-y-6 md:justify-between md:space-y-0 items-center mx-auto py-4 text-xs text-stone-400">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex items-center gap-2 text-stone-100">
                                <i className="bi bi-geo-alt-fill"></i>
                                <small className="cursor-pointer ">Argentina</small>
                            </div>
                            <div>
                                <small>© 2024 Sneakers S.R.L. Todos los derechos reservados.</small>
                            </div>
                        </div>
                        <div>
                            <small>Developed by <Link className="text-white hover:text-cyan-300 transition-colors duration-300 font-bold" to="https://github.com/leandro-cajal">Leo</Link></small>
                        </div>
                        <div className="space-x-2 ">
                            <Link className="text-[10px] hover:text-white transition-colors duration-500" href="">Términos y condiciones</Link>
                            <Link className="text-[10px] hover:text-white transition-colors duration-500" href="">Politicas de privacidad y cookies</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer