import { ReactNode } from "react";

export interface MenuProps {
  children?: ReactNode;
}
export default function Menu(props: MenuProps) {
  return <nav className="flex flex-col gap-1.5">{props.children}</nav>;
}
