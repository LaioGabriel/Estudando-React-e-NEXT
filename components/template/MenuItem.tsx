import Link from "next/link";


export interface MenuItemProps {
  texto: string;
  link: string;
  icone?: React.ElementType;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <nav className="px-4 py-2 rounded-md hover:bg-white/80">
        <Link className="flex items-center gap-1" href={props.link}>
          <span>{props.icone && <props.icone stroke={0.9} />}</span>
          {props.texto}
          
        </Link>
     
      
    </nav>
  );
}
