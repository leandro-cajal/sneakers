const Greetings = ({message})=>{
    return(
        <>
            <div className="max-w-7xl mx-auto py-6">
                <h1 className="text-lg text-red-600 font-semibold">{message}</h1>
            </div>
        </>
    )
}

export default Greetings