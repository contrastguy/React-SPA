import React, { useState } from "react";
import Titulo from "./Titulo";
import Agua from "./Agua";
import "./Agua.css"

const EstadosAgua = () => {
   const [temperatura,setTemperatura] = useState(0)
    
    return(
        <div>
            <Titulo texto={"Olá"}/>
            <button onClick={() => {setTemperatura(0)}}>Temperatura 0°</button>
            <button onClick={() => {setTemperatura(50)}}>Temperatura 50°</button>
            <button onClick={() => {setTemperatura(100)}}>Temperatura 100°</button>
            <Agua temperatura={temperatura}/>
        </div>
        //o temperatura={temperatura} indica que , pra cada vez q apertamos o botão, o "state" muda conforme o que esta escrito ,
        // e como precisamos ver o que mudou, o componente Agua mostra a propriedade temperatura com o "state" alterado pelo botão
    )
}

export default EstadosAgua