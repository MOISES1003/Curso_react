import { useState,useEffect } from "react"

export function PokeList(){
    const [allPokemons,setAllPokemons] = useState([]);
    const getAllPokemons = async()=>{
        const respues =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"); 
        const data = await respues.json();
        function createPokemonObjec(results){
            results.forEach(async(pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                )
            });
        }
    }
    return(
        <h1>PokeList</h1>
    )
}