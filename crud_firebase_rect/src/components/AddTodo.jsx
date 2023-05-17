import { useState } from "react";
import {db} from "../services/firebase"
import {collection,addDoc} from "firebase/firestore";



export function AddTodo(){
    const [title,setTitle] = useState([])
    const Insertar= async(e)=>{
        e.preventDefault();
        if(title!== ""){
            await addDoc(collection(db,"todos"),{
                title,
                completed:false
            });
            setTitle("");
        }
    }


    return(
       <form onSubmit={Insertar}>
        <div className="input_cantainer">
            <input
            type="text"
            placeholder="ingresar tarea"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div className="btn_container">
        <button>Insertar</button>
        </div>
       </form>
    )
}