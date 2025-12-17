"use client";
import useChuckNoris from "@/data/hook/useChuckNoris";

export default function ChuckNorisJoke() {
  const { piada, obterPiada } = useChuckNoris();

  return (
    <div className="flex flex-col gap-4 items-start">
      <span className="text-2xl">{piada}</span>
      <button onClick={obterPiada} className="botao azul">
        Obter Piada
      </button>
    </div>
  );
}
