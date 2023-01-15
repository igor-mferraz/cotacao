import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytic } from "./pages/Analytic";
import { Home } from "./pages/Home";

export const Rotas = () =>{
    return(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/:stockName' element={<Analytic/>}></Route>
    </Routes>
            
        
    )
}