import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export const PokemonCard = (props) =>{
    const handleSavePokemon = async (e) => {
        e.preventDefault()
        delete props.pokemon.moves
        console.log(props.pokemon)
        try {      
           const result = await axios.put('http://localhost:4000/pokemon',{
               email: window.localStorage.getItem('user') || '',
               pokemon : props.pokemon
           })  
        } catch (error) {
            console.error(error)
        } 
    }
    return(
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pokemon.image} />
                <Card.Body>
                    <Card.Title>{props.pokemon.pokeName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.pokemon.gender}</Card.Subtitle>
                    {props.button && <Button variant="primary" onClick={handleSavePokemon}> Capturar </Button>}
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}