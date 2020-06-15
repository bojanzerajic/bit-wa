import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Bit blog</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Authors'>Authors</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </div>
        )
    }
}
export { Home }