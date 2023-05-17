import styles from "./Singup.modules.css"
import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom"
import {auth} from "../../firebase"
import { InputControl } from "../inputs/InputControl"
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
export function Singup(){
    const navigate = useNavigate();
    const [values,setValues] = useState({name:"",email:"",pass:""})
    const [errorMsg,SetErrorMsg] = useState([]);
    const [btnDisable,SetBtnDisable] = useState(false);

    //esto es una funcion como tal
    const registro =()=>{
        if(!values.name || !values.email || !values.pass){
            SetErrorMsg("Llene todos los campos")
            return;
        }
        SetErrorMsg("");
        SetBtnDisable(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            SetBtnDisable(false)
            const user = res.user
            await updateProfile(user,{displayName:values.name});
            navigate("/")
        })
        .catch((err)=>{
            SetBtnDisable(false);
            SetErrorMsg(err.message);
        })
    }

    return(
        
       <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>
                Registro
            </h1>
            <InputControl label="Name:" placeholder="Ingrese su nombre"
            onChange={(event)=> setValues((prev)=>({
                ...prev,name:event.target.value
            }))}/>
            <InputControl label="Email:" placeholder="Ingrese su Correo"
            onChange={(event)=> setValues((prev)=>({
                ...prev,email:event.target.value
            }))}/>
            <InputControl label="Password:" placeholder="Ingrese su contraseña"
            onChange={(event)=> setValues((prev)=>({
                ...prev,pass:event.target.value
            }))}/>
            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={registro} disabled={btnDisable}>
                    Registrar
                </button>
                <p>
                    si ya tienes una cuenta 
                    <span>
                        <Link to="/login"> <u>Inicia sesion</u></Link>
                    </span>
                </p>
            </div>
        </div>
       </div>
    )
}