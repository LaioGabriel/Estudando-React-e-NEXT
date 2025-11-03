import { IconHeartFilled } from "@tabler/icons-react";
export default function Rodape() {
  return (
    <footer className="flex gap-1 mb-0 items-center justify-center border-t border-zinc-800 p-6">
      <span className="">Feito com</span>
      <IconHeartFilled size={18} stroke={2.2} className="text-red-600" />
      <span>por Laio</span>
    </footer>
  );
}
