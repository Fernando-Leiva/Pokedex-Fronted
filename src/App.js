
import './App.css';
import React from 'react'
import { SingUp } from './components/SignUp/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login/login';
import { PokemonNavbar } from './components/common/PokemonNavbar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Pokedex } from './components/MyPokedex/Pokedex';
import { GeneralPokemonPage } from './components/GeneralPokemonPage/PokemonPage';



function App() {
  return (
    <Router>
      <div >
        <div className='fill-height-or-more'>  
      {/*     {localStorage.getItem('user') ? <div className='navbar'><PokemonNavbar/> </div> : <></>}   */}
          <Routes >
              <Route exact path='/app' element={< Login />}></Route> 
              <Route exact path='/signUp' element={< SingUp />}></Route>
              {localStorage.getItem('user') ? <Route exact path='/homeProfile/*' element ={<Home/>}/> : <></>}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
