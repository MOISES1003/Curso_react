import styles  from "./Login.module.css"
import { InputControl } from "../inputs/InputControl"
import { Link,useNavigate } from "react-router-dom"
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login(){
    const Navigate = useNavigate();
    const [values,setValues] = useState({email:"",pass:""});
    const [erroMsg,setErrorMsg] = useState("");
    const [subButton,setSubButton] = useState(false);
    const Loguearse=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Datos incompletos");
            return
        }
        setErrorMsg("");
        setSubButton(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubButton(false);
            Navigate("/");
        }).catch((err)=>{
            setSubButton(false)
            setErrorMsg(err.message);
        });
    };
    return(
        <div className={styles.container}> 
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} placeholder="Ingrese su correo" />
        <InputControl label="Password" onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}
        placeholder="Ingrese su contraseña" type="password"/>
        <div className={styles.footer}>
            <b className={styles.error}>{erroMsg}</b>
            <button onClick={Loguearse} disabled={subButton}>
                login btn
            </button>
            <p>
                Crear Cuenta
                <samp>
                    <Link to="/singup"> Go ⚔️</Link>
                </samp>
            </p>
        </div>
        </div>
        </div>
       
    )
}