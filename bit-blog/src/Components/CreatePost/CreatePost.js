import React from 'react'
import './CreatePost.css'

class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='CreatePost__container'>
                <h2>NEW POST</h2>
                <label>Title</label>
                <input type='text' id='title' placeholder='Text title' />
                <label>Content</label>
                <textarea />
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}
export { CreatePost }