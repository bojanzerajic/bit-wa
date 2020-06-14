import React from 'react'

const SingleVideo = (props) => {
    return (
         <div onClick={props.playVideo}>
                <img id={props.id} src={props.image} alt='bla bla' />
                <h4 id={props.id}>{props.title}</h4>
                <p id={props.id}>{props.channelTitle}  {props.description}</p>
        </div>

    )
}
export { SingleVideo }