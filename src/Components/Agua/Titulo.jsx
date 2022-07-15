import React from "react";

const Titulo = (props) => {
    return(
        //pega a propriedade do parâmetro , especifica ela, e joga ela de forma dinâmica pra dentro do H1
        <h1>{props.texto}</h1>
    )
}

export default Titulo