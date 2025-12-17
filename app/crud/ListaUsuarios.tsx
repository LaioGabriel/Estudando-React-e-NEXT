'use client'
import Usuario from "@/.data/.model/usuario";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListaUsuariosProps {
  usuarios: Usuario[];
  removerUsuario: (usuario: Usuario) => void;
}
export default function ListaUsuarios(props: ListaUsuariosProps) {
    function renderizarUsuario(usuario: Usuario){
        return(
            <div className="flex items-center px-6 py-3 rounded-md border justify-between">
                <div className="flex flex-col">
               <span className="font-semibold">
                {usuario.nome}
                </span> 
                <span className="text-sm text-zinc-400">
                {usuario.email}
                </span>
                </div>

                <section className="flex gap-1.5">
                    <button className="bg-blue-500 hover:bg-blue-800 px-4 py-2.5 rounded-md cursor-pointer">Alterar
                        <IconEdit size={16} className="inline-block ml-1"/>
                    </button>
                    <button className="bg-red-500 hover:bg-red-800 px-4 py-2.5 rounded-md cursor-pointer" onClick={() => props.removerUsuario(usuario)}>Excluir <IconTrash size={16} className="inline-block ml-1"/></button>
                </section>
            </div>
        )
    }
  return(
     <ul className="flex flex-col gap-4 mt-4">
        {props.usuarios.map(usuario =>{

            return(
                <li key={usuario.id} >{renderizarUsuario(usuario)}</li>
            
            ) 
        })}
     </ul>
      
) 
    
}
