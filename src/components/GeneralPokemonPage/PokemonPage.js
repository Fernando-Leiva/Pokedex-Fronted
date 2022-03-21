import React from "react";
import axios from 'axios'
import { PokemonCard } from "../common/PokemonCard";
import './Styles.css'


export const GeneralPokemonPage = () => {
    const [pokemons,setPokemons] = React.useState();
     React.useEffect(()=>{
        console.log('Aqui')
        axios.get('http://localhost:4000/pokemon')
        .then(res=> { 
            console.log(res.data)
            setPokemons(res.data)})
        .catch(e => console.error(e))
    },[]) 
    return(
        <div className="container">  
            {pokemons ? 
                pokemons.map( pokemon => <div className="item" key={pokemon.name}><PokemonCard  pokeName={pokemon.name} gender={pokemon.gender} image={pokemon.picture} button={true} /></div>):<></>
            }                              
        </div>
    )
}