import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './Styles.css'

export const SingUp = () => {
    const [alarm,setAlarm] = React.useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('aqui',event)
        if( event.target?.form?.Name?.value && 
            event.target?.form?.Nickname?.value && 
            event.target?.form?.Region?.value &&
            event.target?.form?.Gender?.value &&
            event.target?.form?.Email?.value &&
            event.target?.form?.Age?.value && 
            event.target?.form?.trainerClass?.value
            ){
                const user = {
                    name: event.target.form.Name.value,
                    nickname: event.target.form.Nickname.value,
                    region:  event.target.form.Region.value,
                    gender:  event.target.form.Gender.value,
                    email:  event.target.form.Email.value,
                    age:  event.target.form.Age.value,
                    trainerClass:  event.target.form.trainerClass.value
                }
                fetch('http://localhost:4000/users',{
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)}
                )
            }else{
                setAlarm(true)
            }
       
    }
    return(
        <div className="d-flex justify-content-center">
            <div className=" row mb-20 d-flex justify-content-center  ">
                <h1 className="d-flex justify-content-center">SignUp</h1>
                <Form className="row ">
                    <Form.Group className="col-sm-5  " controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="Nickname">
                        <Form.Label>Pokemon trainer Nickname</Form.Label>
                        <Form.Control type="text" placeholder="Pokemon trainer nickname" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="Region">
                        <Form.Label>Region of origin</Form.Label>
                        <Form.Control type="text" placeholder="Region of origin" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="Gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Gender" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="Age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 " controlId="trainerClass">
                        <Form.Label>Trainer Class</Form.Label>
                        <Form.Control type="text" placeholder="Trainer class" />
                    </Form.Group>
                    <Form.Group className="col-sm-5 button " controlId="trainerClass">
                        <Button variant="info" type="submit"  size="lg" onClick={handleSubmit}>
                            SignUp
                        </Button>
                    </Form.Group>
      
                </Form>
            </div>
        </div>
    )
}