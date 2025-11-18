'use client'
import Usuario from "@/.data/.model/usuario";
import usuarios from './../../.data/.constants/usuarios';
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListaUsuariosProps {
  usuarios: Usuario[];
  removerUsuario: (usuario: Usuario) => void;
}
export default function ListaUsuarios(props: ListaUsuariosProps) {
    function renderizarUsuario(usuarios: Usuario){
        return(
            <div className="flex items-center px-6 py-3 rounded-md border justify-between">
                <div className="flex flex-col">
               <span className="font-semibold">
                {usuarios.nome}
                </span> 
                <span className="text-sm text-zinc-400">
                {usuarios.email}
                </span>
                </div>

                <section className="flex gap-1.5">
                    <button className="bg-blue-500 hover:bg-blue-800 px-4 py-2.5 rounded-md cursor-pointer">Alterar
                        <IconEdit size={16} className="inline-block ml-1"/>
                    </button>
                    <button className="bg-red-500 hover:bg-red-800 px-4 py-2.5 rounded-md cursor-pointer" onClick={() => props.removerUsuario(usuarios)}>Excluir <IconTrash size={16} className="inline-block ml-1"/></button>
                </section>
            </div>
        )
    }
  return(
     <ul className="flex flex-col gap-4 mt-4">
        {props.usuarios.map(usuario =>{

            return(
                <li key={usuario.id} className=" ">{renderizarUsuario(usuario)}</li>
            
            ) 
        })}
     </ul>
      
) 
    
}
