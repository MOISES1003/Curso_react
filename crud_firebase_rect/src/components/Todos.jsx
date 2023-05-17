import { useState } from "react"

export function Todos({todo,Delete,toggleComplete,handleEdit}){
    const [newTitle,setNewTile] = useState(todo.title);
    const handhleChange=(e)=>{
        if(todo.completed===true){
            setNewTile(todo.title)
        }else{
            todo.title = "";
            setNewTile(e.target.value)
        }
    }
    return(
       <div className="todo">
        <input className="list"
        style={{textDecoration:todo.completed && "line-through"}}
        value={todo.title ===""?newTitle:todo.title}
        onChange={handhleChange}/>
        <div>
          <button className="button-cpmplete" onClick={()=>toggleComplete(todo)}>completar</button>
          <button onClick={()=>handleEdit(todo,newTitle)}>edit</button>
          <button onClick={()=>Delete(todo.id)}>eliminar</button>
        </div>
       </div>
    )
}