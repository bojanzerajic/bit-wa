import React from 'react'
import './Show.css'
import PropTypes from "prop-types";

export const Show = (props) => {
    return <div className='Show__singleShowCard'>
        <img src={props.image}></img>
        <p>{props.name}</p>
    </div>
}
Show.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    key: PropTypes.number
}