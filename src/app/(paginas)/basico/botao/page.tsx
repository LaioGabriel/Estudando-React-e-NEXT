"use client";
import Titulo from "@/components/template/Titulo";

export default function ExemploBotao() {
  function executar(texto: string) {
    alert(`A função foi executada com texto ${texto}!!!`);
  }

  return (
    <div>
      <Titulo
        principal="Usando Botão"
        secundario="Como utilizar botão com o React"
      />
      <div className="flex gap-3 py-7">
        <button className="botao azul" onClick={() => executar("BOM DIA")}>
          Bom dia
        </button>
        <button className="botao azul" onClick={() => executar("BOA TARDE")}>
          Boa tarde
        </button>
      </div>
    </div>
  );
}
