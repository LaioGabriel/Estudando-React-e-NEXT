'use client'
import React from "react";
import Filho from "./Filho";

export default function Pai() {
    const [resposta, setResposta] = React.useState("???")
    function receberOpcao(resposta: string){
        setResposta(resposta)
    }
return(
    <div>
        <h1>
            Quem estava no barquinho?
        </h1>
    <Filho escolhaDeOpcao={receberOpcao} opcoes={["Pedro ","Thiago ","João "]} />

    <h3>
        Resposta: {resposta}
    </h3>
</div>
)
}   