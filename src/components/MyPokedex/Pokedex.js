import React from "react"
import axios from 'axios'
import { PokemonCard } from "../common/PokemonCard";
import './Styles.css'
import { SpinnerDotted } from 'spinners-react';

export const Pokedex = () => {
    const [myPokemons,setMyPokemons] = React.useState()
    const [loader, setLoader] = React.useState(true);
    React.useEffect(()=>{
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
                myPokemons.map( pokemon => <div key={pokemon.name}><PokemonCard pokemon={pokemon} button={false} /></div>):
                <div className="spinner"> <SpinnerDotted thickness={100} enabled={loader} size={130} color='#25AEB8'/> </div>
            }                              
        </div>
    )
}