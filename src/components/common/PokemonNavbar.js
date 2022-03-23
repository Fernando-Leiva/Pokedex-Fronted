import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import pokebola from './Pokebola.png'
import { useNavigate,useLocation } from 'react-router-dom';
import './Styles.css'
import { connect } from 'react-redux';
import { incrementLimit,incrementOffset,decrementOffset,decrementLimit,clean,myToggle } from "../../redux/action"

const PokemonNavbar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const closeSession = (e) =>{
        e.preventDefault()
        window.localStorage.removeItem('user')
        props.clean()
        navigate('/app')
    }
    const handleNext = (e) => {
        e.preventDefault()
        props.myToggle(false)
        props.incrementOffset()
        props.incrementLimit()
    }
    const handlePrevious = (e) =>{
        e.preventDefault()
        props.myToggle(false)
        props.decrementOffset()
        props.decrementLimit()

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
                        <div className="pagination">
                            {location.pathname ==='/homeProfile/generalPage' && <>
                                <Button variant="success" size="sm"  onClick={handlePrevious} active> Previous  </Button> 
                                <Button variant="warning" size="sm"  onClick={handleNext} active> Next </Button>
                                </>
                            }
                        </div>
                        <div className="closeSession">
                            <Button variant="secondary" size="sm"  onClick={closeSession} active> Close Session </Button>
                        </div>
                        
                    </Nav>
                    </Container>
                </Navbar>
            {props.children}
            </React.Fragment>
    )
}

const mapStateToPros = state => {
    return state
  }
  const mapDispatchToProps = { incrementLimit, incrementOffset, decrementOffset, decrementLimit, clean, myToggle}

export default connect(mapStateToPros,mapDispatchToProps)(PokemonNavbar)