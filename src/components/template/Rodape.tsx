import { IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
    return (
        <footer className="flex justify-center items-center gap-1.5 text-sm 
            border-t border-zinc-800 text-zinc-400 h-16 px-6">
            <span>Feito com</span>
            <IconHeartFilled size={14} className="text-red-500" />
            <span>por Laio</span>
        </footer>
    )
}