import Reprovados from "@/components/exercicio/reprovados"

const listaDeReprovados = [

    {nome:'Kabrois', idade: 20},
    {nome:'JP', idade:21},
    {nome:'Special Delivey',idade:900},

]
export default function listaReprovados(){
    return(
        <div className="caixa">
                    <div className="exercicio">
                        <h1>Entendendo JSX</h1>
                        <div className="conteudo">
                            <div className="flex flex-col gap-3">
                            {listaDeReprovados.map((aluno)=>{
                                return(
                                  <Reprovados nome={aluno.nome} key={aluno.nome}/>
                                )

                            })}
                            </div>
        
                        </div>
                        
                    </div>
        
                </div>
    )
}