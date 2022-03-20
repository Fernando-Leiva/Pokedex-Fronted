import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

export const PokemonCard = (props) =>{
    const handleSavePokemon = (e) => {
        e.preventDefault()
    
    }
    return(
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.pokeName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.gender}</Card.Subtitle>
                    {/* <ListGroup className="list-group-flush">
                        {props.moves.map(move => {
                            <ListGroupItem>{move.move.name}</ListGroupItem>
                        })}
                    </ListGroup> */}
                    {props.button && <Button variant="primary" onClick={handleSavePokemon}> Especificaciones </Button>}
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}