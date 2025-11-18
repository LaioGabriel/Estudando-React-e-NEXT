import Titulo from "@/components/template/Titulo";
import Contador from "./contador";

export default function EstadoBasico01() {

    return(
        <div className="flex flex-col gap-2">
            <Titulo titulo="Usando estado 01" subtitulo="Exemplo de estado em um componente funcional"/>
            <Contador />

        </div>
    )
}