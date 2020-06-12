import React from 'react'
import './Iframe.css'

const Iframe = (props) => {
    if (props.linkId !== '') {
        return (
            <iframe src={`https://www.youtube.com/embed/${props.linkId}`} height="400px" width="500px"></iframe>
            
        )
    } else { return null }
}
export { Iframe }