import React from 'react';
import './User.css'


const User = (props) => {
    return <div className="Wrapper">
               <img src={props.image} alt="avatar" className="User__img"></img>
            <div>
               <p>name: {props.name}</p>
               <p>email: {props.email}</p>
               <p>date of birth: {props.dateOfBirth}</p>
            </div>
          </div>
}

export { User }