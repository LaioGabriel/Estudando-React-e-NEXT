export interface FilhoProps {
  nome: string;
  sobrenome: string;
}

export default function Filho(props: FilhoProps) {
  return (
    <div>
      <h1>
        Filho : {props.nome} {props.sobrenome}
      </h1>
    </div>
  );
}
