import React from 'react'
import {Link} from 'react-router-dom'

const Post = (props) => {
    return (
        <div>
            <Link to={`/single-post/${props.id}`}><h4>{props.title}</h4></Link>
            <p>{props.body}</p>
            <hr></hr>
        </div>
    )

}
export { Post}