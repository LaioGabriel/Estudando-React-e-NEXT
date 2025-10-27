let randomNumber = Math.random() ;
export default function ExemploJsx(){
    
    return(
        <div className="flex flex-col gap-3.5 justify-center h-screen items-center">
            <div id="card" className=" bg-gray-600 p-12 rounded-lg">
                 <h1>Exemplo de JSX</h1>

            <div>
                <span>teste {7*2} </span>
                    <span>{randomNumber}</span>
            </div>

            </div>

           
        </div>


    )
}