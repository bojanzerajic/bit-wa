import React from 'react'
import './SingleVideo.css'

const SingleVideo = (props) => {
    return (
        <div className='SingleVideo__wrapper' onClick={() => props.playVideo(props.id)}>
            <div>
                <img id={props.id} src={props.image} alt='bla bla' />
            </div>
            <div className='SingleVideo__textWrapper'>
                <h4 id={props.id}>{props.title}</h4>
                <p id={props.id}>{props.channelTitle} <br></br> {props.description}</p>
            </div>
        </div>

    )
}
export { SingleVideo }