import logo from './logo.svg';
import './App.css';
import React from 'react'
import { SingUp } from './components/SignUp/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login/login';

function App() {
  const [state,setState] = React.useState([])

  /* React.useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(res => setState(res))
    .catch(err=>err);
  },[]) */

  return (
    <div className="App">
      <SingUp/>
    </div>
  );
}

export default App;
