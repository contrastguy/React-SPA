import React, { useContext } from "react";
import { TemaContext } from "./TemaContext";

const TrocaTema = () => {

    //Esse contexto retorna os valores que exportamos no Provedor
   const {tema,dark,toggle} = useContext(TemaContext)

    return(
        <div className="app">
            <header className="app-header" style={{backgroundColor:tema.backgroundColor,color:tema.color}}>
                <button className="app-button" type="button" onClick={toggle} style={{backgroundColor:tema.backgroundColor,color:tema.color}}>
                    Clique aqui para trocar o tema para {!dark ? "dark" : "light"}
                </button>
            </header>
        </div>
    )
}

export default TrocaTema