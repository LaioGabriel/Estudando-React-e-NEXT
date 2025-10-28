export default function Interativo(){
    const numero = 10;
    return(
        
         <div className="flex flex-col h-screen items-center justify-center"  >

            <h1 className="text-3xl font-bold">
                É par ou impar?
            </h1> 
        

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-34 py-4 rounded-lg mt-4">
            Número escolhido: {numero}
        </button>

        <div>{numero % 2 === 0 ? (<h1 className="text-green-700 bg-amber-50 p-4 rounded-lg mt-3.5">É par</h1>) 
        : 
        (<h1 className="text-red-600 bg-white p-4 rounded-lg mt-3.5">É ímpar</h1>)}</div>

       
        
        
        </div>

    )
}