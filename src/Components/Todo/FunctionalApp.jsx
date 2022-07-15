import { useRef } from "react";
const { useEffect } = require("react");
const { useState } = require("react")

const Todo = () => {
    //Estado inicial do componente = Array vazia
    //var 1 => leitura do estado
    //var 2 => atualização do estado
   const [todos,setTodos] = useState([]);

    //Data Binding 
    // const input = document.querySelector("[name='todo']")
    //useRef() pega fica como valor de uma var , depois conecta com um elemento HTML , e por fim , você pode usar ele em uma função de um evento 
    const inputText = useRef()




   //Ciclo de vida do componente
   //1 => Executa quando o componente for construído 
   //2 => o return executa quando o componente for destruído
   //3 => Array que é uma condição para a execução dos de cima 

   useEffect(() => {
        //1
        console.log("Componente Construído")
        const existingTodos = localStorage.getItem("todos")
        //mudança do estado do componente , o JSON parse é porque iria vir em formato de String
        setTodos(existingTodos? JSON.parse(existingTodos) : [])

        //2
        return() => {
            console.log("Componente Destruído")
        }
   }, [])//3


   //Criação do evento de quando apertarmos o botão de Submit, adiciona-se o que esvreveu no input para uma lista desordenada
   function addTodo(event){
    //
    event.preventDefault();
    //pega o que você ta escrevendo no input
    const newTodo = inputText.current.value
    //pega a array todos e reposiciona ela pela var de cima
    const newValueTodo = [...todos,newTodo]
    //atualiza o estado  do componente
    setTodos(newValueTodo)
    //armazena o que voce ta colocando no input , em formato de String
    localStorage.setItem("todos",JSON.stringify(newValueTodo))
    //deixa o bloco de texto vazio , após apertar o botão
    inputText.current.value =""
   }


   return(
    <div>
        <ul>
            {todos.map((todo) => (
                //o key é algo que identifica unicamente um elemento
                <li key={todo}>{todo}</li>
            ))}
        </ul>
        <form onSubmit={addTodo} >
            <input type="text" placeholder="Write here" ref={inputText}/>
            <input type="submit"/>
        </form>
    </div>
   )
}

export default Todo

