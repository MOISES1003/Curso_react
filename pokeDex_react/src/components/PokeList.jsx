import { useState,useEffect } from "react"
import { PokemonCard } from "./pokemonCard";
import "../components/PokeList.css"
export function PokeList(){
    const [allPokemons,setAllPokemons] = useState([]);
    const getAllPokemons = async()=>{
        const respues =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"); 
        const data = await respues.json();
        function createPokemonObjec(results){
            results.forEach(async(pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                )
                const data = await res.json();
                setAllPokemons((currerntList)=>[...currerntList,data]);
                await allPokemons.sort((a,b)=>a.id-b.id)
            });
        }
        createPokemonObjec(data.results);
    }
    useEffect(()=>{
        getAllPokemons();
    },[])
    return(
        <div className="app-container">
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemones)=>(
                        <PokemonCard 
                        key={pokemones.id}
                        id={pokemones.id.toString()
                            .padStart(3,"0")}
                        name={pokemones.name}
                        image={pokemones.sprites.other["official-artwork"]
                        .front_default}
                        type={pokemones.types[0].type.name} 
                        weight={pokemones.weight}
                        height={pokemones.height}
                        stats={pokemones.stats.map((stat)=>stat.base_stat)
                        .slice(0,3)}  
                        statsName = {pokemones.stats.map((stat)=>stat.stat.name)
                            .slice(0,3)}                    
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}