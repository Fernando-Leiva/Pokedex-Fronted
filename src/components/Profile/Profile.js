import React from "react";
import Button from 'react-bootstrap/Button'
import image from './pokemon_anime.png'
import './Styles.css'
import axios from 'axios'

export const Profile = (props) => {
    const [region,setRegion] = React.useState(props.region)
    const [name,setName] = React.useState(props.name)
    const [age,setAge] = React.useState(props.age)
    const [gender,setGender] = React.useState(props.gender)
    const [trainer,setTrainer] = React.useState(props.trainer)

    const handleEdit = (e) => {
        e.preventDefault()
        const user={
            name: name,
            region:  region,
            gender:  gender,
            age:  age,
            email: props.email,
            trainerClass: trainer
        }
        axios.put('http://localhost:4000/user',{
            user: user
        })
        .then(res => {
            console.log(res)
            setAge(res.data.age)
            setName(res.data.name)
            setGender(res.data.gender)
            setTrainer(res.data.trainer)
            setRegion(res.data.region)
        })
        .catch(error => console.error(error))
    } 
    
    return(
        <div className="container">
            <div className="divAvatar">
                <img src={image} alt="Avatar" className="avatar"/>
            </div>
            <h4 className="h4">{props.nickname}</h4>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" defaultValue={name} onChange={value=>setName(value.target.value)}  />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Age</label>
                    <input type="text" className="form-control" defaultValue={age} onChange={value=>setAge(value.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Gender</label>
                    <input type="text" className="form-control" defaultValue={gender} onChange={(value)=>setGender(value.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="text" className="form-control" readOnly value={props.email} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Trainer</label>
                    <input type="text" className="form-control" defaultValue={trainer} onChange={(value)=>setTrainer(value.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Region</label>
                    <input type="text" className="form-control" defaultValue={region} onChange={value=>setRegion(value.target.value)} />
                </div>
            </div>
            <Button variant="success" onClick={handleEdit} size="lg">Editar</Button>
        </div>
    )
}