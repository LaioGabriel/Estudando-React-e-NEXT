import Pagina from "@/components/template/Pagina";
import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return <Pagina>{props.children}</Pagina>;
}
