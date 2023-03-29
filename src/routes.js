import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./Pages/home";
import Contatos from "./Pages/contato";

const MainRoutes = () => {
    return(
        <Routes>
            <Route 
                path="/"
                element={<Home />}
            />
            <Route
                path="/contatos"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;