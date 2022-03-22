import React from "react"
import axios from 'axios'
import { PokemonCard } from "../common/PokemonCard";
import './Styles.css'


export const Pokedex = () => {
    const [myPokemons,setMyPokemons] = React.useState()
    React.useEffect(()=>{
        console.log('Aqui')
        axios.post('http://localhost:4000/myPokedex',{
            email:window.localStorage.getItem('user')||'test2@test2.com'
        })
        .then(result => {
            console.log("myPokedex",result)
            setMyPokemons(result.data[0].pokemons)
        })
        .catch(error => console.error(error))
    },[])
    return(
        <div className="container">  
            {myPokemons ? 
                myPokemons.map( pokemon => <div key={pokemon.name}><PokemonCard pokemon={pokemon} button={false} /></div>):<h1 className="h1"> No posés ningún pokemon aun</h1>
            }                              
        </div>
    )
}