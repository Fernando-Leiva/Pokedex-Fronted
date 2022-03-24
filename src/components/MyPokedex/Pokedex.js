import React from "react"
import axios from 'axios'
import { PokemonCard } from "../common/PokemonCard";
import './Styles.css'
import { SpinnerDotted } from 'spinners-react';
import { myToggle } from "../../redux/action";
import { connect } from 'react-redux';

const Pokedex = (props) => {
    const [myPokemons,setMyPokemons] = React.useState()
    React.useEffect(()=>{
        props.myToggle(false)
        setTimeout(()=>{
            axios.post('http://localhost:4000/myPokedex',{
                email:window.localStorage.getItem('user')||'test2@test2.com'
            })
            .then(result => {
                setMyPokemons(result.data[0].pokemons)
                props.myToggle(true)
            })
            .catch(error => console.error(error))
        },2000)
    },[])
    return(
        <div className="container">  
            {myPokemons && props.toggle ? 
                myPokemons.map( pokemon => <div key={pokemon.name}><PokemonCard pokemon={pokemon} button={false} /></div>):
                <div className="spinner"> <SpinnerDotted thickness={100} enabled={!props.toggle} size={130} color='#25AEB8'/> </div>
            }                              
        </div>
    )
}

const mapStateToPros = state => {
    return state
  }
const mapDispatchToProps = { myToggle}

export default connect(mapStateToPros,mapDispatchToProps)(Pokedex)