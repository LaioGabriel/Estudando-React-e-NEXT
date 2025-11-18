"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { use, useState } from "react";

export interface ContadorProps {
  valorInicial?: number;
}

export default function Contador(props: ContadorProps) {
  const [numero , setNumero] = useState(props.valorInicial ?? 0);
  
  const incrementar = () => {
    setNumero(numero + 1);
  };

  const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Contador</h1>
      <div className="flex gap-3">
        <button onClick={incrementar} className="cursor-pointer">
          <IconPlus />
        </button>
        <button onClick={decrementar} className="cursor-pointer">
          <IconMinus />
        </button>
        <span className="text-xl p-1">{numero}</span>
      </div>
    </div>
  );
}
