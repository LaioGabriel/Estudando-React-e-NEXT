"use client";
import { useState } from "react";

export default function Formulario() {
  let nomeUsuario = "Pedro";
  const [nome, setNome] = useState(nomeUsuario);

  return (
    <div className="flex flex-col gap-4">
      <label>
        {nome} | {nomeUsuario}
      </label>

      <input
        type="text"
        value={nome}
        className="input"
        placeholder="Informe seu nome"
        onChange={(e) => {
          nomeUsuario = e.target.value;
          setNome(e.target.value);
          console.log(nomeUsuario);
        }}
      />
      <button className="botao azul" onClick={() => setNome("Ana")}>
        Alterar
      </button>
    </div>
  );
}
