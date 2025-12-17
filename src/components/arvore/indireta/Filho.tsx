"use client";
export interface FilhoProps {
  opcoes: string[];
  opcaoSelecionada: (opcao: string) => void;
}

export default function Filho(props: FilhoProps) {
  return (
    <div className="flex gap-3">
      {props.opcoes.map((opcao) => {
        return (
          <button
            key={opcao}
            className="botao azul"
            onClick={() => props.opcaoSelecionada?.(opcao)}
          >
            {opcao}
          </button>
        );
      })}
    </div>
  );
}
