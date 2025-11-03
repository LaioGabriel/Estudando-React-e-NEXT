
interface AprovadoProps {
     nome: string,
     idade?: number,
}

export default function Aprovado( props: AprovadoProps) {
 
  return (
    <div  className=" bg-black p-2 rounded-lg flex justify-between">
      <span className="">{props.nome}</span>

      <div className="flex gap-2">
        <button className="bg-blue-500 p-2 rounded-md text-sm">Editar</button>
        <button className="bg-red-600 p-2 rounded-md text-sm">Excluir</button>
      </div>
    </div>
  );
}
