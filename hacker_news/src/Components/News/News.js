import React from 'react';
import "./News.css"
import { Post } from './Post/Post'

export class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = { storyIds: [] }
    }
    render() {
        return <ul className="News__wrapper">
            {this.state.storyIds.slice(0, 10).map((id, i) => <li className="News__ListItem"><Post key={i} id={id} /></li>)}
        </ul>
    }
    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(res => this.setState({ storyIds: res }))
    }
}