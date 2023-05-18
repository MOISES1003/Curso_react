import "../components/PokemonCard.css";
import { useState } from "react";
import pokebola from "../img/pokeball.png";
export function PokemonCard({
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  const [inShown, setInsShown] = useState(false);

  return (
    <div className="container">
      {inShown && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img src={image} alt="" className="img-title" />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p>Tipo</p>
              <p>Alto</p>
              <p>Ancho</p>
            </div>
            <div
              className="stats-right"
              style={{ background: "#ffffff" }}
            >
              <p>{type}</p>
              <p>{height}0 cm</p>
              <p>{weight}</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
                {statsName.map((stats)=>(
            <p className="stats">{stats}</p>
          ))}
            </div>
            <div>
                <div>
                    {stats.map((stados)=>(
                <p className="stats">{stados}</p>
                    ))}
                </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="right"
        onMouseEnter={() => setInsShown(true)}
        onMouseLeave={() => setInsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>N°. {id}</p>
        <p>{name}</p>
        <img
          src={pokebola}
          alt="pokeball"
          style={{
            marginLeft: "auto",
            width: "40px",
          }}
        />
      </div>
    </div>
  );
}
