import styles from "../components/stylemoviecard.module.css"; //la forma de importar un module.css
import { Link } from "react-router-dom";
export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/"+movie.id}>
      <img
        src={imgUrl}
        width={230}
        height={230}
        alt={movie.title}
        className="movieImage"/>
      </Link>   
       <div className={styles.title}>{movie.title}</div> 
   
    </li>
  );
}
