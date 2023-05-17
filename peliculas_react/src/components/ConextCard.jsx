import { useEffect, useState } from "react"
import {get} from "../data/httpClient"
import { MovieCard } from "./MovieCard";
import "../components/contexMovie.css";
export function ContextCard(){
    const [movies,SetMovies] = useState([]);
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            SetMovies(data.results);
            console.log(data);
        }); 
    },[]); //el corchete es para que se ejecute una sola vez
    return(
      <ul className="container">
        {movies.map((itemMovie)=>(
            <MovieCard key={itemMovie.id} movie={itemMovie}/>
        ))}
      </ul>
    )
}