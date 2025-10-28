     export default function ExemploJsx(){
       
    const alunos = [
          {nome: "Ana Silva" , idade: 20 , id: 1 },
          {nome: "Beatriz Oliveira" , idade: 22 , id: 2 },
          {nome: "Carlos Pereira" , idade: 21 , id: 3 },
          {nome: "Daniel Santos" , idade: 23 , id: 4 },
          {nome: "Eduardo Costa" , idade: 24 , id: 5 },
          {nome: "Fernanda Lima" , idade: 25 , id: 6 },
          {nome: "Laio Gabriel" , idade: 26 , id: 7 }
     ];
   
     const spans = alunos.map((aluno) =>{
        return (
            <div id="card" key={aluno.id} className=" bg-gray-600  rounded-lg p-8 ">
                 <span key={aluno.id} className="flex items-center justify-center">
                    {aluno.nome} - {aluno.idade} anos
                    </span>
            </div>
        )
     });

    return(
        <div className="flex flex-col gap-3.5 justify-center h-screen items-center">

            <div className="grid grid-cols-3  gap-5.5">
                {spans}
            </div>

        </div>
    )
    
}
//Ainda não estudei a parte de mudança dinâmica de estado em React, então esse exemplo é estático.
//Mas pra um iniciante ate q tá bom.

