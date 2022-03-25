
import './App.css';
import React from 'react'
import { SingUp } from './components/SignUp/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login/login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div >
          <div className='fill-height-or-more'>  
            <Routes >
                <Route exact path='/' element={< Login />}></Route> 
                <Route exact path='/signUp' element={< SingUp />}></Route>
                {localStorage.getItem('user') ? <Route exact path='/homeProfile/*' element ={<Home/>}/> : <></>}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
