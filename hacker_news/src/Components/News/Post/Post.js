import React from 'react';
import './Post.css'

export class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            by: '',
            time: 0,
            score: '',
            kids: []
        }
    }


    render() {
        if (!this.state) {
            return null;
        }

        return <div>
            <h4>{this.state.title}</h4>
            <div className="Post__ListWrapper">
                <p className="Post__parag">	&hearts; {this.state.score} points</p>
                <p className="Post__parag">&#xf2bb;{this.state.by}</p>
                <p className="Post__parag">{this.state.time}</p>
                <p className="Post__parag">{this.state.kids ? this.state.kids.length : '0'} comments</p>
            </div>
        </div>
    }
    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then(res => res.json())
            .then(res => this.setState({
                title: res.title,
                by: res.by,
                time: res.time,
                score: res.score,
                kids: res.kids
            })
            )
    }
}