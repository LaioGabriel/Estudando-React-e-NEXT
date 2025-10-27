import Link from "next/link";

export default function PrimeiroComponente(){
    return(
        <div className="flex flex-col h-screen items-center justify-center"  >

            <h1 className="text-3xl font-bold">
                Primeiro componente da aplicação
            </h1> 
        

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-34 py-4 rounded-lg mt-4">
            Salvar
        </button>

        <Link href="/">Ir para o componente principal</Link>
        
        
        </div>
    

    ) 
}