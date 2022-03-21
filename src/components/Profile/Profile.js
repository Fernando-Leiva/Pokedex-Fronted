import React from "react";
import Figure from 'react-bootstrap/Figure'
import image from './pokemon_anime.png'
import './Styles.css'


export const Profile = (props) => {
    return(
        <div className="container">
            <div className="divAvatar">
                <img src={image} alt="Avatar" className="avatar"/>
            </div>
            <h4 className="h4">{props.nickname}</h4>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" readOnly value={props.name} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Age</label>
                    <input type="text" className="form-control" readOnly value={props.age}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Gender</label>
                    <input type="text" className="form-control" readOnly value={props.gender}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="text" className="form-control" readOnly value={props.email}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Trainer</label>
                    <input type="text" className="form-control" readOnly value={props.trainer}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Region</label>
                    <input type="text" className="form-control" readOnly value={props.region}/>
                </div>
            </div>
        </div>
    )
}