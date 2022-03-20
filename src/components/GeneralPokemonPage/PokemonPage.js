import React from "react";
import { fetchPokemons } from "../../helpers/Pokemon";
import { PokemonCard } from "../common/PokemonCard";
import { PokemonNavbar } from "../common/PokemonNavbar";


export const GeneralPokemonPage = () => {
    const [pokemons,setPokemons] = React.useState();
     React.useEffect(()=>{
        fetchPokemons()
        .then(res=> setPokemons(res))
        .catch(e => console.error(e))
    },[]) 
    return(
        <div className="container">  
            {pokemons ? 
                pokemons.map( pokemon => <div key={pokemon.name}><PokemonCard pokeName={pokemon.name} gender={pokemon.gender} image={pokemon.image} button={true} /></div>):<></>
            }                              
        </div>
    )
}