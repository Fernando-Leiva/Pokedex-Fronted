import React from "react"
import axios from 'axios'
import { PokemonCard } from "../common/PokemonCard";


export const Pokedex = () => {
    const [myPokemons,setMyPokemons] = React.useState()
    React.useEffect(()=>{
        console.log('Aqui')
        axios.post('http://localhost:4000/myPokedex',{
            email:window.localStorage.getItem('user')||'test2@test2.com'
        })
        .then(result => {
            setMyPokemons(result.data[0].pokemons)
        })
        .catch(error => console.error(error))
    },[])
    return(
        <div className="container">  
            {myPokemons ? 
                myPokemons.map( pokemon => <div key={pokemon.name}><PokemonCard pokeName={pokemon.name} gender={pokemon.gender} image={pokemon.picture} button={false} /></div>):<></>
            }                              
        </div>
    )
}