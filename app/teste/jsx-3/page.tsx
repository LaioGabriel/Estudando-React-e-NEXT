
const random = Math.random();


export default function ExemploJsx(){
     const alunos = [
          {nome: "Ana Silva" , idade: 20 , id: 1 , matricula: idMatricula(1)},
          {nome: "Beatriz Oliveira" , idade: 22 , id: 2 , matricula: idMatricula(2)},
          {nome: "Carlos Pereira" , idade: 21 , id: 3 , matricula: idMatricula(3)},
          {nome: "Daniel Santos" , idade: 23 , id: 4 , matricula: idMatricula(4)},
          {nome: "Eduardo Costa" , idade: 24 , id: 5 , matricula: idMatricula(5)},
          {nome: "Fernanda Lima" , idade: 25 , id: 6 , matricula: idMatricula(6)}
     ];
    function idMatricula(id: number){
            return id *random *100
    }
    return(
        <div className="flex flex-col gap-3.5 justify-center h-screen items-center">

            <div className="grid grid-cols-3  gap-5.5">
            <div id="card" className=" bg-gray-600  rounded-lg p-8 ">
                 <span className="flex items-center justify-center">
                    {alunos[0].nome} - {alunos[0].idade} anos - {alunos[0].matricula.toFixed(3)}
                    </span>
            </div>
            <div id="card" className=" bg-gray-600  rounded-lg p-8">
                 <span className="flex items-center justify-center">
                    {alunos[1].nome} - {alunos[1].idade} anos - Id {alunos[1].matricula.toFixed(3)}
                    </span>
            </div>
            <div id="card" className=" bg-gray-600  rounded-lg p-8">
                 <span className="flex items-center justify-center">
                    {alunos[2].nome} - {alunos[2].idade} anos - Id {alunos[2].matricula.toFixed(3)}
                    </span>
            </div>

            <div id="card" className=" bg-gray-600  rounded-lg p-8">
                 <span className="flex items-center justify-center">
                    {alunos[3].nome} - {alunos[3].idade} anos - Id {alunos[3].matricula.toFixed(3)}
                    </span>
            </div>
            <div id="card" className=" bg-gray-600  rounded-lg p-8">
                 <span className="flex items-center justify-center">
                    {alunos[4].nome} - {alunos[4].idade} anos - Id {alunos[4].matricula.toFixed(3)}
                    </span>
            </div>
            <div id="card" className=" bg-gray-600  rounded-lg p-8">
                 <span className="flex items-center justify-center">
                    {alunos[5].nome} - {alunos[5].idade} anos - Id {alunos[5].matricula.toFixed(3)}
                    </span>
            </div>

            </div>
           
        </div>


    )
}