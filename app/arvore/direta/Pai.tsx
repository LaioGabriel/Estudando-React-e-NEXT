import Titulo from "@/components/template/Titulo";
import Filho from "./Filho";

export interface PaiProps {
  nome: string;
  sobrenome: string;
  filhos: string[];
}

export default function Pai(props: PaiProps) {
  return (
    <div className="flex flex-col gap-4">
      <Titulo
        titulo="Comunicacao Direta - Pai para Filho"
        subtitulo="Exemplo de passagem de props do Pai para o Filho"
      />
      <div className="flex flex-col gap-1 ">
        <h1 className="text-lg font-semibold">
          Pai : {props.nome} {props.sobrenome}
        </h1>
        <Titulo titulo="Filhos" />

        {props.filhos.map((filho, index) => (
          <Filho key={index} nome={filho} sobrenome={props.sobrenome} />
        ))}
      </div>
    </div>
  );
}
