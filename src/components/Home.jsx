import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className='pt-32 pb-20 space-y-16'>
            <div className='mx-auto max-w-7xl space-y-14 pb-4'>
                <div className='flex-col items-center'>
                    <img className="w-full" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9740da8c-2d64-4882-a372-5087e27b4e38___748441f706e566e86c779225abc3e0de.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-3xl md:text-[50px] font-black">RUN YOUR RUN</p>
                    <Link className="bg-black rounded-full text-white px-6 py-3 font-bold text-sm hover:bg-red-600 transition-all duration-300" to={`/zapatillas/new`}>Comprar</Link>
                </div>
            </div>
            <div className="mx-auto max-w-7xl space-y-14 pb-4">
                <Link to="/item/VG0O1nBpUDAnXxg7t3T3">
                    <div className="w-full">
                        <img className="min-[772px]:hidden" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/bb72b853-a7e6-4557-95c7-bc806c72ffd6___560736a853f87bfba6f7d1976c0293ca.jpg" alt="Foto de zapatillas Nike Air Force 1" />
                        <img className="hidden min-[772px]:block w-full" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/5473f0cd-16d7-464c-94ca-fa3de5b0967d___d960ce177baf1c68c1c8e74f7a259a3b.jpg" alt="Foto de zapatillas Nike Air Force 1" />
                    </div>
                </Link>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-3xl md:text-[50px] font-black">AIR FORCE</p>
                    <Link className="bg-black rounded-full text-white px-6 py-3 font-bold text-sm hover:bg-red-600 transition-all duration-300" to={`/item/VG0O1nBpUDAnXxg7t3T3`}>Comprar</Link>
                </div>
            </div>
            <div className="mx-auto max-w-7xl space-y-14 pb-4'">
                <Link to={`/zapatillas/discount`}>
                    <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/cf7fbc27-660d-4408-bda4-fb8af552b5d3___d4faa509e8f88b7bda6bc358a63b5d50.png" alt="" />
                </Link>
            </div>
        </section>
    )
}

export default Home;