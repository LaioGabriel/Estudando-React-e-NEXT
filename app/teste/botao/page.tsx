"use client"
import Titulo from "@/components/template/Titulo";

export default function exemploBotao(){

    const funcaoBotao = () => {
        alert(`Botão clicado! `);
    }
    return(
       <div>
        <Titulo titulo="Exemplo de Botão"/>
         <button onClick={funcaoBotao} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
            Executar
        </button>
       </div>
    )
}