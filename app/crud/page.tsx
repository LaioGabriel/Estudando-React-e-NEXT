'use client'
import Titulo from "@/components/template/Titulo";
import CadastroUsuario from "./CadastroUsuario";


export default function Cadastro(){
    return(

    <div>
        <Titulo titulo="Cadastro de Clientes" subtitulo="Incluir, alterar e excluir clientes" />
        <CadastroUsuario />
            </div>
    )

}