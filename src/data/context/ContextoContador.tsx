"use client";
import { createContext, useState, ReactNode } from "react";

export interface ContextoContadorProps {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
}

const ContextoContador = createContext<ContextoContadorProps>({} as ContextoContadorProps);

export function ProvedorContador(props: { children: ReactNode }) {
  const [contador, setContador] = useState(0);

  function decrementar() {
    setContador(contador - 1);
  }

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <ContextoContador.Provider
      value={{
        contador,
        incrementar,
        decrementar,
      }}
    >
      {props.children}
    </ContextoContador.Provider>
  );
}

export default ContextoContador;
