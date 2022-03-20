import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Styles.css'
import { Modal } from "../Modal/modal"

export const Login = () => {
    const [modal, setModal] = React.useState(false)

    const handleSubmit =  async (e) => {
        e.preventDefault()
        console.log("Hola",e)
        if(e.target?.form?.Email?.value && e.target?.form?.Email?.value){
            const user = {
                email:  e.target.form.Email.value,
                password: e.target.form.formBasicPassword.value
            }
            const response = await fetch('http://localhost:4000/login',{
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)}
                )
            const session = await response.json()
            console.log(session)
            if(session.status === 'error') setModal(true)
            // if session.status === 'ok' redirect to home
        }
    }

    return(
        <div>
            <div>Bienvenido</div>
            {modal && <Modal title={' 🚨 Verifique su usuario o contraseñad 🚨'} body={'Ha ocurrido un error con sus credenciales'} handleClose={()=>setModal(false)} /> }

            <Form className="form ">
                <Form.Group className="col-sm-5 " controlId="Email" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="col-sm-5 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="col-sm-5 button"  onClick={handleSubmit} variant="primary" type="submit">
                    login
                </Button>
            </Form>  
            <Button className="col-sm-5 button"  variant="primary" type='button'>
                SignUp
            </Button>  
            <span>Registrate</span>        
        </div>
    )
}