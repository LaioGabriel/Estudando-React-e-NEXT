import Aprovado from "@/components/exercicio/aprovado"

export default function Jsx4(){

   
    const listaDeAprovados = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 35 },
  { nome: "Carla", idade: 19 },
  {nome: "Oruam", idade: 25},
  {nome: "Mauro", idade: 24},

];

    return(
        <div className="caixa">
            <div className="exercicio">
                <h1>Entendendo JSX</h1>
                <div className="conteudo">
                    <div className="flex flex-col gap-3">

                    {listaDeAprovados.map((aluno)=>{
                        return(
                            <Aprovado nome={aluno.nome} key={aluno.nome} />
                        )
                    })}
                    </div>

                </div>
                
            </div>

        </div>
    )
     

}