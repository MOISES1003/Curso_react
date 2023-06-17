import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import { NavBar } from "../components/NavBar"
import { Home } from "../pages/Home"
import {Producto} from "../pages/Producto"
import {Reportes} from "../pages/Reportes"
export function MyRoutes(){
    return(
        <Router>
                <NavBar/>
            <Routes>        
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/productos" element={<Producto/>}/>
                <Route exact path="/reportes" element={<Reportes/>}/>
            </Routes>
        </Router>
    )
}