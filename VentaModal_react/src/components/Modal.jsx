import logo from "../img/o5.png";
import "../components/Modal.scss";

export function Modal({open,onClose}) {
    if(!open) return;
    
  return (
    <section className="contenedor" onClick={onClose}>
      <div className="sub-contenedor" onClick={(e)=>{
        e.stopPropagation();
      }}>
        <div className="contenido">
          <div className="icon">
            <img src={logo} alt="imagen" width="48" />
          </div>
          <div className="mensaje">
            <div className="title">
                <h3>
                    Pago realizado con exito xd
                </h3>
                <div className="text">
                    gracias por su preferencia
                </div>
            </div>
          </div>
        </div>
        <div className="actions">
            <button className="btn-descargar">Descargar</button>
            <button className="btn-volver" onClick={onClose}>Volver</button>
        </div>
      </div>
    </section>
  );
}
