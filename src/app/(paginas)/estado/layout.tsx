import { ProvedorContador } from "@/data/context/ContextoContador";
import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return <ProvedorContador>{props.children}</ProvedorContador>;
}
