import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from "./services/firebase"
import {Title} from "./components/Title"
import {Todos} from "./components/Todos"
import {AddTodo} from "./components/AddTodo"
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])
  //para mostrar los datos
useEffect(()=>{
  const q = query(collection(db,"todos"));
  const unsub = onSnapshot(q,(QuerySnapshot)=>{ //el onSnapshot es el que sirve para mostrar los cambios y datos en tiempo real, algo que viene implementado en firebase/firestore
    let todosArray=[];
    QuerySnapshot.forEach((doc)=>{
      todosArray.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArray);
  });
  return()=>unsub();
},[]);
//para editar 
  const handleEdit = async(todo,title)=>{
    await updateDoc(doc(db,"todos",todo.id),{title:title})
  }
  //para eliminar
  const Delete = async(id)=>{
    await deleteDoc(doc(db,"todos",id));
  }
  //toggle
  const toggleComplete = async(todo)=>{
    await updateDoc(doc(db,"todos",todo.id),{
      completed:!todo.completed
    })
  }
  
  return (
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
      <div>
        {todos.map((todo)=>(
          <Todos todo={todo} 
          Delete={Delete}
          toggleComplete={toggleComplete}
          handleEdit = {handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
