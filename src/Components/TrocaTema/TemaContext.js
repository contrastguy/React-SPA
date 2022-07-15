import React, { useState } from "react"
import { useEffect } from "react"

const temas  = {
    light: {
        backgroundColor:"white",
        color:"black"
    },
    dark: {
        backgroundColor:"black",
        color:"white"
    }
}

const estadoInicial = {
    tema:temas.dark,
    dark:true,
    //o toggle é o botão pra mudar de cor, e ele começa com uma função vazia, ou seja sem valor
    toggle:() => {}
}

//cria o contexto com o estado inicial
const TemaContext = React.createContext(estadoInicial)

const TemaProvider = (props) => {
   const[dark,setDark] = useState(true)

    // cria o useEffect , com o objetivo de , quando o componente é criado ,
    // e ver o que está armazenado na memória local,se for preto o "state " é alterado 
    // o Array é uma condição  de execução se o valor de "dark" mudar , apenas uma vez
   useEffect(() => {
    const ehDark = localStorage.getItem("dark") === "true"
    setDark(ehDark)
   },[dark])

   //cria a função do toggle que pega o estado atual,  inverte o seu valor e salva na memória local
   const toggle = () => {
   const TemaTrocado = !dark
   // o primeiro parâmetro é a chave de indentificação/ state 
   //o segundo parâmetro é o valor que você quer passar pra essa função funcionar, em forma de String
   //armazenamos o valor invertido do "state" na memória local
    localStorage.setItem("dark" , JSON.stringify(TemaTrocado))
    setDark(TemaTrocado)

   }

   //Vamos exportar o Provedor com as propriedades do objeto EstadoInicial "tema","dark","toggle" de forma global
   //Depois disso temos que passar para os  componentes filhos, com o props.children
 
   const tema = dark? temas.dark : temas.light

    return(
        <TemaContext.Provider value={{tema,toggle,dark}}>
            {props.children}
        </TemaContext.Provider>
    )
}

export{TemaProvider,TemaContext}
