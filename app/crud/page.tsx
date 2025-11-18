import Titulo from "@/components/template/Titulo";
import CadastroUsuario from "./CadastroUsuario";
import ListaUsuarios from "./ListaUsuarios";
import usuarios from "@/.data/.constants/usuarios";

export default function Cadastro(){
    return(

    <div>
        <Titulo titulo="Cadastro de Clientes" subtitulo="Incluir, alterar e excluir clientes" />
        <CadastroUsuario />
        <ListaUsuarios usuarios={usuarios} />
            </div>
    )

}