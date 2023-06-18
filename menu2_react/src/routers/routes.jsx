import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import { NavBar } from "../components/NavBar/NavBar"
import { Home } from "../pages/Home"
import {Producto} from "../pages/Producto"
import {Reportes1,Reportes2,Reportes} from "../pages/Reportes"

export function MyRoutes(){
    return(
        <Router>
                <NavBar/>
            <Routes>        
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/productos" element={<Producto/>}/>
                <Route exact path="/reportes" element={<Reportes/>}/>
                
                <Route exact path="/reportes/reportes1" element={<Reportes1/>} />
                <Route exact path="/reportes/reportes2" element={<Reportes2/>} />
            </Routes>
        </Router>
    )
}