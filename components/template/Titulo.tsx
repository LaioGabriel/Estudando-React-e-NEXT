import { ReactNode } from "react";

export interface TituloProps{
    titulo: string;
    subtitulo?: string;
}

export default function Titulo(props:TituloProps){
    return(
        <div className="flex flex-col ">
            <h1 className="text-xl font-bold text-zinc-200">
                {props.titulo}
            </h1>
            {props.subtitulo && <p className="text-sm text-zinc-500">{props.subtitulo}</p>} {/* renderiza o subtítulo somente se for fornecido */}
           
        </div>
    )
}