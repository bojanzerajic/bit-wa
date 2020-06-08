import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types"

const UserCard = (props) => {
    return (
        <div className="UserCard__wrapper">
            <img src={props.image} alt="cardsavatar"></img>
            <div>
                <div className='UserCard__nameWrapper'>
                    <p>{props.name}</p>
                </div>
                <p>email:{props.email}</p>
                <p>Date of birth:{props.dateOfBirth}</p>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired
}

export { UserCard };