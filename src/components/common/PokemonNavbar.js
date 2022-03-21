import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import pokebola from './Pokebola.png'
import { useNavigate } from 'react-router-dom';


export const PokemonNavbar = () => {
    const navigate = useNavigate();
    const closeSession = (e) =>{
        e.preventDefault()
        window.localStorage.removeItem('user')
        navigate('/app')
    }
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
            <Container>
            
            <Nav className="me-auto">
            <Navbar.Brand href="/homeProfile">
                <img
                alt=""
                src={pokebola}
                width="35"
                height="35"
                className="d-inline-block align-top"
                />
            {`   Home Page    `}
            </Navbar.Brand>
                <Nav.Link href="/homeProfile/myPokedex">My Pokemon</Nav.Link>
                <Nav.Link href="/homeProfile/generalPage">Pokedex</Nav.Link>
                <Button variant="secondary" size="sm"  onClick={closeSession} active> Cerrar sesión </Button>
            </Nav>
            </Container>
        </Navbar>
        </React.Fragment>
    )
}