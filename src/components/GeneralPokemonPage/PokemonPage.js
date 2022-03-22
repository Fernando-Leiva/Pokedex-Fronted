import React from "react";
import axios from 'axios'
import  {PokemonCard}  from "../common/PokemonCard";
import './Styles.css'
import { fetchPokemons } from "../../helpers/Pokemon";
import { SpinnerDotted } from 'spinners-react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { incrementLimit,incrementOffset } from "../../redux/action";


const GeneralPokemonPage = (props) => {
    const [pokemons,setPokemons] = React.useState();
    const [loader, setLoader] = React.useState(true);
     React.useEffect(()=>{
        fetchPokemons(props.offset,props.limit)
        .then(result=>{
            console.log(result)
            setPokemons(result)
            setLoader(false)
        })
        .catch(e=>console.error(e))
     },[props.offset,props.limit]) 
    return(
        <div className="container">  
           
            {pokemons ? 
                pokemons.map( pokemon => {
                    return(
                        <div className="item" key={pokemon.name}>
                            <PokemonCard  pokemon={pokemon} button={true} />    
                        </div>
                    )
                }
                )
                : <div className="spinner"> <SpinnerDotted  thickness={100} enabled={loader} size={130} color='#25AEB8'/> </div>
            }                              
        </div>
    )
}

const mapStateToPros = state =>{
    return state
}
const mapDispatchToProps = { incrementLimit, incrementOffset }

export default connect(mapStateToPros,mapDispatchToProps)(GeneralPokemonPage)