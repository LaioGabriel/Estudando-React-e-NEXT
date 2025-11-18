'use client';
import { useState } from "react";
import usuarios from './../../.data/.constants/usuarios';
import Usuario from "@/.data/.model/usuario";
import ListaUsuarios from "./ListaUsuarios";

export default function CadastroUsuario() {
  const [usuario, setUsuarios] = useState<Usuario[]>(usuarios);
  function removerUsuario(usuario: Usuario) {
    const novosUsuarios = usuarios.filter(u => u.id !== usuario.id);
    setUsuarios(novosUsuarios);
  }
  return (
    <div>
      <ListaUsuarios usuarios={usuario} removerUsuario={removerUsuario} />
    </div>
  );
}
