import React from 'react'
import './ListOfPosts.css'
import {Post} from './Post/Post'

class ListOfPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state= {posts: []}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data}))
    }
    render() {
        return ( 
            <div>
                <h2>Posts</h2>
                {this.state.posts.slice(0,7).map((item, i) => <Post id={item.id}  key={i} title={item.title} body={item.body}/>)}
            </div>
        )
    }
}
export {ListOfPosts}