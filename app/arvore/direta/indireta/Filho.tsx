'use client'
interface FilhoProps{
    opcoes: string[];
    escolhaDeOpcao: (opcao: string) => void;
}
export default function Filho(props: FilhoProps) {
    return(
    

    <div className=" flex gap-6">
        {props.opcoes.map((opcao)=>(
            <button key={opcao} className="p-4 bg-blue-600 rounded-md cursor-pointer my-6 " onClick={()=>props.escolhaDeOpcao?.(opcao)}>
                {opcao}
            </button>
        ))}
   </div>
)
}