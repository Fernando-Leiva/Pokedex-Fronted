import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Styles.css'
import { Modal } from "../Modal/modal"
import { useNavigate } from 'react-router-dom';



export const Login = () => {
    const [modal, setModal] = React.useState(false)
    const navigate = useNavigate()
    
    const handleSubmit =  async (e) => {
        e.preventDefault()
        console.log(e)
        if(e.target.form.Email.value !== '' && e.target.form.formBasicPassword.value !== ''){
            const user = {
                email:  e.target.form.Email.value,
                password: e.target.form.formBasicPassword.value
            }
            window.localStorage.setItem('user',e.target.form.Email.value)
            const response = await fetch('http://localhost:4000/login',{
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)}
                )
            const session = await response.json()
            if(session.status === 'ok') {
                navigate('/homeProfile') 
            }
            // if session.status === 'ok' redirect to home
        }else{
            setModal(true)
        }
    }
    return(
        <div className="login">
            {modal && <Modal title={' 🚨 Verifique su usuario o contraseñad 🚨'} body={'Ha ocurrido un error con sus credenciales'} handleClose={()=>setModal(false)} /> }
            <Form id="form" >
                <Form.Group  controlId="Email" >
                    <Form.Label className="bolded">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group  controlId="formBasicPassword">
                    <Form.Label className="bolded">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>  
            <Button form="form" className="button" onClick={handleSubmit} variant="primary" type="submit">
                    Login
            </Button>
            <Button  variant="primary" className="button" type='button' href="/signUp">
                SignUp
            </Button>  
          
        </div>
    )
}