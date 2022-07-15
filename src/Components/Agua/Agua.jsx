import React from "react"
import { useState } from "react"

const Agua = (props) => {
    return(
        //data-atributes => serve pra colocar JS 
        //props.temperatura significa que o parâmetro props é especificado, com a finalidade de ser usado na lógica de um evento
        //quando colocamos o props.temperatura dentro da div , podemos usar o .temperatura como propriedade , pra manipular o componente quando for exportado para outro arquivo
        
        <div className="agua" data-temperatura={props.temperatura}>

            {props.temperatura}
        </div>
    )
}

export default Agua