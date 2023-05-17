import { Link,useNavigate } from "react-router-dom";
import {auth} from "../../firebase";
function salir(){
  return auth.signOut();
  navigate("/");
}
export function Home(props) {
  return (
    <div className="">
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/singup">Registrar</Link>
          </h1>
        </div>
      </div>
      <h2>
        {props.name?`Bien venido - ${props.name}`:"Inicie Sesión"}
      </h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
}
