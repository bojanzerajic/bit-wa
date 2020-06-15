import React from 'react'
import './Iframe.css'

const Iframe = (props) => {
    if (props.videoId !== '') {
        return (
            <div className='Iframe__wrapper'>
                <iframe src={`https://www.youtube.com/embed/${props.videoId}`} height="400px" width="600px"></iframe>
            </div>
        )
    } else { return null }
}
export { Iframe }