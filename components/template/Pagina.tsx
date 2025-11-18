import { ReactNode } from "react";
import AreaLateral from "./AreaLateral";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { IconArrowDown, IconBrandLine, IconFlask, IconHandClick, IconHome, IconMenu3, IconShape, IconTestPipe, IconTestPipe2, IconTool } from "@tabler/icons-react";
import MenuLabel from "./MenuLabel";


export interface PaginaProps {
  children?: ReactNode;
}
export default function Pagina(props: PaginaProps) {
  return (
    <div className=" flex flex-col min-h-screen ">
    <Cabecalho />
      <div className="flex flex-1">
        <AreaLateral>
          <Menu>
             <MenuLabel>Geral</MenuLabel>
            <MenuItem texto="Home" link="/" icone={IconHome} />
            <MenuLabel>Componentes</MenuLabel>
            <MenuItem texto="Componente 1" link="/teste/comp-01" icone={IconTool} />
            <MenuItem texto="Componente 2" link="/teste/comp-02" icone={IconTool} />
            <MenuItem texto="Botão" link="/teste/botao" icone={IconHandClick}  />
            <MenuItem texto="JSX" link="/teste/jsx" icone={IconTestPipe} />
            <MenuItem texto="JSX-2" link="/teste/jsx-2" icone={IconTestPipe2} />
            <MenuItem texto="JSX-3" link="/teste/jsx-3" icone={IconFlask} />
            <MenuLabel>Arvore de Componentes</MenuLabel>
            <MenuItem texto="Comunicação Direta" link="/arvore/direta" icone={IconArrowDown} />
            <MenuItem texto="Comunicação indireta" link="/arvore/direta/indireta" icone={IconBrandLine} />
            <MenuLabel>Estado</MenuLabel>
            <MenuItem texto="Estado Básico 01" link="/estado/basico01" icone={IconShape} />
            <MenuLabel>CRUD</MenuLabel>
            <MenuItem texto="Cadastro" link="/crud" icone={IconMenu3} />
           
          </Menu>
        </AreaLateral>
        
      <main className="p-6 flex-1">{props.children}</main>

      </div>

       <Rodape/>
    </div>
  );
}
