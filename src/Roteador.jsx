import React from "react";
import { Route, Routes } from "react-router-dom";
import Agua from "./Components/Agua/Agua";
import Todo from "./Components/Todo/FunctionalApp";
import TrocaTema from "./Components/TrocaTema/TrocaTema";
import { TemaProvider } from "./Components/TrocaTema/TemaContext";
//Arquivo para criação das Rotas


const Roteador = () => {
   <Routes>
      <Route path="/agua" element={<Agua />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/trocatema"
         element={
            <TemaProvider>
               <TrocaTema />
            </TemaProvider>} />
   </Routes>
}


export default Roteador