import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './Styles.css'
import { useNavigate } from 'react-router-dom';


export const SingUp = () => {
    const [alarm,setAlarm] = React.useState(false)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        if( event.target?.form?.Name?.value && 
            event.target?.form?.Nickname?.value && 
            event.target?.form?.Region?.value &&
            event.target?.form?.Gender?.value &&
            event.target?.form?.Email?.value &&
            event.target?.form?.Age?.value 
            ){
                const user = {
                    name: event.target.form.Name.value,
                    nickname: event.target.form.Nickname.value,
                    region:  event.target.form.Region.value,
                    gender:  event.target.form.Gender.value,
                    email:  event.target.form.Email.value,
                    age:  event.target.form.Age.value,
                    trainerClass:  document.getElementById('trainer').value
                }
                fetch('http://localhost:4000/users',{
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)}
                )
            window.localStorage.setItem('user',event.target.form.Email.value)
            navigate('/homeProfile')

            }else{
                console.log('Invalid')
                setAlarm(true)
            }
    }
    return(
        <div className=" mainContainer">
            <div className=" row mb-20 d-flex justify-content-center  ">
                <h1 className="h1" >SignUp</h1>
                <form id="form"> 
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Name</label>
                            <input type="text" id="Name" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Nickname</label>
                            <input type="text" id="Nickname" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Age</label>
                            <input type="text" id="Age" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Gender</label>
                            <input type="text" id="Gender" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="text" id="Email" className="form-control" />
                        </div>
                    
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Region</label>
                            <input type="text" id="Region" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputEmail4" className="form-label">Trainer</label>
                            <select id="trainer" className="selector select">
                                <option value="battle">Battle</option>
                                <option value="show">Show</option>
                            </select>
                        </div>

                    </div>
                    <div className="d-grid gap-2 Button">
                        <Button variant="info" formTarget="form"  type="submit"  size="lg" onClick={handleSubmit}>
                                SignUp
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}