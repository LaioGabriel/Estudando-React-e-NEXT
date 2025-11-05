import { ReactNode } from "react";

export interface AreaLateralProps{
    children?: ReactNode;
}


export default function AreaLateral(props: AreaLateralProps){
    return(
        <aside className="p-6 min-w-72 border-r border-zinc-800 ">
            {props.children}
        </aside>


        
    )
}