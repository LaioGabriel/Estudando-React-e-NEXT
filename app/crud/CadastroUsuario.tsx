'use client';
import { useState } from "react";
import usuarios from './../../.data/.constants/usuarios';
import Usuario from "@/.data/.model/usuario";
import ListaUsuarios from "./ListaUsuarios";

export default function CadastroUsuario() {

  const [usuario, setUsuarios] = useState<Usuario[]>(usuarios);

  function removerUsuario(user: Usuario) {
    const novosUsuarios = usuario.filter(u => u.id !== user.id);
    setUsuarios(novosUsuarios);
    
  }
  return (
    <div>
      <ListaUsuarios usuarios={usuario} removerUsuario={removerUsuario} />
    </div>
  );
}
