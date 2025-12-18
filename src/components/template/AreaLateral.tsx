import { ReactNode } from "react";

export interface AreaLateralProps {
    children: ReactNode
}

export default function AreaLateral(props: AreaLateralProps) {
    return (
        <aside className="border-r border-zinc-800 w-80 p-6">
            {props.children}
        </aside>
    )
}