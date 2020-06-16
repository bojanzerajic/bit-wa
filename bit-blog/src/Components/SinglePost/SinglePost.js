import React from 'react'
import './SinglePost.css'
import {Link} from 'react-router-dom'

class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            author: []
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ post: data }))
            .then( fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ author: data })))
    }
   

    render() {
        return (
            <div>
               <h1>{this.state.post.title}</h1>
               <Link to={`/author/:${this.state.author.id}`}><h3>{this.state.author.name}</h3></Link>
               <p>{this.state.post.body}</p>
            </div>
        )
    }
}
export { SinglePost }