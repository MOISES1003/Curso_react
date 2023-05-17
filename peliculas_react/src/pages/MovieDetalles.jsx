import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieimg } from "../utils/getMovieimg"
import "../components/detalles.css"

export function MovieDetalles() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genero, setGenero] = useState([]);
  
  useEffect(() => {
    get("/movie/"+movieId).then((data) => {
         //mapeamos la data
         
      setMovie(data);
      setGenero(data.genres[0])
      console.log(data);
   
       //y aqui pasamos la data para rellenarla
    });
  },[movieId]); //se va ejcutar cada vez que [movieID] cambie
  
  const imageUrL = getMovieimg(movie.poster_path, 500);
  return (
    <div className="detailContent">
      <img src={imageUrL} alt={movie.title} className="col imagen"/>
      <div className="col detalles">
        <p className="title">
          <strong>Titulo: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genero: </strong>
          {genero.name}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
