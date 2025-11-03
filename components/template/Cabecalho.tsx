
import { ReactNode } from "react";
import LogoReact from "./LogoReact";

export interface CabecalhoPropos{
children?: ReactNode
}


export default function Cabecalho(props: CabecalhoPropos){
    return(
        <header className="flex items-center h-20 border-zinc-800 border-b px-6 ">
           
          <LogoReact  />
           <span className="text-xl font-light">React & Next</span>
          
        </header>
    )
}