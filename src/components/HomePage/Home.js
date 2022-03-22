import React from "react"
import {Route, Routes , useLocation} from 'react-router-dom'
import  PokemonNavbar  from '../common/PokemonNavbar';
import axios from 'axios'
import  GeneralPokemonPage  from '../GeneralPokemonPage/PokemonPage';
import { Pokedex } from '../MyPokedex/Pokedex';
import './Styles.css'
import { Profile } from "../Profile/Profile";
import Button from 'react-bootstrap/Button'

export const Home = () => {
    const location = useLocation();
    const [user,setUser] = React.useState()

    console.log(location)
    React.useEffect(()=>{
        axios.post('http://localhost:4000/user',{
            email: window.localStorage.getItem('user')
        })
        .then(res => { console.log(res) 
            setUser(res.data)})
        .catch(error => console.error(error))
    },[])
    return (
        <PokemonNavbar>
            <div className="container" >
            {location.pathname ==='/homeProfile' && <div>
                    {user && <Profile 
                        name={user.name} 
                        nickname={user.nickname} 
                        region={user.region} 
                        gender={user.gender} 
                        email={user.email} 
                        age={user.age} 
                        trainer={user.trainerClass}
                    />}
                </div>
                } 
                <Routes>
                    <Route exact path='myPokedex' element={< Pokedex />}></Route> 
                    <Route exact path='generalPage' element={< GeneralPokemonPage />}></Route> 
                </Routes>
            </div>

        </PokemonNavbar>
    )
}