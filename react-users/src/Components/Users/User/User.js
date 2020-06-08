import React from 'react';
import './User.css'


   const User = (props) => {
    
   return <div className="Wrapper">
      <img src={props.image} alt="avatar" className="User__img"></img>
      <div className="User__Wrapper_Paragraph">
         <p>name: {props.name} <br></br> email: {props.email} <br></br> date of birth: {props.dateOfBirth}</p>
      </div>
   </div>
}


export { User }