import React from "react"
import './Styles.css'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export const PokemonDetail = (props) =>{
    const {state} = useLocation();
    console.log(state)
    const { pokemonInfo } = state
    const pickColor = () => {
        const colors = ["primary","secondary","success","warning","danger","light"]
        console.log(Math.floor(Math.random())*6)
        return colors[Math.floor(Math.random())*6]
    }
    return(
        <div className="row center">
            <div className="col d-flex justify-content-center ">
                <div className="col">
                    <h1 className="center">{pokemonInfo.name}</h1>
                    <img src={pokemonInfo.image} className="divAvatar center" />  
                    <div className="row">
                        <div className="miniBox ">
                            <h3>Types:</h3>
                            {pokemonInfo.types ? pokemonInfo.types.map(type=>
                                <h6 key={type.type.name}>{type.type.name}</h6>):<></>}
                        </div> 
                        <div className="col">
                            <h3> Dimensions:</h3>
                            <h6> Weight:  {pokemonInfo.weight}</h6>
                            <h6> Height:  {pokemonInfo.height}</h6>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col"> 
                <h3 >Moves:</h3>
                <div className="miniBox2 ">
                    {pokemonInfo.moves ? pokemonInfo.moves.map(move=>
                        <Button  key={move.move.name} variant={pickColor} disabled>{move.move.name}</Button>):<></>
                    }
                </div> 
            </div>
        </div>
    )
}