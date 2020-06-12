import React from 'react'

const SingleVideo = (props) => {
    return (
        <div onClick={props.playVideo}>
            <img src={props.image} alt='bla bla' />
            <h4>{props.title}</h4>
            <p>{props.channelTitle}  {props.description}</p>
        </div>

    )
}
export { SingleVideo }