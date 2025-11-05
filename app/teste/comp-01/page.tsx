export default function Jsx4(){

    const  listaDeAprovados = [
        "Rebeca",
        "Guilherme",
        "Maria",
        "Pedro",
        "Tiago",
        "João"
    ]

    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="exercicio">
                <h1>Criando Componentes</h1>
                <div className="conteudo">
                    <div className="flex flex-col gap-3">

                    {listaDeAprovados.map(nome=>{
                        return(
                            <div key={nome} className=" bg-black p-2 rounded-lg flex justify-between">
                                <span className="">{nome}</span>

                                    <div className="flex gap-2"> 
                                <button className="bg-blue-500 p-2 rounded-md text-sm">Editar</button>
                                <button className="bg-red-600 p-2 rounded-md text-sm ho">Excluir
                                </button>
                                    </div>    

                            </div>
                        )
                    })}
                    </div>

                </div>
                
            </div>

        </div>
    )
     

}