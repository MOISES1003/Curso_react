import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Login } from "../components/login/Login"
import { Home } from "../components/home/Home"
import { Singup } from "../components/signUp/Singup"
import {auth} from "../firebase";
import { useEffect, useState } from "react";
export function MyRoutes(){
 
  const [userName,SetUserName] = useState([])
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        SetUserName(user.displayName)
      }else{
        SetUserName("");
      }
    })
  },[])
  
    return(
       <Router>
        <Routes>
            <Route
            exact path="/"  // de donde va a arrancar la pagina
            element={<Home name={userName}/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/singup" element={<Singup/>}/>
        </Routes>
       </Router>
    )
}