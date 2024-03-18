import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className='pt-32 pb-20 space-y-16'>
        <div className='mx-auto max-w-7xl space-y-14 pb-4'>
            <div className='flex-col items-center'>
                <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9740da8c-2d64-4882-a372-5087e27b4e38___748441f706e566e86c779225abc3e0de.webp" alt="" />
            </div>
            <div className="flex flex-col items-center gap-4">
                <p className=" text-[50px] font-black">RUN YOUR RUN</p>
                <Link className="bg-black rounded-full text-white px-6 py-3 font-bold text-sm hover:bg-red-600 transition-all duration-300" to={`/item/4`}>Comprar</Link>
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

export default Index;