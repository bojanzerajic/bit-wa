import React from 'react'
import './RelatedVideo.css'

const RelatedVideo = (props) => {

    return (
        <div className='RelatedVideo__wrapper' onClick={() => props.getId(props.id)}>
            <img src={props.image} alt="bla bla"></img>
            <div className='RelatedVideo__text'>
                <h4>{props.name}</h4>
                <p>{props.channelTitle} <br></br> {props.description}</p>
            </div>
        </div>
    )
}
export { RelatedVideo }